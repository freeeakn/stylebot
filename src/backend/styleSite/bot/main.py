# libraries

import asyncio
import os
import requests
import json
from aiogram import Bot, Dispatcher, F
from aiogram.types import (
    Message,
    BotCommand,
    KeyboardButton,
    ReplyKeyboardMarkup,
    # FSInputFile,
    # ShippingOption,
    # ShippingQuery,
    # LabeledPrice,
    # PreCheckoutQuery,
    # SuccessfulPayment,
    InlineKeyboardButton, InlineKeyboardMarkup, CallbackQuery,
)


# ----------------------------------------------------------------

# own modules

from config import (
    BOT_TOKEN,
)
from messages import MESSAGES

# ----------------------------------------------------------------

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot=bot)
API = 'ff5562c34391a3fce2f7436a78c1661b'

# command list setup
async def on_startup():
    main_menu_commands = [
        BotCommand(command='/start', description='Начало работы'),
        BotCommand(command='/support', description='Поддержка'),
        BotCommand(command='/get_recommendations', description = 'Получить рекомендации'),
    ]
    await bot.set_my_commands(main_menu_commands)


# # ----------------------------------------------------------------

# bot functionality

@dp.message(F.text == '/start')
async def process_start_command(message: Message):
    await message.answer(text=MESSAGES['start'], parse_mode='html')

#----------------------------------------------------------------

@dp.message(F.text == '/support')
async def process_start_command(message: Message):
    await message.answer(text=MESSAGES['help'], parse_mode='html')



@dp.message(F.text == '/get_recommendations')
async def get_rec_command(message: Message):
     await message.answer(text=MESSAGES['get_recommendations'], parse_mode='html')
     await message.answer(text = "Введите ваш город")

       
@dp.message(F.text)
async def get_city (message: Message):
    city = message.text.strip().lower()
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric'
    response = requests.get(url)
    data = json.loads(response.text)
    if data["cod"] == 200:
        await message.answer(text = f'Сейчас погода: {data["main"]["temp"]}, но нахуй не нужна нам тут эта погода, мы просто проверяем работает эта шайтан машина или нет')
    else:
        await message.answer(text = "Извините, возникла ошибка, скорее всего вы неверно указали название города. Попробуйте ещё раз!")
    # print(data)

    

@dp.message(F.text)
async def echo(message: Message):
    print(message.text)
    await message.answer(message.text, parse_mode='html')


async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        dp.startup.register(on_startup)
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot off...")
