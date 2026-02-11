from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, InputFile
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

TOKEN = os.getenv("BOT_TOKEN")
if not TOKEN:
    raise ValueError("BOT_TOKEN не найден в переменных окружения")

# Ссылка на веб-шоп
URL = "https://rzabeyda.github.io/Lidl/?v=2"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_name = update.effective_user.first_name
    text = f"Привет, {user_name} 🤗"

    keyboard = [[InlineKeyboardButton("Зашопиться 🛍️", url=URL)]]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # Отправляем картинку + текст + кнопку
    with open("lidl.png", "rb") as f:  # путь к твоей картинке
        await update.message.reply_photo(photo=InputFile(f), caption=text, reply_markup=reply_markup)

if __name__ == "__main__":
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("Бот запущен!")
    try:
        app.run_polling()
    except KeyboardInterrupt:
        print("Всё ровно!")