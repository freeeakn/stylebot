# from django.shortcuts import render
from django.conf import settings
from rest_framework import viewsets, views
from .models import *
from .serializer import *
from rest_framework.response import Response
from .bot import bot

bot_name = settings.TELEGRAM_BOT_NAME
bot_token = settings.TELEGRAM_BOT_TOKEN

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class RegView(views.APIView):

    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            bot.send_message(request.data['id'], str(request.data))
            serializer.save()
        return Response(serializer.data)
    
class LoginView(views.APIView):
    def post(self, request):
        Id = str(request.data['id'])
        if not request.data['hash']:
            return Response({'data': 'Handle the missing Telegram data in the response.'})
        
        try:
            acc = Profile.objects.get(id=Id)
            acc_data = {
                'auth_date': acc.auth_date,
                'first_name': acc.first_name,
                'hash': acc.hash,
                'id': acc.id,
                'photo_url': acc.photo_url,
                'username': acc.username,
            }
            return Response(acc_data)

        except:
            return Response({'data': 'Authentication was received more than a day ago.'})

class PayCart(views.APIView):
    def post(self, request):
        try:
            id = request.data['id']
            bot.send_message(id, 'Your Cart:')
            acc = Profile.objects.get(id=id)
            total_price = 0
            for item in request.data['cart']:
                temp = Item.objects.get(id=item['id'])
                temp.count = item['count']
                temp.price *= temp.count
                total_price += temp.price
                acc.cart.add(temp)
                # bot.send_photo(id, temp.img)
                bot.send_message(id, f'Item: {temp.title} - {temp.count}X Price: {temp.price}$')
            bot.send_message(id, f'Total price: {total_price}$')
            return Response({'data': 'Ok'})
        except:
            return Response({'data': 'first Err'})
