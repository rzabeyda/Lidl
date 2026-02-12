const products = [
    ["бананы","🍌",1.4],   ["яблоки","🍎",1.0],   ["лимон","🍋",0.5],
    ["огурцы","🥒",2.2],   ["морковь","🥕",0.6],  ["зелень","🥬",1.5],
    ["капуста","🥬",1.4],  ["картошка","🥔",0.8], ["лук","🧅",0.8],
    ["чеснок","🧄",2.0],   ["кофе","☕",6.5],     ["какао","🥤",5.0],
    ["чай","🍵",0.25],     ["хлебцы","🍞",2.7],   ["орехи","🥜",2.5],
    ["специи","🧄",2.0],   ["печень","🥩",1.2],
    ["мясо","🥩",5.0],     ["фарш","🍖",3.0],     ["курка","🍗",2.5],
    ["яйца","🥚",1.6],     ["сосиски","🌭",1.3],  ["колбаса","🥓",3],
    ["сыр","🧀",3.7],      ["творожки","🥞",0.4], ["творог","🥛",1.25],
    ["сметана","🫙",1.4],  ["масло","🧈",1.5],    ["молоко","🍶",0.7],
    ["кефир","🍶",0.7],    ["уксус","🍶",1.3],    ["льнянка","🌾",5.0],
    ["сливки","🥛",1.2],   ["сахар","🍬",0.8],
    ["мука","🌾",1.25],    ["подсол","🌻",2],     ["макарики","🍝",0.7],
    ["гречка","🍲",1.5],   ["рис","🍚",2.5],      ["овсянка","🥣",0.2],
    ["кетчуп","🍅",4.0],   ["хрен","🫚",1.0],     ["соевка","🥢",1.0],
    ["фейри","🧴",1.5],    ["губки","🧽",1.0],    ["унитазка","🚽",2.0],
    ["тряпки","🧹",1.0],   ["песок","🐱",5.0],    ["мыло","🧼",2.5],
    ["дезик","🧴",2.0],    ["душгель","🛀",2.5],  ["порошок","🧴",5.0],
    ["мочалка","🧽",0.5],  ["туалетка","🧻",2.0], ["бумага","🧻",2.5]
];

const container = document.getElementById("buttons-container");
const totalEl = document.getElementById("total");
const cartList = document.getElementById("cart-list");
let cart = {};

// Словарь уникальных иконок (PNG или emoji)
const iconsMap = {
    "капуста": "static/icons/cabbage.png",
    "зелень": "static/icons/green1.png",
    "какао": "static/icons/cacao.png",
    "хлебцы": "static/icons/crispbread.png",
    "специи": "static/icons/seasoning.png",
    "печень": "static/icons/liver.png",
    "фарш": "static/icons/minced-meat.png",
    "курка": "static/icons/chicken-leg.png",
    "сосиски": "static/icons/sausage.png",
    "колбаса": "static/icons/sausages.png",
    "творог": "static/icons/cottage-cheese.png",
    "творожки": "static/icons/candies.png",
    "сметана": "static/icons/whip-cream.png",
    "молоко": "static/icons/milk-bottle.png",
    "кефир": "static/icons/kefir.png",
    "уксус": "static/icons/vinegar.png",
    "сливки": "static/icons/milk-pack.png",
    "мочалка": "static/icons/sponge.png",
    "тряпки": "static/icons/hand.png",
    "песок": "static/icons/litter-box.png",
    "порошок": "static/icons/detergent.png",
    "бумага": "static/icons/tissue-box.png",
    "губки": "static/icons/sponge-1.png",
    "мука": "static/icons/flour.png",
    "подсол": "static/icons/olive-oil.png",
    "гречка": "static/icons/food.png",
    "овсянка": "static/icons/oatmeal.png",
    "дезик": "static/icons/deodorant.png",
    "чай": "static/icons/herbal-tea.png",
    "кетчуп": "static/icons/ketchup.png",
    "соевка": "static/icons/shoyu.png",
    "сахар": "static/icons/sugar.png",
    "льнянка": "static/icons/bean.png",
    "макарики": "static/icons/pasta.png",
    "унитазка": "static/icons/public-toilet.png",
    "фейри": "static/icons/cleaning.png",
    "картошка": "static/icons/potato.png",
    "бананы": "static/icons/bananas.png",
    "яблоки": "static/icons/apple.png",
    "лимон": "static/icons/lemon.png",
    "огурцы": "static/icons/cucumber.png",
    "морковь": "static/icons/carrot.png",
    "туалетка": "static/icons/toilet-paper.png",
    "лук": "static/icons/onion.png",
    "мясо": "static/icons/meat.png",
    "чеснок": "static/icons/garlic.png",
    "кофе": "static/icons/coffee-beans.png",
    "орехи": "static/icons/almond.png",
    "яйца": "static/icons/egg.png",
    "хрен": "static/icons/horseradish.png",
};

function updateTopButton(name) {
    const btn = document.querySelector(`.product-btn[data-name="${name}"]`);
    if (!btn) return;

    const countEl = btn.querySelector(".count");
    if (cart[name]) {
        countEl.textContent = cart[name].qty;
        countEl.style.display = "flex";
    } else {
        countEl.textContent = "";
        countEl.style.display = "none";
    }
}


function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

function showPriceEffect(btn, price) {
    const effect = document.createElement("div");
    effect.textContent = "+" + price.toFixed(2);
    effect.style.position = "absolute";
    effect.style.color = "white";
    effect.style.fontWeight = "bold";
    effect.style.fontSize = "32px"; // вместо 16px или дефолтного
    effect.style.left = "50%";
    effect.style.top = "-20px"; // чуть выше кнопки
    effect.style.transform = "translateX(-50%)";
    effect.style.pointerEvents = "none";
    effect.style.transition = "all 0.8s ease-out";
    effect.style.opacity = "1";

    // родитель кнопка уже relative
    btn.appendChild(effect);

    // анимация
    setTimeout(() => {
        effect.style.top = "-40px";
        effect.style.opacity = "0";
    }, 50);

    // удаляем после анимации
    setTimeout(() => {
        btn.removeChild(effect);
    }, 850);
}

// --- ВЕРХНИЙ БЛОК: генерация кнопок продуктов ---
products.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "product-btn";
    btn.dataset.name = p[0];
    btn.dataset.price = p[2];

    const icon = iconsMap[p[0]] || p[1];
    const emojiOrImg = icon.endsWith(".png")
        ? `<img src="${icon}" alt="${p[0]}" style="width:24px;height:24px;">`
        : icon;

    btn.innerHTML = `
        <div>${emojiOrImg}</div>
        <div style="font-size:10px;">${p[0]}</div>
        <div class="count"></div>
    `;
    container.appendChild(btn);

    btn.addEventListener("click", () => {
        vibrate();
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        cart[name] = cart[name] || { qty: 0, price: price };
        cart[name].qty++;

        const countEl = btn.querySelector(".count");
        countEl.textContent = cart[name].qty;
        countEl.style.display = "flex";
        showPriceEffect(btn, price);

        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 150);

        updateTotal();
        updateList();
    });
});



totalEl.addEventListener("click", () => {
    vibrate();

    cart = {};
    document.querySelectorAll(".product-btn .count").forEach(c => {
        c.textContent = "";
        c.style.display = "none";
    });
    updateTotal();
    updateList();
});

function updateTotal() {
    let sum = 0;
    for (let key in cart) sum += cart[key].qty * cart[key].price;
    totalEl.textContent = sum.toFixed(2) + " €";
}

function updateList() {
    cartList.innerHTML = ""; // очищаем

    const keys = Object.keys(cart);
    if (keys.length === 0) return;

    keys.forEach(key => {
        const item = cart[key];
        const prod = products.find(p => p[0] === key);
        let icon = iconsMap[key] || (prod ? prod[1] : "🛒");
        const emojiOrImg = icon.endsWith(".png")
            ? `<img src="${icon}" alt="${key}" style="width:24px;height:24px;">`
            : icon;

        const btnLower = document.createElement("button");
        btnLower.className = "product-btn"; // та же кнопка
        btnLower.dataset.name = key;
        btnLower.dataset.price = item.price;

        // фиксируем размер как у верхних
        btnLower.style.flex = "0 0 60px";
        btnLower.style.height = "60px";

        btnLower.innerHTML = `
            <div>${emojiOrImg}</div>
            <div style="font-size:10px;">${key}</div>
            <div class="count">${item.qty >= 2 ? item.qty : ""}</div>
        `;

        const countEl = btnLower.querySelector(".count");
        countEl.style.display = item.qty >= 2 ? "flex" : "none";

        btnLower.addEventListener("click", () => {
            vibrate();
            cart[key].qty--;
            if (cart[key].qty <= 0) delete cart[key];

            countEl.textContent = cart[key]?.qty || "";
            countEl.style.display = cart[key]?.qty ? "flex" : "none";

            updateTopButton(key);

            // анимация клика
            btnLower.classList.add("clicked");
            setTimeout(() => btnLower.classList.remove("clicked"), 150);

            updateTotal();
            updateList();
        });

        cartList.appendChild(btnLower);
    });

    cartList.style.display = "flex";
    cartList.style.flexWrap = "wrap";
    cartList.style.justifyContent = "center";
    cartList.style.gap = "8px";
}

// Кнопка RESET — очищает корзину
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
    vibrate();

    cart = {};
    document.querySelectorAll(".product-btn .count").forEach(c => {
        c.textContent = "";
        c.style.display = "none";
    });
    updateTotal();
    updateList();
});

// Кнопка NOTES — пока просто alert
const notesBtn = document.getElementById("notes-btn");
notesBtn.addEventListener("click", () => {
    vibrate();
    alert("Здесь можно писать заметки или инструкции 📋");
});

// Кнопка TOTAL уже есть, её функционал не меняем

