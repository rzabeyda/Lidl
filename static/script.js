const defaultProducts = [
    ["бананы","🍌",1.2],   ["яблоки","🍎",2.0],   ["огурцы","🥒",2.2],
    ["морковь","🥕",0.4],  ["капуста","🥬",0.5],  ["картошка","🥔",0.5],
    ["лук","🧅",0.35],     ["чеснок","🧄",2.0],   ["тунец","🐟",1.0],
    ["чай","🍵",0.25],     ["хлебцы","🍞",2.5],   ["орехи","🥜",2.5],
    ["печенье","🍪",2.2],
    ["мясо","🥩",5.0],     ["фарш","🍖",2.0],     ["курка","🍗",2.4],
    ["яйца","🥚",2.0],     ["сосиски","🌭",1.3],  ["колбаса","🥓",3.0],
    ["сыр","🧀",3.0],      ["творожки","🥞",0.29],["творог","🥛",1.0],
    ["сметана","🫙",1.0],  ["масло","🧈",0.85],   ["молоко","🍶",1.0],
    ["кефир","🍶",1.0],    ["морожне","🍦",0.65], ["пельмени","🥟",2.7],
    ["палочки","🐟",1.6],  ["фри","🍟",2.0],
    ["уксус","🍶",0.9],
    ["сливки","🥛",0.35],  ["сахар","🍬",0.8],
    ["мука","🌾",1.0],     ["подсол","🌻",2.0],   ["макарики","🍝",1.0],
    ["гречка","🍲",1.5],   ["рис","🍚",3.0],      ["овсянка","🥣",0.2],
    ["специи","🧄",2.0],
    ["кетчуп","🍅",4.0],   ["хрен","🫚",0.85],    ["соевка","🥢",1.0],
    ["фейри","🧴",1.5],    ["губки","🧽",1.0],    ["унитазка","🚽",2.0],
    ["тряпки","🧹",1.0],   ["песок","🐱",5.0],    ["мыло","🧼",2.5],
    ["дезик","🧴",2.0],    ["душгель","🛀",2.5],  ["порошок","🧴",4.0],
    ["мочалка","🧽",0.5],  ["туалетка","🧻",1.7], ["бумага","🧻",2.2]
];

const catalogProducts = [
    ["помидоры","🍅",1.5],  ["перец","🫑",2.0],    ["апельсины","🍊",1.8],
    ["клубника","🍓",2.5],  ["виноград","🍇",2.5],  ["груши","🍐",1.5],
    ["шоколад","🍫",1.8],   ["кофе","☕",3.5],      ["йогурт","🍶",0.85],
    ["сок","🧃",1.5],       ["вода","💧",0.5],      ["майонез","🫙",2.0],
    ["грибы","🍄",2.0],     ["авокадо","🥑",1.5],  ["зелень","🌿",0.5],
    ["зубная","🦷",2.0],    ["шампунь","🚿",3.5],  ["фольга","📦",1.5],
    ["пакеты","🛍️",0.35],  ["консервы","🥫",1.5], ["горчица","🫙",1.2],
    ["чипсы","🥔",1.5],     ["конфеты","🍬",2.0],  ["рыба","🐠",3.5],
    ["лимон","🍋",0.5]
];

const iconsMap = {
    "капуста":"static/icons/cabbage.png","хлебцы":"static/icons/crispbread.png",
    "специи":"static/icons/seasoning.png","фарш":"static/icons/minced-meat.png",
    "курка":"static/icons/chicken-leg.png","сосиски":"static/icons/sausage.png",
    "колбаса":"static/icons/sausages.png","творог":"static/icons/cottage-cheese.png",
    "творожки":"static/icons/candies.png","сметана":"static/icons/whip-cream.png",
    "молоко":"static/icons/milk-bottle.png","кефир":"static/icons/kefir.png",
    "уксус":"static/icons/vinegar.png","сливки":"static/icons/milk-pack.png",
    "мочалка":"static/icons/sponge.png","тряпки":"static/icons/hand.png",
    "песок":"static/icons/litter-box.png","порошок":"static/icons/detergent.png",
    "бумага":"static/icons/tissue-box.png","губки":"static/icons/sponge-1.png",
    "мука":"static/icons/flour.png","подсол":"static/icons/olive-oil.png",
    "гречка":"static/icons/food.png","овсянка":"static/icons/oatmeal.png",
    "дезик":"static/icons/deodorant.png","чай":"static/icons/herbal-tea.png",
    "кетчуп":"static/icons/ketchup.png","соевка":"static/icons/shoyu.png",
    "сахар":"static/icons/sugar.png","макарики":"static/icons/pasta.png",
    "унитазка":"static/icons/public-toilet.png","фейри":"static/icons/cleaning.png",
    "картошка":"static/icons/potato.png","бананы":"static/icons/bananas.png",
    "яблоки":"static/icons/apple.png","огурцы":"static/icons/cucumber.png",
    "морковь":"static/icons/carrot.png","туалетка":"static/icons/toilet-paper.png",
    "лук":"static/icons/onion.png","мясо":"static/icons/meat.png",
    "чеснок":"static/icons/garlic.png","орехи":"static/icons/almond.png",
    "яйца":"static/icons/egg.png","хрен":"static/icons/horseradish.png",
    "пельмени":"static/icons/dumplings.png","тунец":"static/icons/tuna.png",
    "морожне":"static/icons/ice-cream.png","печенье":"static/icons/cookie.png",
    "палочки":"static/icons/fish-sticks.png","фри":"static/icons/fries.png",
};

// ─── Загрузка из localStorage ──────────────────────────────────────────────
let customPrices = {};
try { customPrices = JSON.parse(localStorage.getItem("lidl_prices") || "{}"); } catch(e) {}
let customProductsList = [];
try { customProductsList = JSON.parse(localStorage.getItem("lidl_custom") || "[]"); } catch(e) {}
let customIconData = {};
try { customIconData = JSON.parse(localStorage.getItem("lidl_icon_data") || "{}"); } catch(e) {}
let savedOrder = [];
try { savedOrder = JSON.parse(localStorage.getItem("lidl_order") || "[]"); } catch(e) {}

// ─── Строим массив products ────────────────────────────────────────────────
const products = defaultProducts.map(p => [p[0], p[1], customPrices[p[0]] ?? p[2], false]);
customProductsList.forEach(cp => {
    const price = customPrices[cp.name] ?? cp.price;
    const entry = [cp.name, cp.icon, price, true];
    if (cp.after === "__start__") products.unshift(entry);
    else {
        const idx = products.findIndex(p => p[0] === cp.after);
        if (idx >= 0) products.splice(idx + 1, 0, entry);
        else products.push(entry);
    }
});

if (savedOrder.length > 0) {
    products.sort((a, b) => {
        const ai = savedOrder.indexOf(a[0]);
        const bi = savedOrder.indexOf(b[0]);
        if (ai === -1 && bi === -1) return 0;
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
    });
}

// ─── Helpers ───────────────────────────────────────────────────────────────
function getIconHtml(name, fallback, size) {
    size = size || "24px";
    if (customIconData[name]) return '<img src="' + customIconData[name] + '" alt="' + name + '" style="width:' + size + ';height:' + size + ';object-fit:cover;border-radius:4px;">';
    const m = iconsMap[name];
    if (m) return '<img src="' + m + '" alt="' + name + '" style="width:' + size + ';height:' + size + ';">';
    return '<span style="font-size:' + size + ';">' + fallback + '</span>';
}
function vibrate() { if (navigator.vibrate) navigator.vibrate(30); }

// ─── Корзина ───────────────────────────────────────────────────────────────
const container = document.getElementById("buttons-container");
const totalEl   = document.getElementById("total");
const cartList  = document.getElementById("cart-list");

let cart = {};
try { cart = JSON.parse(localStorage.getItem("lidl_cart") || "{}"); } catch(e) {}
for (const p of products) { if (cart[p[0]]) cart[p[0]].price = p[2]; }

function saveCart() { try { localStorage.setItem("lidl_cart", JSON.stringify(cart)); } catch(e) {} }
window.addEventListener("beforeunload", saveCart);
window.addEventListener("pagehide", saveCart);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") saveCart(); });

function updateTotal() {
    let sum = 0;
    for (let k in cart) sum += cart[k].qty * cart[k].price;
    totalEl.textContent = "";
    if (sum > 0) { totalEl.textContent = sum.toFixed(2) + " €"; }
    else {
        const img = document.createElement("img");
        img.src = "static/icons/euro.png"; img.alt = "EURO";
        img.style.cssText = "width:24px;height:24px;";
        totalEl.appendChild(img);
    }
}

function updateList() {
    cartList.innerHTML = "";
    const keys = Object.keys(cart);
    if (!keys.length) { cartList.style.cssText = ""; return; }
    keys.forEach(key => {
        const item = cart[key];
        const prod = products.find(p => p[0] === key);
        const btn = document.createElement("button");
        btn.className = "product-btn";
        btn.dataset.name = key; btn.dataset.price = item.price;
        btn.style.cssText = "flex:0 0 60px;height:60px;";
        btn.innerHTML = '<div>' + getIconHtml(key, prod ? prod[1] : "🛒") + '</div><div style="font-size:10px;">' + key + '</div><div class="count">' + (item.qty >= 2 ? item.qty : "") + '</div>';
        const countEl = btn.querySelector(".count");
        countEl.style.display = item.qty >= 2 ? "flex" : "none";
        btn.addEventListener("click", () => {
            vibrate();
            cart[key].qty--;
            if (cart[key].qty <= 0) delete cart[key];
            saveCart();
            updateTopButton(key);
            updateTotal(); updateList();
        });
        cartList.appendChild(btn);
    });
    cartList.style.cssText = "display:flex;flex-wrap:wrap;justify-content:center;gap:8px;";
}

function updateTopButton(name) {
    const btn = document.querySelector('.product-btn[data-name="' + name + '"]');
    if (!btn) return;
    const c = btn.querySelector(".count");
    if (cart[name]) { c.textContent = cart[name].qty; c.style.display = "flex"; }
    else { c.textContent = ""; c.style.display = "none"; }
}

function showPriceEffect(btn, price) {
    const effect = document.createElement("div");
    effect.textContent = "+" + price.toFixed(2);
    const r = btn.getBoundingClientRect();
    effect.style.cssText = "position:fixed;left:" + (r.left+r.width/2) + "px;top:" + (r.top-20) + "px;transform:translateX(-50%);pointer-events:none;color:white;font-weight:bold;font-size:16px;transition:all 0.8s ease-out;opacity:1;z-index:9999;";
    document.body.appendChild(effect);
    setTimeout(() => { effect.style.top = (r.top-40)+"px"; effect.style.opacity="0"; }, 50);
    setTimeout(() => document.body.removeChild(effect), 850);
}

function buildProductButton(p) {
    const btn = document.createElement("button");
    btn.className = "product-btn";
    btn.dataset.name = p[0]; btn.dataset.price = p[2];
    btn.innerHTML = '<div>' + getIconHtml(p[0], p[1]) + '</div><div style="font-size:10px;">' + p[0] + '</div><div class="count"></div>';
    btn.addEventListener("click", () => {
        vibrate();
        const name = btn.dataset.name, price = parseFloat(btn.dataset.price);
        cart[name] = cart[name] || { qty: 0, price };
        cart[name].qty++;
        saveCart();
        const c = btn.querySelector(".count");
        c.textContent = cart[name].qty; c.style.display = "flex";
        showPriceEffect(btn, price);
        btn.classList.add("clicked"); setTimeout(() => btn.classList.remove("clicked"), 150);
        updateTotal(); updateList();
    });
    return btn;
}

function rebuildButtons() {
    container.innerHTML = "";
    products.forEach(p => container.appendChild(buildProductButton(p)));
    Object.keys(cart).forEach(name => {
        const btn = document.querySelector('.product-btn[data-name="' + name + '"]');
        if (btn) { const c = btn.querySelector(".count"); c.textContent = cart[name].qty; c.style.display = "flex"; }
    });
}

rebuildButtons();
updateTotal();
updateList();

// ═══════════════════════════════════════════════════════════════════════════
// МОДАЛЬНОЕ ОКНО РЕДАКТОРА
// ═══════════════════════════════════════════════════════════════════════════
const pricesModal = document.createElement("div");
pricesModal.id = "prices-modal";
pricesModal.className = "modal";
pricesModal.style.cssText = "display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;align-items:flex-end;justify-content:center;";
pricesModal.innerHTML =
    '<div id="pm-content" style="width:100%;max-width:480px;max-height:92vh;overflow:hidden;display:flex;flex-direction:column;border-radius:24px 24px 0 0;padding:16px 16px 24px;background:#fff;">'
  + '<div style="display:flex;gap:4px;margin-bottom:14px;flex-shrink:0;background:#f1f1f1;border-radius:12px;padding:4px;">'
  + '<button id="tab-prices" class="pm-tab">Цены</button>'
  + '<button id="tab-add"    class="pm-tab">+ Добавить</button>'
  + '<button id="tab-order"  class="pm-tab">↕ Порядок</button>'
  + '</div>'

  + '<div id="panel-prices" style="overflow-y:auto;flex:1;display:flex;flex-direction:column;">'
  +   '<div id="prices-list" style="flex:1;"></div>'
  +   '<div style="display:flex;gap:6px;margin-top:12px;flex-shrink:0;">'
  +     '<button id="save-prices" style="flex:2;padding:10px;border-radius:12px;background:#111;color:#fff;border:none;font-size:14px;font-weight:600;cursor:pointer;">Сохранить</button>'
  +     '<button id="reset-prices" style="flex:1;padding:10px;border-radius:12px;background:#fbbf24;color:#fff;border:none;font-size:13px;cursor:pointer;">Сбросить</button>'
  +   '</div>'
  + '</div>'

  + '<div id="panel-add" style="display:none;flex-direction:column;flex:1;overflow:hidden;">'
  +   '<div style="display:flex;gap:4px;margin-bottom:10px;flex-shrink:0;background:#f1f1f1;border-radius:10px;padding:3px;">'
  +   '<button id="subtab-catalog" class="pm-subtab">📚 Каталог</button>'
  +   '<button id="subtab-custom"  class="pm-subtab">✏️ Своё</button>'
  +   '</div>'
  +   '<div id="sub-catalog" style="overflow-y:auto;flex:1;flex-direction:column;">'
  +     '<div style="font-size:11px;color:#9ca3af;margin-bottom:8px;">Нажми на товар чтобы добавить его</div>'
  +     '<div id="catalog-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;"></div>'
  +   '</div>'
  +   '<div id="sub-custom" style="display:none;overflow-y:auto;flex:1;flex-direction:column;">'
  +     '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:12px;">'
  +       '<div id="icon-preview" style="width:68px;height:68px;border-radius:50%;background:#f3f4f6;border:2.5px dashed #d1d5db;display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;position:relative;overflow:hidden;">'
  +         '<span id="icon-preview-inner">🛒</span>'
  +         '<input type="file" id="icon-file-input" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;">'
  +       '</div>'
  +       '<div style="font-size:10px;color:#9ca3af;text-align:center;">Нажми на кружок для фото</div>'
  +     '</div>'
  +     '<div style="display:grid;grid-template-columns:1fr 60px;gap:8px;margin-bottom:8px;">'
  +       '<div><div style="font-size:10px;font-weight:600;color:#6b7280;margin-bottom:4px;">НАЗВАНИЕ</div>'
  +       '<input id="new-name" type="text" placeholder="авокадо" style="width:100%;padding:9px 11px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
  +       '<div><div style="font-size:10px;font-weight:600;color:#6b7280;margin-bottom:4px;">ЭМОДЗИ</div>'
  +       '<input id="new-icon-emoji" type="text" placeholder="🥑" maxlength="4" style="width:100%;padding:9px 4px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:20px;text-align:center;outline:none;box-sizing:border-box;"></div>'
  +     '</div>'
  +     '<div style="margin-bottom:8px;"><div style="font-size:10px;font-weight:600;color:#6b7280;margin-bottom:4px;">ЦЕНА (€)</div>'
  +     '<input id="new-price" type="number" step="0.01" min="0" placeholder="0.00" style="width:100%;padding:9px 11px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
  +     '<div style="margin-bottom:12px;"><div style="font-size:10px;font-weight:600;color:#6b7280;margin-bottom:4px;">МЕСТО В СПИСКЕ</div>'
  +     '<select id="new-position" style="width:100%;padding:9px 11px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:12px;background:white;outline:none;box-sizing:border-box;"></select></div>'
  +     '<div id="add-error" style="color:#ef4444;font-size:12px;margin-bottom:8px;display:none;padding:7px;background:#fef2f2;border-radius:8px;"></div>'
  +     '<button id="do-add" style="width:100%;padding:12px;border-radius:14px;background:#111;color:#fff;border:none;font-size:15px;font-weight:700;cursor:pointer;">Добавить товар</button>'
  +   '</div>'
  + '</div>'

  + '<div id="panel-order" style="display:none;flex-direction:column;flex:1;overflow:hidden;">'
  +   '<div style="font-size:11px;color:#9ca3af;margin-bottom:10px;flex-shrink:0;">Зажми и перетащи чтобы изменить порядок</div>'
  +   '<div id="order-list" style="overflow-y:auto;flex:1;"></div>'
  +   '<div style="display:flex;gap:6px;margin-top:12px;flex-shrink:0;">'
  +     '<button id="save-order" style="flex:2;padding:10px;border-radius:12px;background:#111;color:#fff;border:none;font-size:14px;font-weight:600;cursor:pointer;">Сохранить порядок</button>'
  +     '<button id="reset-order" style="flex:1;padding:10px;border-radius:12px;background:#f3f4f6;color:#374151;border:none;font-size:13px;cursor:pointer;">Сбросить</button>'
  +   '</div>'
  + '</div>'
  + '</div>';
document.body.appendChild(pricesModal);

const pmStyle = document.createElement("style");
pmStyle.textContent = ".pm-tab{flex:1;padding:7px 4px;border-radius:9px;border:none;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;background:transparent;color:#6b7280;}"
    + ".pm-tab.active{background:#fff;color:#111;box-shadow:0 1px 4px rgba(0,0,0,.12);}"
    + ".pm-subtab{flex:1;padding:6px 4px;border-radius:8px;border:none;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;background:transparent;color:#6b7280;}"
    + ".pm-subtab.active{background:#fff;color:#111;box-shadow:0 1px 4px rgba(0,0,0,.12);}"
    + ".catalog-card{background:#f9fafb;border-radius:14px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;border:1.5px solid #f0f0f0;transition:all .15s;-webkit-tap-highlight-color:transparent;}"
    + ".catalog-card:active{transform:scale(.94);background:#f0f0f0;}"
    + ".catalog-card.added{opacity:.35;pointer-events:none;}"
    + ".sortable-ghost{opacity:.35;background:#e5e7eb !important;}"
    + ".sortable-chosen{box-shadow:0 4px 16px rgba(0,0,0,.15);}";
document.head.appendChild(pmStyle);

pricesModal.addEventListener("click", e => { if (e.target === pricesModal) pricesModal.style.display = "none"; });

// ─── Вкладки ───────────────────────────────────────────────────────────────
const tabDefs = [
    { tab: "tab-prices", panel: "panel-prices" },
    { tab: "tab-add",    panel: "panel-add" },
    { tab: "tab-order",  panel: "panel-order" },
];
function showTab(active) {
    tabDefs.forEach(({ tab, panel }) => {
        const t = document.getElementById(tab), p = document.getElementById(panel);
        const on = tab === active;
        t.classList.toggle("active", on);
        p.style.display = on ? "flex" : "none";
        if (on && panel !== "panel-prices") p.style.flexDirection = "column";
    });
}
document.getElementById("tab-prices").addEventListener("click", () => showTab("tab-prices"));
document.getElementById("tab-add").addEventListener("click", () => { fillCatalog(); fillPositionSelect(); showTab("tab-add"); showSubTab("subtab-catalog"); });
document.getElementById("tab-order").addEventListener("click", () => { fillOrderList(); showTab("tab-order"); });

// ─── Под-вкладки Каталог / Своё ───────────────────────────────────────────
function showSubTab(active) {
    ["subtab-catalog","subtab-custom"].forEach(id => {
        document.getElementById(id).classList.toggle("active", id === active);
    });
    const sc = document.getElementById("sub-catalog");
    const sk = document.getElementById("sub-custom");
    if (active === "subtab-catalog") { sc.style.display = "flex"; sc.style.flexDirection = "column"; sk.style.display = "none"; }
    else { sc.style.display = "none"; sk.style.display = "flex"; sk.style.flexDirection = "column"; }
}
document.getElementById("subtab-catalog").addEventListener("click", () => showSubTab("subtab-catalog"));
document.getElementById("subtab-custom").addEventListener("click", () => { fillPositionSelect(); showSubTab("subtab-custom"); });

// ─── Каталог ───────────────────────────────────────────────────────────────
function fillCatalog() {
    const grid = document.getElementById("catalog-grid");
    grid.innerHTML = "";
    const existingNames = new Set(products.map(p => p[0]));
    catalogProducts.forEach(cp => {
        const alreadyAdded = existingNames.has(cp[0]);
        const card = document.createElement("div");
        card.className = "catalog-card" + (alreadyAdded ? " added" : "");
        card.innerHTML = '<div style="font-size:28px;line-height:1;">' + cp[1] + '</div>'
            + '<div style="font-size:12px;font-weight:600;text-align:center;">' + cp[0] + '</div>'
            + '<div style="font-size:11px;color:#6b7280;">' + cp[2].toFixed(2) + '€</div>'
            + (alreadyAdded ? '<div style="font-size:9px;color:#16a34a;font-weight:700;">✓ есть</div>' : '');
        if (!alreadyAdded) {
            card.addEventListener("click", () => {
                document.getElementById("new-name").value = cp[0];
                document.getElementById("new-icon-emoji").value = cp[1];
                document.getElementById("new-price").value = cp[2];
                document.getElementById("icon-preview-inner").textContent = cp[1];
                newIconDataUrl = null;
                fillPositionSelect();
                showSubTab("subtab-custom");
            });
        }
        grid.appendChild(card);
    });
}

// ─── Форма «Своё» ──────────────────────────────────────────────────────────
document.getElementById("new-icon-emoji").addEventListener("input", e => {
    const v = e.target.value.trim();
    if (v && !newIconDataUrl) document.getElementById("icon-preview-inner").textContent = v || "🛒";
});
let newIconDataUrl = null;
document.getElementById("icon-file-input").addEventListener("change", e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        newIconDataUrl = ev.target.result;
        document.getElementById("icon-preview-inner").innerHTML = '<img src="' + newIconDataUrl + '" style="width:68px;height:68px;object-fit:cover;border-radius:50%;">';
    };
    reader.readAsDataURL(file);
});

function fillPositionSelect() {
    const sel = document.getElementById("new-position");
    sel.innerHTML = '<option value="__start__">В самое начало</option>';
    products.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p[0]; opt.textContent = "После «" + p[0] + "»";
        sel.appendChild(opt);
    });
    sel.value = products[products.length - 1]?.[0] || "__start__";
}

document.getElementById("do-add").addEventListener("click", () => {
    const errEl = document.getElementById("add-error");
    const name  = document.getElementById("new-name").value.trim().toLowerCase();
    const emoji = document.getElementById("new-icon-emoji").value.trim() || "🛒";
    const price = parseFloat(document.getElementById("new-price").value);
    const after = document.getElementById("new-position").value;
    errEl.style.display = "none";
    if (!name) { errEl.textContent = "Введи название товара"; errEl.style.display="block"; return; }
    if (products.find(p => p[0] === name)) { errEl.textContent = "Товар «" + name + "» уже есть"; errEl.style.display="block"; return; }
    if (isNaN(price) || price < 0) { errEl.textContent = "Введи корректную цену"; errEl.style.display="block"; return; }
    if (newIconDataUrl) {
        customIconData[name] = newIconDataUrl;
        try { localStorage.setItem("lidl_icon_data", JSON.stringify(customIconData)); } catch(e) {}
    }
    const iconValue = newIconDataUrl ? "🛒" : emoji;
    const entry = [name, iconValue, price, true];
    if (after === "__start__") products.unshift(entry);
    else {
        const idx = products.findIndex(p => p[0] === after);
        if (idx >= 0) products.splice(idx+1, 0, entry); else products.push(entry);
    }
    const newBtn = buildProductButton(entry);
    const prodIdx = products.findIndex(p => p[0] === name);
    if (prodIdx === 0) container.prepend(newBtn);
    else {
        const prevName = products[prodIdx-1][0];
        const prevBtn = container.querySelector('.product-btn[data-name="' + prevName + '"]');
        if (prevBtn) prevBtn.after(newBtn); else container.appendChild(newBtn);
    }
    customProductsList.push({ name, icon: iconValue, price, after });
    try { localStorage.setItem("lidl_custom", JSON.stringify(customProductsList)); } catch(e) {}
    document.getElementById("new-name").value = "";
    document.getElementById("new-icon-emoji").value = "";
    document.getElementById("new-price").value = "";
    document.getElementById("icon-preview-inner").textContent = "🛒";
    document.getElementById("icon-file-input").value = "";
    newIconDataUrl = null;
    pricesModal.style.display = "none";
});

// ─── Панель цен ────────────────────────────────────────────────────────────
function openPricesModal(tab) {
    const list = document.getElementById("prices-list");
    list.innerHTML = "";
    products.forEach(p => {
        const row = document.createElement("div");
        row.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:8px;";
        row.innerHTML = '<div style="width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">' + getIconHtml(p[0], p[1], "24px") + '</div>'
            + '<span style="flex:1;font-size:13px;">' + p[0] + (p[3] ? ' <span style="font-size:10px;color:#3b82f6;">❆</span>' : '') + '</span>'
            + '<input type="number" step="0.01" min="0" value="' + p[2] + '" data-name="' + p[0] + '" style="width:58px;padding:5px 6px;border:1.5px solid #e5e7eb;border-radius:8px;text-align:right;font-size:13px;">'
            + '<span style="font-size:12px;color:#9ca3af;">€</span>'
            + (p[3] ? '<button data-del="' + p[0] + '" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ef4444;padding:0 2px;">🗑</button>' : '<span style="width:22px;"></span>');
        list.appendChild(row);
    });
    list.querySelectorAll("[data-del]").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.del;
            customProductsList = customProductsList.filter(cp => cp.name !== name);
            try { localStorage.setItem("lidl_custom", JSON.stringify(customProductsList)); } catch(e) {}
            delete customIconData[name];
            try { localStorage.setItem("lidl_icon_data", JSON.stringify(customIconData)); } catch(e) {}
            const idx = products.findIndex(p => p[0] === name);
            if (idx >= 0) products.splice(idx, 1);
            delete cart[name]; saveCart();
            const domBtn = document.querySelector('.product-btn[data-name="' + name + '"]');
            if (domBtn) domBtn.remove();
            updateTotal(); updateList(); openPricesModal("tab-prices");
        });
    });
    if (tab === "tab-add") {
        fillCatalog(); fillPositionSelect();
        showTab("tab-add"); showSubTab("subtab-catalog");
    } else if (tab === "tab-order") {
        fillOrderList(); showTab("tab-order");
    } else {
        showTab("tab-prices");
    }
    pricesModal.style.display = "flex";
}

document.getElementById("save-prices").addEventListener("click", () => {
    const np = {};
    document.querySelectorAll("#prices-list input[data-name]").forEach(inp => {
        const v = parseFloat(inp.value);
        if (!isNaN(v) && v >= 0) np[inp.dataset.name] = v;
    });
    try { localStorage.setItem("lidl_prices", JSON.stringify(np)); } catch(e) {}
    document.querySelectorAll("#prices-list input[data-name]").forEach(inp => {
        const name = inp.dataset.name, val = parseFloat(inp.value);
        if (!isNaN(val)) {
            const prod = products.find(p => p[0] === name);
            if (prod) prod[2] = val;
            const btn = document.querySelector('.product-btn[data-name="' + name + '"]');
            if (btn) btn.dataset.price = val;
            if (cart[name]) cart[name].price = val;
        }
    });
    saveCart(); updateTotal();
    pricesModal.style.display = "none";
});

document.getElementById("reset-prices").addEventListener("click", () => {
    try { localStorage.removeItem("lidl_prices"); } catch(e) {}
    defaultProducts.forEach(dp => {
        const prod = products.find(p => p[0] === dp[0]);
        if (prod) prod[2] = dp[2];
        const btn = document.querySelector('.product-btn[data-name="' + dp[0] + '"]');
        if (btn) btn.dataset.price = dp[2];
        if (cart[dp[0]]) cart[dp[0]].price = dp[2];
    });
    saveCart(); updateTotal();
    pricesModal.style.display = "none";
});

// ─── Порядок / Sortable ────────────────────────────────────────────────────
function loadSortable(cb) {
    if (window.Sortable) { cb(); return; }
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js";
    s.onload = cb;
    document.head.appendChild(s);
}

let sortableInstance = null;
function fillOrderList() {
    const list = document.getElementById("order-list");
    list.innerHTML = "";
    products.forEach(p => {
        const row = document.createElement("div");
        row.dataset.name = p[0];
        row.style.cssText = "display:flex;align-items:center;gap:10px;padding:10px 8px;margin-bottom:6px;background:#f9fafb;border-radius:12px;cursor:grab;user-select:none;border:1px solid #f0f0f0;touch-action:none;";
        row.innerHTML = '<div style="color:#d1d5db;font-size:18px;flex-shrink:0;">⠿</div>'
            + '<div style="width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">' + getIconHtml(p[0], p[1], "24px") + '</div>'
            + '<span style="flex:1;font-size:14px;font-weight:500;">' + p[0] + '</span>'
            + (p[3] ? '<span style="font-size:10px;color:#3b82f6;font-weight:600;">custom</span>' : '');
        list.appendChild(row);
    });
    loadSortable(() => {
        if (sortableInstance) sortableInstance.destroy();
        sortableInstance = new Sortable(list, { animation: 180 });
    });
}

document.getElementById("save-order").addEventListener("click", () => {
    const list = document.getElementById("order-list");
    const newOrder = [...list.children].map(el => el.dataset.name);
    const sorted = newOrder.map(name => products.find(p => p[0] === name)).filter(Boolean);
    products.forEach(p => { if (!sorted.find(s => s[0] === p[0])) sorted.push(p); });
    products.length = 0; sorted.forEach(p => products.push(p));
    try { localStorage.setItem("lidl_order", JSON.stringify(newOrder)); } catch(e) {}
    rebuildButtons();
    Object.keys(cart).forEach(name => {
        const btn = document.querySelector('.product-btn[data-name="' + name + '"]');
        if (btn) { const c = btn.querySelector(".count"); c.textContent = cart[name].qty; c.style.display = "flex"; }
    });
    pricesModal.style.display = "none";
});

document.getElementById("reset-order").addEventListener("click", () => {
    try { localStorage.removeItem("lidl_order"); } catch(e) {}
    const list = document.getElementById("order-list");
    const defaultNames = defaultProducts.map(p => p[0]);
    const rows = [...list.children].sort((a, b) => {
        const ai = defaultNames.indexOf(a.dataset.name);
        const bi = defaultNames.indexOf(b.dataset.name);
        if (ai === -1) return 1; if (bi === -1) return -1;
        return ai - bi;
    });
    rows.forEach(r => list.appendChild(r));
});

totalEl.addEventListener("click", () => { vibrate(); openPricesModal("tab-prices"); });

// ═══════════════════════════════════════════════════════════════════════════
// НИЖНЯЯ НАВИГАЦИЯ
// ═══════════════════════════════════════════════════════════════════════════
const bottomNav = document.createElement("div");
bottomNav.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #efefef;padding:10px 16px 20px;display:flex;gap:8px;z-index:900;box-shadow:0 -4px 20px rgba(0,0,0,.07);";

const navItems = [
    { icon:"🗑", label:"Удалить",   tab:"tab-prices" },
    { icon:"+",  label:"Добавить",   tab:"tab-add" },
    { icon:"↕",  label:"Переместить", tab:"tab-order" },
];
navItems.forEach(({ icon, label, tab }) => {
    const b = document.createElement("button");
    b.style.cssText = "flex:1;padding:10px 4px;border-radius:14px;border:1.5px solid #e5e7eb;background:#f9fafb;font-size:12px;font-weight:600;color:#374151;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;-webkit-tap-highlight-color:transparent;transition:background .15s,border-color .15s;";
    b.innerHTML = '<span style="font-size:20px;line-height:1;">' + icon + '</span>' + label;
    b.addEventListener("touchstart", () => { b.style.background="#f0f0f0"; b.style.borderColor="#ccc"; }, {passive:true});
    b.addEventListener("touchend",   () => { b.style.background="#f9fafb"; b.style.borderColor="#e5e7eb"; }, {passive:true});
    b.addEventListener("click", () => { vibrate(); openPricesModal(tab); });
    bottomNav.appendChild(b);
});
document.body.appendChild(bottomNav);

document.querySelector(".container").style.paddingBottom = "88px";

// ═══════════════════════════════════════════════════════════════════════════
// СБРОС / ЗАМЕТКИ
// ═══════════════════════════════════════════════════════════════════════════
const resetBtn = document.getElementById("reset-btn");
resetBtn.textContent = "";
const binImg = document.createElement("img");
binImg.src = "static/icons/bin.png"; binImg.alt = "BIN";
binImg.style.cssText = "width:28px;height:28px;";
resetBtn.appendChild(binImg);
resetBtn.addEventListener("click", () => {
    vibrate(); cart = {}; saveCart();
    document.querySelectorAll(".product-btn .count").forEach(c => { c.textContent=""; c.style.display="none"; });
    updateTotal(); updateList();
});

const notesBtn = document.getElementById("notes-btn");
notesBtn.textContent = "";
const noteImg = document.createElement("img");
noteImg.src = "static/icons/note.png"; noteImg.alt = "NOTE";
noteImg.style.cssText = "width:24px;height:24px;";
notesBtn.appendChild(noteImg);
const notesModal = document.getElementById("notes-modal");
const notesText  = document.getElementById("notes-text");
let savedNotes = "";
try { savedNotes = localStorage.getItem("lidl_notes") || ""; } catch(e) {}
notesText.value = savedNotes;
updateNotesIndicator();
function updateNotesIndicator() { notesBtn.classList.toggle("active-note", savedNotes.trim().length > 0); }
notesModal.addEventListener("click", e => { if (e.target === notesModal) notesModal.style.display = "none"; });
notesBtn.addEventListener("click", () => { vibrate(); notesModal.style.display="flex"; });
document.getElementById("close-notes").addEventListener("click",  () => { notesModal.style.display="none"; });
document.getElementById("save-notes").addEventListener("click",   () => {
    savedNotes = notesText.value;
    try { localStorage.setItem("lidl_notes", savedNotes); } catch(e) {}
    notesModal.style.display = "none"; updateNotesIndicator();
});
document.getElementById("clear-notes").addEventListener("click",  () => { notesText.value=""; notesText.focus(); });
