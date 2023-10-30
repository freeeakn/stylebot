# from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets, views
from .models import *
from .serializer import *
from rest_framework.response import Response
from .bot import bot

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class LoginView(views.APIView):
    def post(self, request):
        bot.send_message(request.data['id'], str(request.data))
        print(request.data['id'])
        print(request.data)
        return JsonResponse(request.data)
