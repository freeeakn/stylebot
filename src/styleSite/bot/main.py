# libraries

import asyncio
import logging
import requests
import json
from aiogram import Bot, Dispatcher, F
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup

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



class Form(StatesGroup):
    weather = State()
    colour = State()

@dp.message(F.text == '/get_recommendations')
async def get_rec_command(message: Message, state: FSMContext):
     await state.set_state(Form.weather)
     await message.answer(text=MESSAGES['get_recommendations'], parse_mode='html')
     await message.answer(text = "Введите ваш город")


@dp.message(F.text.casefold() == "отмена")
async def cancel_message(message: Message, state: FSMContext):
    current_state = await state.get_state()
    if current_state is None:
        return
    logging.info("Cancelling state %r", current_state)
    await state.clear()
    await message.reply("Конечно, будем рады помочь вам в следующий раз!")


       
@dp.message(Form.weather)
async def get_city (message: Message, state: FSMContext):
    city = message.text.strip().lower()
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric'
    response = requests.get(url)
    data = json.loads(response.text)
    if int(data["main"]["temp"])<=0 and int(data["main"]["temp"])>=-50:
        print("холодно")
    if int(data["main"]["temp"])>0 and int(data["main"]["temp"])<=20:
        print("тепло")
    if int(data["main"]["temp"])>20 and int(data["main"]["temp"])<40:
        print("жарко")
    await state.update_data(weather = message.text)
    await state.set_state(Form.colour)
    if data["cod"] == 200:
        await message.answer(text = "Отлично, а теперь выберите, какую цветовую гамму одежды вы предпочитаете:",
    reply_markup=ReplyKeyboardMarkup(
            keyboard=[
            [
                KeyboardButton(text="Нейтральные цвета"),
            ],
            [
                KeyboardButton(text="Яркие цвета"),
            ],
            [
                KeyboardButton(text="Контрастные цвета"),
            ]
        ],
            resize_keyboard=True,
        ),
    )
    else:
        await message.answer(text = "Извините, возникла ошибка, скорее всего вы неверно указали название города. Попробуйте ещё раз!")













async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        dp.startup.register(on_startup)
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot off...")
