from rest_framework import serializers
from .models import Item, User


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            'id',
            'count',
            'title',
            'img',
            'desc',
            'category',
            'price',
            ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            ]