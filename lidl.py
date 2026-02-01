from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes
import os

FILE = "products.txt"
NOTES_FILE = "notes.txt"

PRODUCTS = [
    ("бананы", "🍌", 1.4),       ("яблоки", "🍎", 1.0),       ("лимон", "🍋", 0.5),
    ("огурцы", "🥒", 2.0),       ("морковь", "🥕", 0.6),      ("ялопено", "🌶️", 1.5),
    ("капуста", "🥬", 1.5),      ("картошк", "🥔", 0.8),      ("лук", "🧅", 0.8),
    ("чеснок", "🧄", 2.0),       ("туна", "🐟", 1.0),         ("кофе", "☕", 6.5),
    ("какао", "🥤", 5.0),        ("чай", "🍵", 0.25),          ("хлебцы", "🍞", 2.7),
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


# ---------------- Работа с корзиной ----------------
def read_products():
    if not os.path.exists(FILE):
        return {}
    cart = {}
    with open(FILE, "r", encoding="utf-8") as f:
        for line in f:
            item = line.strip()
            if any(n == item for n, _, _ in PRODUCTS):
                cart[item] = cart.get(item, 0) + 1
    return cart

def save_products(cart):
    with open(FILE, "w", encoding="utf-8") as f:
        for item, qty in cart.items():
            f.writelines((item + "\n") * qty)

# ---------------- Работа с заметками ----------------
def read_notes():
    if not os.path.exists(NOTES_FILE):
        return {}
    notes = {}
    with open(NOTES_FILE, "r", encoding="utf-8") as f:
        for line in f:
            if ":" in line:
                user_id, text = line.strip().split(":", 1)
                notes[int(user_id)] = text
    return notes

def save_notes(notes):
    with open(NOTES_FILE, "w", encoding="utf-8") as f:
        for user_id, text in notes.items():
            f.write(f"{user_id}:{text}\n")

# ---------------- Команды ----------------
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await send_menu(update)

async def note_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.message.from_user.id
    notes = read_notes()

    if context.args:
        text = " ".join(context.args)
        notes[user_id] = text
        save_notes(notes)
        await update.message.reply_text(f"✅ Заметка обновлена:\n{text}")
    else:
        text = notes.get(user_id, "📝 Заметка пуста.")
        await update.message.reply_text(f"Ваша заметка:\n{text}")

# ---------------- Отправка меню ----------------
async def send_menu(update: Update):
    cart = read_products()

    # --- Кнопки добавления ---
    add_keyboard = []
    row = []
    for name, icon, _ in PRODUCTS:
        button_text = f"✅ {name}" if name in cart else f"{icon} {name}"
        row.append(InlineKeyboardButton(button_text, callback_data=f"add_{name}"))
        if len(row) == 4:
            add_keyboard.append(row)
            row = []
    if row:
        add_keyboard.append(row)

    # --- Кнопки удаления ---
    remove_keyboard = []
    row = []
    for name in cart:
        row.append(InlineKeyboardButton(f"❌ {name}", callback_data=f"remove_{name}"))
        if len(row) == 4:
            remove_keyboard.append(row)
            row = []
    if row:
        remove_keyboard.append(row)

    # --- Нижняя строка ---
    bottom_row = [
        InlineKeyboardButton("Clear 🗑️", callback_data="clear_cart"),
        InlineKeyboardButton("Notes 📝", callback_data="note")
    ]

    keyboard = add_keyboard + remove_keyboard + [bottom_row]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # --- Текст корзины ---
    total = 0
    if cart:
        products_text = ""
        for name, qty in cart.items():
            prod = next(((i, p) for n, i, p in PRODUCTS if n == name), None)
            icon, price = prod if prod else ("❓", 0)
            subtotal = price * qty
            total += subtotal
            qty_text = f"x{qty}" if qty > 1 else ""
            products_text += f"**{icon} {name.upper()} {qty_text} — €{subtotal:.2f}**\n"
        products_text += f"\n**💰 ИТОГО: €{total:.2f}**"
    else:
        products_text = "**🛒 СПИСОК ПУСТ**"

    if update.message:
        await update.message.reply_text(products_text, reply_markup=reply_markup, parse_mode="Markdown")
    elif update.callback_query:
        await update.callback_query.message.edit_text(products_text, reply_markup=reply_markup, parse_mode="Markdown")

# ---------------- Обработка нажатий ----------------
async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    data = query.data
    cart = read_products()
    notes = read_notes()
    user_id = query.from_user.id

    if data.startswith("add_"):
        product = data[4:]
        cart[product] = cart.get(product, 0) + 1
        save_products(cart)
        await send_menu(update)
    elif data.startswith("remove_"):
        product = data[7:]
        if product in cart:
            if cart[product] > 1:
                cart[product] -= 1
            else:
                del cart[product]
            save_products(cart)
        await send_menu(update)
    elif data == "clear_cart":
        cart.clear()
        save_products(cart)
        await send_menu(update)
    elif data == "note":
        text = notes.get(user_id, "📝 Заметка пуста.")
        await query.message.reply_text(f"Ваша заметка:\n{text}\n\nЧтобы обновить, напишите /note Ваш текст")

# ---------------- Запуск бота ----------------
def main():
    TOKEN = "8353827125:AAG2HR63c6_bvJx28kTnJE4ZIlxZy44TYfw"
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("note", note_command))
    app.add_handler(CallbackQueryHandler(button))
    print("✅ Lidl Bot запущен ;) ")
    app.run_polling()

if __name__ == "__main__":
    main()
