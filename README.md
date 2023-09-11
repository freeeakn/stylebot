# stylebot

Данный проект представляет собой платформу, предназначенную для помощи пользователям в подборе стильной и модной одежды, учитывая их предпочтения, тип фигуры, погодные условия и различные события. Проект включает следующие модули:

1. Чатбот:
   - Чатбот разработан для общения с пользователями и получения информации о их предпочтениях в отношении моды и стиля.
   - Чатбот использует натуральную обработку языка (Natural Language Processing, NLP), чтобы понимать ввод пользователя и предоставлять соответствующие рекомендации по одежде.

2. Сайт:
   - Сайт предоставляет пользовательский интерфейс для доступа к функциональности платформы.
   - Пользователи могут зарегистрироваться, войти в систему и сохранять информацию о своих предпочтениях в одежде.
   - Веб-интерфейс позволяет пользователям просматривать рекомендации по одежде и настраивать параметры для более точных подборов.

3. Нейросеть:
   - Нейросеть используется для обработки больших объемов данных и анализа информации пользователей, чтобы предоставить более точные рекомендации.
   - Нейросеть обучается на основе данных пользователя и агрегированных данных о моде и стиле.

## Требования

- Django
- Aiogram
- Поддержка базы данных (например, PostgreSQL)
- JWT для аутентификации и авторизации пользователей
- Нейросеть для обработки данных и предоставления рекомендаций по одежде

## Установка и запуск

1. Клонируйте репозиторий:

   ```shell
   git clone https://github.com/freeeakn/stylebot.git
   или
   git clone git@github.com:freeeakn/stylebot.git
   (если у вас есть ssh ключ)
   ```

2. Установите необходимые зависимости:

   - Для серверной части (django):
     ```shell
     cd backend
     ```
   - Для клиентской части (react):
     ```shell
     cd frontend
     npm install
     ```

3. Настройте базу данных (например, PostgreSQL).

4. Сконфигурируйте приложение:

   - Переименуйте файл `.env.example` в `.env` и установите необходимые переменные окружения, такие как настройки базы данных и секретный ключ JWT.

5. Откройте приложение в браузере по адресу [http://localhost:4200](http://localhost:4200).

## Вклад

Если вы хотите внести свой вклад в развитие проекта, пожалуйста, ознакомьтесь с [CONTRIBUTING.md](CONTRIBUTING.md) для получения дополнительной информации.

## Авторы

- [@machinee](https://github.com/freeeakn)
- [@andreyakakudryash](https://github.com/andreyakakudryash)
- [@SD-Kalsky](https://github.com/SD-Kalsky)
- Другие участники проекта (Все подпишитесь на меня на гитхабе и я вас укажу)

## Лицензия

Этот проект лицензирован согласно лицензии MIT. Подробности смотрите в файле [LICENSE](LICENSE).
