from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

print("===== Запущена версия бота 1.0 =====")
TOKEN = "8329451130:AAFUUW8G45LY2mobMo9yK33cnTbEnN38lY8"
URL = "https://rzabeyda.github.io/Lildl-Go/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[InlineKeyboardButton("Открыть", url=URL)]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Привет!", reply_markup=reply_markup)

if __name__ == "__main__":
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()
    print("Бот запущен! Версия 1")
    icon_path = os.path.join("app", "static", "icons", "cottage-cheese.png")
    print("Полный путь до иконки:", os.path.abspath(icon_path))
