# from django.shortcuts import render
from rest_framework import viewsets 
# from .models import User
from .models import Item
# from .serializer import UserSerializer
from .serializer import ItemSerializer
from rest_framework.response import Response

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
