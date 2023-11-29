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
    ReplyKeyboardRemove,
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
from outfits import case_generator, get_random_outfit
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


def get_weather(city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric'
    response = requests.get(url)
    data = json.loads(response.text)
    temperature = int(data["main"]["temp"])
    return temperature

def get_code(city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric'
    response = requests.get(url)
    data = json.loads(response.text)
    code = data["cod"]
    return code

@dp.message(F.text == '/start')
async def process_start_command(message: Message):
    await message.answer(text=MESSAGES['start'], parse_mode='html')

#----------------------------------------------------------------

@dp.message(F.text == '/support')
async def process_support_command(message: Message):
    await message.answer(text=MESSAGES['help'], parse_mode='html')



class Form(StatesGroup):
    weather = State()
    colour = State()
    one_more_out = State()
    start_over = State()

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
    await state.clear(state)
    await message.reply("Конечно, будем рады помочь вам в следующий раз!")


       
@dp.message(Form.weather)
async def get_city (message: Message, state: FSMContext):
    city = message.text.strip().lower()
    code = get_code(city)

    if code == 200:
        temperature = get_weather(city)
        if temperature <=0 and temperature>=-50:
            weather_state = "холодно"
        if temperature>0 and temperature<=20:
            weather_state = "тепло"
        if temperature>20 and temperature<=40:
            weather_state = "жарко"
    else:
        await message.answer(text = "Извините, возникла ошибка, скорее всего вы неверно указали название города. Попробуйте ещё раз!")

    
    await state.update_data(weather_state=weather_state)
    await state.set_state(Form.colour)
    await message.answer(text = "Отлично, а теперь выберите, какую цветовую гамму одежды вы предпочитаете:",
    reply_markup=ReplyKeyboardMarkup(
            keyboard = [
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

@dp.message(Form.colour)
async def case_generator_handler (message: Message, state: FSMContext):
    selected_color = message.text
    await state.update_data(selected_color = selected_color)
    await message.answer(text="Формируется образ...", reply_markup=ReplyKeyboardRemove())
    data = await state.get_data()
    weather_state = data.get('weather_state')
    data1 = await state.get_data()
    color = data1.get('selected_color')
    recommendation_parametr = (weather_state, color)

    if recommendation_parametr in case_generator:
        outfit_list = case_generator[recommendation_parametr]
        await state.update_data(outfit_list = outfit_list)
        recomendation = get_random_outfit(outfit_list)  
        await state.set_state(Form.one_more_out)
        await message.answer(text=recomendation, 
        reply_markup = ReplyKeyboardMarkup(
            keyboard=[
            [
                KeyboardButton(text="Ещё один образ"),
                KeyboardButton(text="Ввести новые данные"),
            ],
        ],
        resize_keyboard=True,
        ),
    )
    else:
        await message.answer(text = "Извините, но мы не смогли подобрать вам образы, попробуйте перезапустить бот и ввести параметры снова")


@dp.message(lambda message: message.text == "Ещё один образ", Form.one_more_out)
async def one_more_outfit (message: Message, state: FSMContext):
    await message.answer(text="Формируется образ...", reply_markup=ReplyKeyboardRemove())
    data = await state.get_data()
    weather_state = data.get('weather_state')
    data1 = await state.get_data()
    color = data1.get('selected_color')
    recommendation_parametr = (weather_state, color)

    if recommendation_parametr in case_generator:
        outfit_list = case_generator[recommendation_parametr]
        recomendation = get_random_outfit(outfit_list)  
        await message.answer(text=recomendation, 
        reply_markup = ReplyKeyboardMarkup(
            keyboard=[
            [
                KeyboardButton(text="Ещё один образ"),
                KeyboardButton(text="Ввести новые данные"),
            ],
        ],
        resize_keyboard=True,
        ),
    )
    
    else:
        await message.answer(text = "Извините, но мы не смогли подобрать вам образы, попробуйте перезапустить бот и ввести параметры снова")


@dp.message(lambda message: message.text == "Ввести новые данные")
async def start_again (message: Message, state: FSMContext):
    await state.clear()
    await state.update_data(outfit_list=None, weather_state=None, color=None)
    await message.answer("...", reply_markup=ReplyKeyboardRemove())
    await get_rec_command(message, state)



async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        dp.startup.register(on_startup)
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot off...")
