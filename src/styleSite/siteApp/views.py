# from django.shortcuts import render
from django.conf import settings
from rest_framework import viewsets, views
from .models import *
from .serializer import *
from rest_framework.response import Response
from .bot import bot
from django_telegram_login.widgets.constants import (
    SMALL, 
    MEDIUM, 
    LARGE,
    DISABLE_USER_PHOTO,
)
from django_telegram_login.widgets.generator import (
    create_callback_login_widget
)
from django_telegram_login.authentication import verify_telegram_authentication
from django_telegram_login.errors import (
    NotTelegramDataError, 
    TelegramDataIsOutdatedError,
)

bot_name = settings.TELEGRAM_BOT_NAME
bot_token = settings.TELEGRAM_BOT_TOKEN

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class RegView(views.APIView):
    def get(self, request):
        telegram_login_widget = create_callback_login_widget('LookovitsaBot', size=SMALL)
        data = {'telegram_login_widget': telegram_login_widget}
        Response(data)

    def post(self, request):
        serializer = ProfileSerializer(data= request.data)
        if serializer.is_valid(raise_exception=True):
            bot.send_message(request.data['id'], str(request.data))
            serializer.save()
        return Response(serializer.data)
    
class LoginView(views.APIView):
    def post(self, request):
        if not request.data['hash']:
            return Response({'data': 'Handle the missing Telegram data in the response.'})
        
        try:
            result = verify_telegram_authentication(
                bot_token=bot_token, request_data=request.data
            )
        except TelegramDataIsOutdatedError:
            return Response({'data': 'Authentication was received more than a day ago.'})

        except NotTelegramDataError:
            return Response({'data': 'The data is not related to Telegram!'})
        
        return Response(result)