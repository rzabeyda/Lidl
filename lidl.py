import os
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, InputFile, WebAppInfo, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Получаем токен из переменной окружения
TOKEN = os.getenv("BOT_TOKEN")
if not TOKEN:
    raise ValueError("BOT_TOKEN не найден в переменных окружения")

# Ссылка на веб-шоп
URL = "https://rzabeyda.github.io/Lidl/?v=2"


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_name = update.effective_user.first_name or "друг"
    text = f"Привет, {user_name} 🤗"

    # Кнопка WebApp
    keyboard = [[
        InlineKeyboardButton(
            text="Зашопиться 🛍️",
            web_app=WebAppInfo(url=URL)
        )
    ]]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # Отправка фото + текста + кнопки
    photo_path = "duck1.jpg"
    if not os.path.exists(photo_path):
        await update.message.reply_text("Ошибка: картинка не найдена на сервере.")
        return

    with open(photo_path, "rb") as photo_file:
        await update.message.reply_photo(
            photo=InputFile(photo_file, filename="duck_fresh.jpg"),
            caption=text,
            reply_markup=reply_markup
        )


if __name__ == "__main__":
    # Создаём приложение бота
    app = ApplicationBuilder().token(TOKEN).build()

    # Регистрируем обработчик /start
    app.add_handler(CommandHandler("start", start))

    print("Бот запущен! Отправьте /start в Telegram.")

    try:
        app.run_polling()
    except KeyboardInterrupt:
        print("Бот остановлен вручную.")