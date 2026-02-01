from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes
import os

cart = {}

PRODUCTS = [
    ("бананы", "🍌", 1.5),       ("яблоки", "🍎", 1.0),       ("лимон", "🍋", 0.5),
    ("огурцы", "🥒", 2.0),       ("морковь", "🥕", 0.6),      ("ялопено", "🌶️", 1.5),
    ("капуста", "🥬", 1.5),      ("картошк", "🥔", 0.8),      ("лук", "🧅", 0.8),
    ("чеснок", "🧄", 2.0),       ("туна", "🐟", 1.0),         ("кофе", "☕", 6.5),
    ("какао", "🥤", 5.0),        ("чай", "🍵", 0.5),          ("хлебцы", "🍞", 2.7),
    ("орехи", "🥜", 2.5),        ("хлеб", "🍞", 0.7),         ("печенье", "🍪", 1.75),
    ("чесночк", "🧄", 2.0),      ("перец", "🌶️", 1.5),        ("соль", "🧂", 1.0),
    ("паприка", "🌶️", 1.5),      ("печенка", "🥩", 1.2),      ("мясо", "🥩", 5.0),
    ("фарш", "🍖", 3.0),         ("курка", "🍗", 2.5),        ("яйца", "🥚", 1.6),
    ("сосиски", "🌭", 1.3),      ("колбаска", "🥓", 2.75),    ("бекон", "🥓", 2.0),
    ("сыр", "🧀", 3.7),          ("творожк", "🥛", 0.4),      ("творог", "🥛", 1.25),
    ("сметана", "🫙", 1.4),      ("мазик", "🧴", 2.5),        ("масло", "🧈", 1.5),
    ("молоко", "🥛", 0.7),       ("кефир", "🥛", 0.7),        ("уксус", "🍶", 1.3),
    ("льнянка", "🌾", 5.0),      ("сливки", "🥛", 1.2),       ("ванилин", "🍦", 0.8),
    ("сахар", "🍬", 0.8),        ("мука", "🌾", 1.25),        ("морожен", "🍨", 0.8),
    ("пельмен", "🥟", 2.3),      ("подсолн", "🌻", 1.5),      ("макарон", "🍝", 0.7),
    ("гречка", "🍲", 1.5),       ("рис", "🍚", 2.5),          ("овсянка", "🥣", 0.2),
    ("кетчуп", "🍅", 4.0),       ("хрен", "🌿", 1.0),         ("соевка", "🥢", 1.0),
    ("минерал", "💧", 1.0),      ("фейри", "🧴", 1.5),        ("губки", "🧽", 1.0),
    ("унитазк", "🚽", 2.0),      ("тряпки", "🧹", 1.0),       ("кузя", "🐱", 5.0),
    ("мыло", "🧼", 2.5),         ("салфетк", "🧻", 1.25),     ("дезик", "🧴", 2.0),
    ("душгель", "🛀", 2.5),      ("паста", "🪥", 2.0),        ("ухочист", "🦻", 2.5),
    ("спонч", "💧", 2.5),        ("тампики", "🩸", 5.0),      ("рогатки", "🦷", 2.5),
    ("порошок", "🧴", 5.0),      ("мочалка", "🧽", 0.5),      ("туалетка", "🧻", 2.0),
    ("бумага", "🧻", 2.5)
]


def build_keyboard():
    buttons = []
    row = []
    for i, (name, emoji, price) in enumerate(PRODUCTS):
        text = f"✅ {name}" if name in cart else f"{emoji} {name}"
        row.append(InlineKeyboardButton(text, callback_data=name))
        if (i + 1) % 3 == 0:  # 3 кнопки в ряд
            buttons.append(row)
            row = []
    if row:
        buttons.append(row)

    # Нижняя строка: корзина и очистка
    buttons.append([
        InlineKeyboardButton("🛒 Корзина", callback_data="cart"),
        InlineKeyboardButton("🗑️ Очистить корзину", callback_data="clear")
    ])
    return InlineKeyboardMarkup(buttons)

# ---------------- Обработка нажатий ----------------
async def button_click(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    product = query.data

    if product == "cart":
        if not cart:
            text = "Корзина пуста 🛒"
        else:
            text = "\n".join([f"{name} x{qty}" for name, qty in cart.items()])
        await query.message.edit_text(text, reply_markup=build_keyboard())

    elif product == "clear":
        cart.clear()
        await query.message.edit_text("Корзина очищена 🗑️", reply_markup=build_keyboard())

    else:  # Добавление товара
        cart[product] = cart.get(product, 0) + 1
        text = "Выбрано:\n" + "\n".join([f"{name} x{qty}" for name, qty in cart.items()])
        await query.message.edit_text(text, reply_markup=build_keyboard())

# ---------------- Команда /start ----------------
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Привет! Выбери продукт 🛒",
        reply_markup=build_keyboard()
    )

# ---------------- Запуск бота ----------------
def main():
    TOKEN = "8397688828:AAFmYXqJjeyztvTq5iDVilwdzh0chGGGlfc"
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_click))

    print("✅ Бот запущен!")
    app.run_polling()

if __name__ == "__main__":
    main()