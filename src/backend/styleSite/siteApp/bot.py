import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())
import telebot

BOT_TOKEN = os.environ.get("BOT_TOKEN")

bot=telebot.TeleBot(token=BOT_TOKEN)