from django.conf import settings

from django_telegram_login.widgets.constants import (
    MEDIUM,
)
from django_telegram_login.widgets.generator import (
    create_callback_login_widget,
)


bot_name = settings.TELEGRAM_BOT_NAME
bot_token = settings.TELEGRAM_BOT_TOKEN

telegram_login_widget = create_callback_login_widget(bot_name, corner_radius=10, size=MEDIUM)
