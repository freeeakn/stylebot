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