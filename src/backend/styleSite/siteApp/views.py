# from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *
from rest_framework.response import Response

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
