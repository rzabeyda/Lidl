const products = [
    ["бананы","🍌",1.4],   ["яблоки","🍎",1.0],   ["лимон","🍋",0.5],
    ["огурцы","🥒",2.2],   ["морковь","🥕",0.6],  ["зелень","🥬",1.5],
    ["капуста","🥬",1.4],  ["картошка","🥔",0.8], ["лук","🧅",0.8],
    ["чеснок","🧄",2.0],   ["кофе","☕",6.5],     ["какао","🥤",5.0],
    ["чай","🍵",0.25],     ["хлебцы","🍞",2.7],   ["орехи","🥜",2.5],
    ["хлеб","🍞",0.7],     ["специи","🧄",2.0],   ["печень","🥩",1.2],
    ["мясо","🥩",5.0],     ["фарш","🍖",3.0],     ["курка","🍗",2.5],
    ["яйца","🥚",1.6],     ["сосиски","🌭",1.3],  ["колбаса","🥓",3],
    ["сыр","🧀",3.7],      ["творожки","🥞",0.4], ["творог","🥛",1.25],
    ["сметана","🫙",1.4],  ["масло","🧈",1.5],    ["молоко","🍶",0.7],
    ["кефир","🍶",0.7],    ["уксус","🍶",1.3],    ["льнянка","🌾",5.0],
    ["сливки","🥛",1.2],   ["ванилин","🍦",0.8],  ["сахар","🍬",0.8],
    ["мука","🌾",1.25],    ["масло","🌻",1.5],    ["макарики","🍝",0.7],
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
    "капуста": "/static/icons/cabbage.png",   // PNG
    "зелень": "/static/icons/green.png",
    "какао": "/static/icons/cacao.png",
    "хлебцы": "/static/icons/crispbread.png",
    "специи": "/static/icons/seasoning.png",
    "печень": "/static/icons/liver.png",
    "фарш": "/static/icons/minced-meat.png",
    "курка": "/static/icons/chicken-leg.png",
    "сосиски": "/static/icons/sausage.png",
    "колбаса": "/static/icons/sausages.png",
    "творог": "/static/icons/cottage-cheese.png",
    "творожки": "/static/icons/candies.png",
    "сметана": "/static/icons/whip-cream.png",
    "молоко": "/static/icons/milk-bottle.png",
    "кефир": "/static/icons/kefir.png",
    "уксус": "/static/icons/vinegar.png",
    "сливки": "/static/icons/milk.png",
    "мочалка": "/static/icons/sponge.png",
    "тряпки": "/static/icons/hand.png",
    "мыло": "/static/icons/soap.png",
    "песок": "/static/icons/litter-box.png",
    "порошок": "/static/icons/detergent.png",
    "бумага": "/static/icons/tissue-box.png",
    "губки": "/static/icons/sponge (1).png",
    "мука": "/static/icons/flour.png",
    "масло": "/static/icons/olive-oil.png",
    "гречка": "/static/icons/food.png",
    "овсянка": "/static/icons/oatmeal.png",
    "дезик": "/static/icons/deodorant.png",
    "чай": "/static/icons/herbal-tea.png",
    "кетчуп": "/static/icons/ketchup.png",
    "соевка": "/static/icons/shoyu.png",
    "сахар": "/static/icons/sugar.png",
    "льнянка": "/static/icons/bean.png",
    "макарики": "/static/icons/pasta.png",
    "унитазка": "/static/icons/public-toilet.png",
    "фейри": "/static/icons/cleaning.png",

    // добавляй сюда остальные уникальные иконки
};

products.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "product-btn";
    btn.dataset.name = p[0];
    btn.dataset.price = p[2];

    // проверяем: если значение в iconsMap — это .png, вставляем <img>, иначе — emoji
    const icon = iconsMap[p[0]] || p[1]; // если не задано, берём дефолтное emoji
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
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        cart[name] = cart[name] || { qty: 0, price: price };
        cart[name].qty++;

        const countEl = btn.querySelector(".count");
        countEl.textContent = cart[name].qty;
        countEl.style.display = "flex";

        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 150);

        updateTotal();
        updateList();
    });
});


totalEl.addEventListener("click", () => {
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
    if(keys.length === 0) return; // ничего не показываем

    keys.forEach(key => {
        const item = cart[key];
        const prod = products.find(p => p[0] === key);
        const icon = prod ? prod[1] : "🛒";

        const btn = document.createElement("button");
        btn.className = "product-btn";
        btn.innerHTML = `
            <div>${icon}</div>
            <div style="font-size:10px;">${key}</div>
            <div class="count">${item.qty >= 2 ? item.qty : ""}</div>
        `;

        // показываем кружок только если qty >= 2
        const countEl = btn.querySelector(".count");
        countEl.style.display = item.qty >= 2 ? "flex" : "none";

        // клик на нижней кнопке уменьшает количество
        btn.addEventListener("click", () => {
            cart[key].qty--;
            if (cart[key].qty <= 0) delete cart[key];
            updateTotal();
            updateList();
        });

        cartList.appendChild(btn);
    });

    // стили, чтобы кнопки шли в ряд
    cartList.style.display = "flex";
    cartList.style.flexWrap = "wrap";
    cartList.style.justifyContent = "center";
    cartList.style.gap = "8px";
}

