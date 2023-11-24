from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'key', 'name']


class ItemSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)

    class Meta:
        model = Item
        fields = ['id', 'title', 'img', 'desc', 'categories', 'price', 'count']

    def create(self, validated_data):
        categories_data = validated_data.pop('categories')
        item = super().create(validated_data)
        for category in categories_data:
            item.categories.add(Category.objects.get(id=category['id']))
        item.save()
        return item


class ProfileSerializer(serializers.ModelSerializer):
    cart = ItemSerializer(many=True)
    
    class Meta:
        model = Profile
        fields = ['auth_date', 'first_name', 'hash', 'id', 'photo_url', 'username', 'cart']
    
    def create(self, validated_data):
        # Custom create method in case you need to handle nested writes or specific logic
        # This example doesn't handle nested relationships creation.
        profile = Profile.objects.create(**validated_data)
        return profile

    def update(self, instance, validated_data):
        # Special handling for the cart many-to-many field
        # Assuming 'cart' is a list of item IDs
        cart_data = validated_data.pop('cart', None)
        if cart_data is not None:
            # Clear existing items and add the new ones
            instance.cart.clear()
            for item_data in cart_data:
                item_id = item_data.get('id')
                item = Item.objects.get(id=item_id)  # You should handle DoesNotExist and ValidationError here
                instance.cart.add(item)

        instance.save()
        return instance
