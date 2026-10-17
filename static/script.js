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
    ["уксус","🍶",0.9],    ["сливки","🥛",0.35],  ["сахар","🍬",0.8],
    ["мука","🌾",1.0],     ["подсол","🌻",2.0],   ["макарики","🍝",1.0],
    ["гречка","🍲",1.5],   ["рис","🍚",3.0],      ["овсянка","🥣",0.2],
    ["специи","🧄",2.0],   ["кетчуп","🍅",4.0],   ["хрен","🫚",0.85],
    ["соевка","🥢",1.0],   ["фейри","🧴",1.5],    ["губки","🧽",1.0],
    ["унитазка","🚽",2.0], ["тряпки","🧹",1.0],   ["песок","🐱",5.0],
    ["мыло","🧼",2.5],     ["дезик","🧴",2.0],    ["душгель","🛀",2.5],
    ["порошок","🧴",4.0],  ["мочалка","🧽",0.5],  ["туалетка","🧻",1.7],
    ["бумага","🧻",2.2]
];

const catalogProducts = [
    ["помидоры","🍅",1.5],  ["перец","🫑",2.0],    ["апельсины","🍊",1.8],
    ["клубника","🍓",2.5],  ["виноград","🍇",2.5],  ["груши","🍐",1.5],
    ["шоколад","🍫",1.8],   ["кофе","☕",3.5],      ["йогурт","🍶",0.85],
    ["сок","🧃",1.5],       ["вода","💧",0.5],      ["майонез","🫙",2.0],
    ["грибы","🍄",2.0],     ["авокадо","🥑",1.5],  ["зелень","🌿",0.5],
    ["паста","🦷",2.0],     ["шампунь","🚿",3.5],  ["фольга","📦",1.5],
    ["пакеты","🛍️",0.35],  ["консервы","🥫",1.5], ["горчица","🌿",1.2],
    ["чипсы","🥔",1.5],     ["конфеты","🍬",2.0],  ["рыба","🐠",3.5],
    ["лимон","🍋",0.5],     ["брокколи","🥦",1.8], ["арбуз","🍉",2.5],
    ["персики","🍑",2.5],   ["черника","🫐",3.0],  ["малина","🍓",3.0],
    ["мёд","🍯",4.0],       ["джем","🫙",2.5],     ["семечки","🌻",1.0],
    ["попкорн","🍿",1.5],   ["вафли","🧇",1.5],    ["батончики","🍫",1.0],
    ["томатка","🥫",0.8],   ["горошек","🫛",0.8],  ["кукуруза","🌽",0.8],
    ["оливки","🫒",2.0],    ["баклажан","🍆",1.5], ["редиска","🌱",0.6],
    ["сухофрукты","🍇",3.0],["варенье","🍓",2.0],  ["пиво","🍺",1.5],
    ["вино","🍷",4.0],      ["бульон","🍜",1.0],   ["зефир","🍡",1.5],
    ["крем","🧴",3.0],      ["кабачок","🥒",1.2]
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

let customPrices = {};
try { customPrices = JSON.parse(localStorage.getItem("lidl_prices")||"{}"); } catch(e) {}
let customProductsList = [];
try { customProductsList = JSON.parse(localStorage.getItem("lidl_custom")||"[]"); } catch(e) {}
let customIconData = {};
try { customIconData = JSON.parse(localStorage.getItem("lidl_icon_data")||"{}"); } catch(e) {}
let savedOrder = [];
try { savedOrder = JSON.parse(localStorage.getItem("lidl_order")||"[]"); } catch(e) {}

const products = defaultProducts.map(p=>[p[0],p[1],customPrices[p[0]]??p[2],false]);
customProductsList.forEach(cp=>{
    const price=customPrices[cp.name]??cp.price, entry=[cp.name,cp.icon,price,true];
    if(cp.after==="__start__") products.unshift(entry);
    else { const i=products.findIndex(p=>p[0]===cp.after); if(i>=0) products.splice(i+1,0,entry); else products.push(entry); }
});
if(savedOrder.length>0){
    products.sort((a,b)=>{ const ai=savedOrder.indexOf(a[0]),bi=savedOrder.indexOf(b[0]); if(ai===-1&&bi===-1)return 0; if(ai===-1)return 1; if(bi===-1)return -1; return ai-bi; });
}

function getIconHtml(name,fallback,size){
    size=size||"24px";
    if(customIconData[name]) return '<img src="'+customIconData[name]+'" alt="'+name+'" style="width:'+size+';height:'+size+';object-fit:cover;border-radius:4px;">';
    const m=iconsMap[name];
    if(m) return '<img src="'+m+'" alt="'+name+'" style="width:'+size+';height:'+size+';">';
    return '<span style="font-size:'+size+';">'+fallback+'</span>';
}
function vibrate(){ if(navigator.vibrate) navigator.vibrate(30); }

const container=document.getElementById("buttons-container");
const totalEl=document.getElementById("total");
const cartList=document.getElementById("cart-list");
let cart={};
try{ cart=JSON.parse(localStorage.getItem("lidl_cart")||"{}"); }catch(e){}
for(const p of products){ if(cart[p[0]]) cart[p[0]].price=p[2]; }

function saveCart(){ try{localStorage.setItem("lidl_cart",JSON.stringify(cart));}catch(e){} }
window.addEventListener("beforeunload",saveCart);
window.addEventListener("pagehide",saveCart);
document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="hidden") saveCart(); });

function updateTotal(){
    let sum=0; for(let k in cart) sum+=cart[k].qty*cart[k].price;
    totalEl.textContent="";
    if(sum>0){ totalEl.textContent=sum.toFixed(2)+" €"; }
    else{ const img=document.createElement("img"); img.src="static/icons/euro.png"; img.alt="EURO"; img.style.cssText="width:24px;height:24px;"; totalEl.appendChild(img); }
}
function updateList(){
    cartList.innerHTML=""; const keys=Object.keys(cart);
    if(!keys.length){ cartList.style.cssText=""; return; }
    keys.forEach(key=>{
        const item=cart[key], prod=products.find(p=>p[0]===key);
        const btn=document.createElement("button"); btn.className="product-btn";
        btn.dataset.name=key; btn.dataset.price=item.price; btn.style.cssText="flex:0 0 60px;height:60px;";
        btn.innerHTML='<div>'+getIconHtml(key,prod?prod[1]:"🛒")+'</div><div style="font-size:10px;">'+key+'</div><div class="count">'+(item.qty>=2?item.qty:"")+'</div>';
        const c=btn.querySelector(".count"); c.style.display=item.qty>=2?"flex":"none";
        btn.addEventListener("click",()=>{ vibrate(); cart[key].qty--; if(cart[key].qty<=0) delete cart[key]; saveCart(); updateTopButton(key); updateTotal(); updateList(); });
        cartList.appendChild(btn);
    });
    cartList.style.cssText="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;";
}
function updateTopButton(name){
    const btn=document.querySelector('.product-btn[data-name="'+name+'"]'); if(!btn) return;
    const c=btn.querySelector(".count");
    if(cart[name]){c.textContent=cart[name].qty;c.style.display="flex";}else{c.textContent="";c.style.display="none";}
}
function showPriceEffect(btn,price){
    const eff=document.createElement("div"); eff.textContent="+"+price.toFixed(2);
    const r=btn.getBoundingClientRect();
    eff.style.cssText="position:fixed;left:"+(r.left+r.width/2)+"px;top:"+(r.top-20)+"px;transform:translateX(-50%);pointer-events:none;color:#fff;font-weight:bold;font-size:16px;transition:all 0.8s ease-out;opacity:1;z-index:9999;text-shadow:0 0 10px rgba(255,255,255,.6);";
    document.body.appendChild(eff);
    setTimeout(()=>{ eff.style.top=(r.top-46)+"px"; eff.style.opacity="0"; },50);
    setTimeout(()=>document.body.removeChild(eff),850);
}
function buildProductButton(p){
    const btn=document.createElement("button"); btn.className="product-btn";
    btn.dataset.name=p[0]; btn.dataset.price=p[2];
    btn.innerHTML='<div>'+getIconHtml(p[0],p[1])+'</div><div style="font-size:10px;">'+p[0]+'</div><div class="count"></div>';
    btn.addEventListener("click",()=>{
        vibrate(); const name=btn.dataset.name, price=parseFloat(btn.dataset.price);
        cart[name]=cart[name]||{qty:0,price}; cart[name].qty++; saveCart();
        const c=btn.querySelector(".count"); c.textContent=cart[name].qty; c.style.display="flex";
        showPriceEffect(btn,price); btn.classList.add("clicked"); setTimeout(()=>btn.classList.remove("clicked"),150);
        updateTotal(); updateList();
    });
    return btn;
}
function rebuildButtons(){
    container.innerHTML=""; products.forEach(p=>container.appendChild(buildProductButton(p)));
    Object.keys(cart).forEach(name=>{ const btn=document.querySelector('.product-btn[data-name="'+name+'"]'); if(btn){const c=btn.querySelector(".count");c.textContent=cart[name].qty;c.style.display="flex";} });
}
rebuildButtons(); updateTotal(); updateList();

// ═══════════════════════════════════════════════════════════════════════════
// СТИЛИ
// ═══════════════════════════════════════════════════════════════════════════
const S=document.createElement("style");
S.textContent=`
.pm-tab{flex:1;padding:8px 4px;border-radius:10px;border:none;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;background:transparent;color:#555;letter-spacing:.3px;}
.pm-tab.active{background:#1c1c1c;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.8);}
.pm-subtab{flex:1;padding:7px 4px;border-radius:9px;border:none;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;background:transparent;color:#555;}
.pm-subtab.active{background:#1c1c1c;color:#fff;box-shadow:0 1px 6px rgba(0,0,0,.6);}
.cat-card{background:#131313;border-radius:14px;padding:10px 5px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;border:1px solid #222;transition:all .15s;-webkit-tap-highlight-color:transparent;position:relative;}
.cat-card:active{transform:scale(.92);background:#1c1c1c;border-color:#333;}
.cat-card.added{opacity:.28;pointer-events:none;}
.cat-card-icon{font-size:28px;line-height:1;}
.cat-card-name{font-size:11px;font-weight:700;color:#e5e5e5;text-align:center;line-height:1.2;}
.cat-card-price{font-size:10px;color:#666;}
.cat-card-check{position:absolute;top:6px;right:6px;font-size:9px;color:#4ade80;font-weight:700;}
.ord-row{display:flex;align-items:center;gap:10px;padding:10px 8px;margin-bottom:6px;background:#131313;border-radius:12px;cursor:grab;user-select:none;border:1px solid #1e1e1e;touch-action:none;}
.sortable-ghost{opacity:.25;background:#0a1a0a!important;}
.sortable-chosen{box-shadow:0 6px 24px rgba(0,0,0,.9);}
#pm-content input,#pm-content select{background:#131313!important;color:#fff!important;border:1px solid #2a2a2a!important;border-radius:10px;}
#pm-content input::placeholder{color:#444;}
`;
document.head.appendChild(S);

// ═══════════════════════════════════════════════════════════════════════════
// МОДАЛЬНОЕ ОКНО
// ═══════════════════════════════════════════════════════════════════════════
const modal=document.createElement("div");
modal.id="prices-modal"; modal.className="modal";
modal.style.cssText="display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:1000;align-items:flex-end;justify-content:center;";

modal.innerHTML=
 '<div id="pm-box" style="width:100%;max-width:480px;max-height:93vh;overflow:hidden;display:flex;flex-direction:column;border-radius:22px 22px 0 0;padding:0 0 24px;background:#0a0a0a;border-top:1px solid #1e1e1e;">'

// Шапка
+'<div style="display:flex;align-items:center;padding:14px 16px 0;flex-shrink:0;">'
+'<div style="width:36px;height:4px;background:#232323;border-radius:2px;flex:1;"></div>'
+'<button id="pm-close" style="width:30px;height:30px;border-radius:50%;background:#1a1a1a;border:1px solid #2a2a2a;color:#888;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;margin-left:12px;line-height:1;flex-shrink:0;">✕</button>'
+'</div>'

// Вкладки
+'<div style="display:flex;gap:4px;margin:12px 16px 0;flex-shrink:0;background:#0f0f0f;border-radius:12px;padding:4px;border:1px solid #1a1a1a;">'
+'<button id="tab-prices" class="pm-tab">Цены</button>'
+'<button id="tab-add"    class="pm-tab">+ Добавить</button>'
+'<button id="tab-order"  class="pm-tab">↕ Порядок</button>'
+'</div>'

// ── ЦЕНЫ ──
+'<div id="panel-prices" style="overflow-y:auto;flex:1;display:flex;flex-direction:column;padding:12px 16px 0;">'
+'<div id="prices-list" style="flex:1;"></div>'
+'<div style="display:flex;gap:8px;margin-top:14px;flex-shrink:0;">'
+'<button id="save-prices" style="flex:2;padding:13px;border-radius:14px;background:#fff;color:#000;border:none;font-size:14px;font-weight:800;cursor:pointer;letter-spacing:.3px;">Сохранить</button>'
+'<button id="reset-prices" style="flex:1;padding:13px;border-radius:14px;background:#1a1a1a;color:#888;border:1px solid #2a2a2a;font-size:13px;cursor:pointer;">Сбросить</button>'
+'</div>'
+'</div>'

// ── ДОБАВИТЬ ──
+'<div id="panel-add" style="display:none;flex-direction:column;flex:1;overflow:hidden;padding:12px 16px 0;">'
+'<div style="display:flex;gap:4px;margin-bottom:12px;flex-shrink:0;background:#0f0f0f;border-radius:10px;padding:3px;border:1px solid #1a1a1a;">'
+'<button id="subtab-catalog" class="pm-subtab">📚 Каталог</button>'
+'<button id="subtab-custom"  class="pm-subtab">✏️ Своё</button>'
+'</div>'

// Каталог
+'<div id="sub-catalog" style="overflow-y:auto;flex:1;flex-direction:column;">'
+'<div style="font-size:11px;color:#444;margin-bottom:10px;">Нажми — и данные заполнятся в форме «Своё»</div>'
+'<div id="catalog-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;"></div>'
+'</div>'

// Своё
+'<div id="sub-custom" style="display:none;overflow-y:auto;flex:1;flex-direction:column;">'
+'<div style="display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:14px;">'
+'<div id="icon-preview" style="width:64px;height:64px;border-radius:50%;background:#131313;border:2px dashed #2a2a2a;display:flex;align-items:center;justify-content:center;font-size:30px;cursor:pointer;position:relative;overflow:hidden;">'
+'<span id="icon-preview-inner">🛒</span>'
+'<input type="file" id="icon-file-input" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;">'
+'</div>'
+'<div style="font-size:10px;color:#444;">Нажми для фото</div>'
+'</div>'
+'<div style="display:grid;grid-template-columns:1fr 58px;gap:8px;margin-bottom:8px;">'
+'<div><div style="font-size:10px;font-weight:700;color:#444;margin-bottom:4px;letter-spacing:.6px;">НАЗВАНИЕ</div>'
+'<input id="new-name" type="text" placeholder="авокадо" style="width:100%;padding:10px 12px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
+'<div><div style="font-size:10px;font-weight:700;color:#444;margin-bottom:4px;letter-spacing:.6px;">ЭМОДЗИ</div>'
+'<input id="new-icon-emoji" type="text" placeholder="🥑" maxlength="4" style="width:100%;padding:10px 4px;font-size:20px;text-align:center;outline:none;box-sizing:border-box;"></div>'
+'</div>'
+'<div style="margin-bottom:8px;"><div style="font-size:10px;font-weight:700;color:#444;margin-bottom:4px;letter-spacing:.6px;">ЦЕНА (€)</div>'
+'<input id="new-price" type="number" step="0.01" min="0" placeholder="0.00" style="width:100%;padding:10px 12px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
+'<div style="margin-bottom:14px;"><div style="font-size:10px;font-weight:700;color:#444;margin-bottom:4px;letter-spacing:.6px;">МЕСТО</div>'
+'<select id="new-position" style="width:100%;padding:10px 12px;font-size:12px;outline:none;box-sizing:border-box;"></select></div>'
+'<div id="add-error" style="color:#ff5555;font-size:12px;margin-bottom:8px;display:none;padding:8px 12px;background:#1a0808;border-radius:10px;border:1px solid #3a1010;"></div>'
+'<button id="do-add" style="width:100%;padding:13px;border-radius:14px;background:#fff;color:#000;border:none;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:.3px;">Добавить товар</button>'
+'</div>'
+'</div>'

// ── ПОРЯДОК ──
+'<div id="panel-order" style="display:none;flex-direction:column;flex:1;overflow:hidden;padding:12px 16px 0;">'
+'<div style="font-size:11px;color:#444;margin-bottom:10px;flex-shrink:0;">Зажми и перетащи</div>'
+'<div id="order-list" style="overflow-y:auto;flex:1;"></div>'
+'<div style="display:flex;gap:8px;margin-top:14px;flex-shrink:0;">'
+'<button id="save-order" style="flex:2;padding:13px;border-radius:14px;background:#fff;color:#000;border:none;font-size:14px;font-weight:800;cursor:pointer;">Сохранить</button>'
+'<button id="reset-order" style="flex:1;padding:13px;border-radius:14px;background:#1a1a1a;color:#888;border:1px solid #2a2a2a;font-size:13px;cursor:pointer;">Сбросить</button>'
+'</div>'
+'</div>'

+'</div>';
document.body.appendChild(modal);

modal.addEventListener("click",e=>{ if(e.target===modal) modal.style.display="none"; });
document.getElementById("pm-close").addEventListener("click",()=>{ modal.style.display="none"; });

// ─── Вкладки ───────────────────────────────────────────────────────────────
const tabDefs=[{tab:"tab-prices",panel:"panel-prices"},{tab:"tab-add",panel:"panel-add"},{tab:"tab-order",panel:"panel-order"}];
function showTab(active){
    tabDefs.forEach(({tab,panel})=>{
        const t=document.getElementById(tab),p=document.getElementById(panel),on=tab===active;
        t.classList.toggle("active",on); p.style.display=on?"flex":"none";
        if(on&&panel!=="panel-prices") p.style.flexDirection="column";
    });
}
document.getElementById("tab-prices").addEventListener("click",()=>showTab("tab-prices"));
document.getElementById("tab-add").addEventListener("click",()=>{ fillCatalog(); fillPosSelect(); showTab("tab-add"); showSub("subtab-catalog"); });
document.getElementById("tab-order").addEventListener("click",()=>{ fillOrderList(); showTab("tab-order"); });

function showSub(active){
    ["subtab-catalog","subtab-custom"].forEach(id=>document.getElementById(id).classList.toggle("active",id===active));
    const sc=document.getElementById("sub-catalog"),sk=document.getElementById("sub-custom");
    if(active==="subtab-catalog"){sc.style.display="flex";sc.style.flexDirection="column";sk.style.display="none";}
    else{sc.style.display="none";sk.style.display="flex";sk.style.flexDirection="column";}
}
document.getElementById("subtab-catalog").addEventListener("click",()=>showSub("subtab-catalog"));
document.getElementById("subtab-custom").addEventListener("click",()=>{ fillPosSelect(); showSub("subtab-custom"); });

// ─── Каталог ───────────────────────────────────────────────────────────────
function fillCatalog(){
    const grid=document.getElementById("catalog-grid"); grid.innerHTML="";
    const ex=new Set(products.map(p=>p[0]));
    catalogProducts.forEach(cp=>{
        const has=ex.has(cp[0]);
        const card=document.createElement("div"); card.className="cat-card"+(has?" added":"");
        card.innerHTML='<div class="cat-card-icon">'+cp[1]+'</div>'
            +'<div class="cat-card-name">'+cp[0]+'</div>'
            +'<div class="cat-card-price">'+cp[2].toFixed(2)+'€</div>'
            +(has?'<div class="cat-card-check">✓</div>':'');
        if(!has){ card.addEventListener("click",()=>{
            document.getElementById("new-name").value=cp[0];
            document.getElementById("new-icon-emoji").value=cp[1];
            document.getElementById("new-price").value=cp[2];
            document.getElementById("icon-preview-inner").textContent=cp[1];
            newIconDataUrl=null; fillPosSelect(); showSub("subtab-custom");
        }); }
        grid.appendChild(card);
    });
}

// ─── Форма ─────────────────────────────────────────────────────────────────
document.getElementById("new-icon-emoji").addEventListener("input",e=>{
    const v=e.target.value.trim(); if(v&&!newIconDataUrl) document.getElementById("icon-preview-inner").textContent=v||"🛒";
});
let newIconDataUrl=null;
document.getElementById("icon-file-input").addEventListener("change",e=>{
    const file=e.target.files[0]; if(!file) return;
    const r=new FileReader(); r.onload=ev=>{
        newIconDataUrl=ev.target.result;
        document.getElementById("icon-preview-inner").innerHTML='<img src="'+newIconDataUrl+'" style="width:64px;height:64px;object-fit:cover;border-radius:50%;">';
    }; r.readAsDataURL(file);
});
function fillPosSelect(){
    const sel=document.getElementById("new-position");
    sel.innerHTML='<option value="__start__">В самое начало</option>';
    products.forEach(p=>{ const o=document.createElement("option"); o.value=p[0]; o.textContent="После «"+p[0]+"»"; sel.appendChild(o); });
    sel.value=products[products.length-1]?.[0]||"__start__";
}
document.getElementById("do-add").addEventListener("click",()=>{
    const errEl=document.getElementById("add-error");
    const name=document.getElementById("new-name").value.trim().toLowerCase();
    const emoji=document.getElementById("new-icon-emoji").value.trim()||"🛒";
    const price=parseFloat(document.getElementById("new-price").value);
    const after=document.getElementById("new-position").value;
    errEl.style.display="none";
    if(!name){errEl.textContent="Введи название";errEl.style.display="block";return;}
    if(products.find(p=>p[0]===name)){errEl.textContent="«"+name+"» уже есть";errEl.style.display="block";return;}
    if(isNaN(price)||price<0){errEl.textContent="Введи цену";errEl.style.display="block";return;}
    if(newIconDataUrl){customIconData[name]=newIconDataUrl;try{localStorage.setItem("lidl_icon_data",JSON.stringify(customIconData));}catch(e){}}
    const iv=newIconDataUrl?"🛒":emoji;
    const entry=[name,iv,price,true];
    if(after==="__start__") products.unshift(entry);
    else{const i=products.findIndex(p=>p[0]===after);if(i>=0)products.splice(i+1,0,entry);else products.push(entry);}
    const nb=buildProductButton(entry);
    const pi=products.findIndex(p=>p[0]===name);
    if(pi===0) container.prepend(nb);
    else{const pb=container.querySelector('.product-btn[data-name="'+products[pi-1][0]+'"]');if(pb)pb.after(nb);else container.appendChild(nb);}
    customProductsList.push({name,icon:iv,price,after});
    try{localStorage.setItem("lidl_custom",JSON.stringify(customProductsList));}catch(e){}
    ["new-name","new-icon-emoji","new-price"].forEach(id=>document.getElementById(id).value="");
    document.getElementById("icon-preview-inner").textContent="🛒";
    document.getElementById("icon-file-input").value=""; newIconDataUrl=null;
    modal.style.display="none";
});

// ─── Панель цен ────────────────────────────────────────────────────────────
function openModal(tab){
    const list=document.getElementById("prices-list"); list.innerHTML="";
    products.forEach(p=>{
        const row=document.createElement("div");
        row.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:7px 6px;border-radius:10px;background:#0f0f0f;";
        row.innerHTML='<div style="width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">'+getIconHtml(p[0],p[1],"24px")+'</div>'
            +'<span style="flex:1;font-size:13px;color:#ccc;">'+p[0]+(p[3]?' <span style="font-size:9px;color:#60a5fa;">❆</span>':'')+'</span>'
            +'<input type="number" step="0.01" min="0" value="'+p[2]+'" data-name="'+p[0]+'" style="width:58px;padding:5px 6px;text-align:right;font-size:13px;">'
            +'<span style="font-size:12px;color:#555;">€</span>'
            +(p[3]?'<button data-del="'+p[0]+'" style="background:none;border:none;font-size:15px;cursor:pointer;color:#ef4444;padding:0 3px;">🗑</button>':'<span style="width:22px;"></span>');
        list.appendChild(row);
    });
    list.querySelectorAll("[data-del]").forEach(btn=>{
        btn.addEventListener("click",()=>{
            const name=btn.dataset.del;
            customProductsList=customProductsList.filter(cp=>cp.name!==name);
            try{localStorage.setItem("lidl_custom",JSON.stringify(customProductsList));}catch(e){}
            delete customIconData[name]; try{localStorage.setItem("lidl_icon_data",JSON.stringify(customIconData));}catch(e){}
            const i=products.findIndex(p=>p[0]===name); if(i>=0) products.splice(i,1);
            delete cart[name]; saveCart();
            const db=document.querySelector('.product-btn[data-name="'+name+'"]'); if(db) db.remove();
            updateTotal(); updateList(); openModal("tab-prices");
        });
    });
    if(tab==="tab-add"){fillCatalog();fillPosSelect();showTab("tab-add");showSub("subtab-catalog");}
    else if(tab==="tab-order"){fillOrderList();showTab("tab-order");}
    else showTab("tab-prices");
    modal.style.display="flex";
}

document.getElementById("save-prices").addEventListener("click",()=>{
    const np={};
    document.querySelectorAll("#prices-list input[data-name]").forEach(inp=>{const v=parseFloat(inp.value);if(!isNaN(v)&&v>=0)np[inp.dataset.name]=v;});
    try{localStorage.setItem("lidl_prices",JSON.stringify(np));}catch(e){}
    document.querySelectorAll("#prices-list input[data-name]").forEach(inp=>{
        const name=inp.dataset.name,val=parseFloat(inp.value);
        if(!isNaN(val)){const prod=products.find(p=>p[0]===name);if(prod)prod[2]=val;const btn=document.querySelector('.product-btn[data-name="'+name+'"]');if(btn)btn.dataset.price=val;if(cart[name])cart[name].price=val;}
    });
    saveCart(); updateTotal(); modal.style.display="none";
});
document.getElementById("reset-prices").addEventListener("click",()=>{
    try{localStorage.removeItem("lidl_prices");}catch(e){}
    defaultProducts.forEach(dp=>{const prod=products.find(p=>p[0]===dp[0]);if(prod)prod[2]=dp[2];const btn=document.querySelector('.product-btn[data-name="'+dp[0]+'"]');if(btn)btn.dataset.price=dp[2];if(cart[dp[0]])cart[dp[0]].price=dp[2];});
    saveCart(); updateTotal(); modal.style.display="none";
});

// ─── Sortable ──────────────────────────────────────────────────────────────
function loadSortable(cb){ if(window.Sortable){cb();return;} const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"; s.onload=cb; document.head.appendChild(s); }
let sortableInstance=null;
function fillOrderList(){
    const list=document.getElementById("order-list"); list.innerHTML="";
    products.forEach(p=>{
        const row=document.createElement("div"); row.dataset.name=p[0]; row.className="ord-row";
        row.innerHTML='<div style="color:#333;font-size:18px;flex-shrink:0;">⠿</div>'
            +'<div style="width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">'+getIconHtml(p[0],p[1],"24px")+'</div>'
            +'<span style="flex:1;font-size:13px;font-weight:600;color:#ccc;">'+p[0]+'</span>'
            +(p[3]?'<span style="font-size:10px;color:#60a5fa;font-weight:700;">custom</span>':'');
        list.appendChild(row);
    });
    loadSortable(()=>{ if(sortableInstance) sortableInstance.destroy(); sortableInstance=new Sortable(list,{animation:180}); });
}
document.getElementById("save-order").addEventListener("click",()=>{
    const list=document.getElementById("order-list");
    const newOrder=[...list.children].map(el=>el.dataset.name);
    const sorted=newOrder.map(name=>products.find(p=>p[0]===name)).filter(Boolean);
    products.forEach(p=>{if(!sorted.find(s=>s[0]===p[0]))sorted.push(p);});
    products.length=0; sorted.forEach(p=>products.push(p));
    try{localStorage.setItem("lidl_order",JSON.stringify(newOrder));}catch(e){}
    rebuildButtons(); Object.keys(cart).forEach(name=>{const btn=document.querySelector('.product-btn[data-name="'+name+'"]');if(btn){const c=btn.querySelector(".count");c.textContent=cart[name].qty;c.style.display="flex";}});
    modal.style.display="none";
});
document.getElementById("reset-order").addEventListener("click",()=>{
    try{localStorage.removeItem("lidl_order");}catch(e){}
    const list=document.getElementById("order-list"),dn=defaultProducts.map(p=>p[0]);
    [...list.children].sort((a,b)=>{const ai=dn.indexOf(a.dataset.name),bi=dn.indexOf(b.dataset.name);if(ai===-1)return 1;if(bi===-1)return -1;return ai-bi;}).forEach(r=>list.appendChild(r));
});

// totalEl только показывает сумму, редактор открывается через нижнюю навигацию

// ─── Drag-and-drop прямо в сетке (долгое нажатие) ─────────────────────────
let dragMode=false;
function enableDragMode(){
    if(dragMode) return;
    dragMode=true;
    vibrate();
    // Показываем индикатор
    const hint=document.createElement("div");
    hint.id="drag-hint";
    hint.style.cssText="position:fixed;top:60px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#4ade80;border:1px solid #4ade80;border-radius:20px;padding:7px 16px;font-size:12px;font-weight:700;z-index:800;pointer-events:none;letter-spacing:.5px;";
    hint.textContent="↕ Режим перемещения — нажми чтобы выйти";
    document.body.appendChild(hint);
    loadSortable(()=>{
        if(sortableInstance) sortableInstance.destroy();
        sortableInstance=new Sortable(container,{
            animation:200,
            delay:0,
            delayOnTouchOnly:false,
            ghostClass:"sortable-ghost",
            chosenClass:"sortable-chosen",
            onEnd:()=>{
                const newOrder=[...container.querySelectorAll(".product-btn")].map(b=>b.dataset.name);
                const sorted=newOrder.map(name=>products.find(p=>p[0]===name)).filter(Boolean);
                products.forEach(p=>{if(!sorted.find(s=>s[0]===p[0]))sorted.push(p);});
                products.length=0; sorted.forEach(p=>products.push(p));
                try{localStorage.setItem("lidl_order",JSON.stringify(newOrder));}catch(e){}
            }
        });
    });
    container.style.outline="2px solid #4ade8055";
    container.style.borderRadius="12px";
    // Тап по любому месту вне контейнера — выход
    const exitFn=e=>{ if(!container.contains(e.target)&&e.target.id!=="drag-hint"){ disableDragMode(); document.removeEventListener("touchstart",exitFn); document.removeEventListener("click",exitFn); } };
    setTimeout(()=>{ document.addEventListener("touchstart",exitFn,{passive:true}); document.addEventListener("click",exitFn); },300);
}
function disableDragMode(){
    dragMode=false;
    if(sortableInstance){sortableInstance.destroy();sortableInstance=null;}
    container.style.outline="none";
    const h=document.getElementById("drag-hint"); if(h) h.remove();
}

// Долгое нажатие на контейнер → режим перемещения
let longPressTimer=null;
container.addEventListener("touchstart",e=>{
    longPressTimer=setTimeout(()=>{ enableDragMode(); },600);
},{passive:true});
container.addEventListener("touchend",()=>{ clearTimeout(longPressTimer); },{passive:true});
container.addEventListener("touchmove",()=>{ clearTimeout(longPressTimer); },{passive:true});

// ═══════════════════════════════════════════════════════════════════════════
// НИЖНЯЯ НАВИГАЦИЯ
// ═══════════════════════════════════════════════════════════════════════════
// ── Нижняя навигация ────────────────────────────────────────────────────────
const navStyle=document.createElement("style");
navStyle.textContent=`
#bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:900;background:rgba(5,5,5,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,.05);padding:4px 0 calc(4px + env(safe-area-inset-bottom,0px));display:flex;}
.nav-btn{flex:1;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:2px 0;-webkit-tap-highlight-color:transparent;transition:transform .12s;}
.nav-btn:active{transform:scale(.88);}
.nav-icon{width:34px;height:34px;border-radius:10px;background:#222;border:1px solid #333;display:flex;align-items:center;justify-content:center;font-size:18px;transition:background .15s,box-shadow .15s,border-color .15s;color:#fff;}
.nav-lbl{font-size:10px;font-weight:700;letter-spacing:.4px;color:#fff;transition:color .15s;text-transform:uppercase;}
.nav-btn.flash .nav-icon{animation:navFlash .35s ease-out forwards;}
@keyframes navFlash{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}
`;
document.head.appendChild(navStyle);

const nav=document.createElement("div");
nav.id="bottom-nav";

const navItems=[
    {emoji:"＋", label:"Добавить", tab:"tab-add",    bg:"rgba(96,165,250,.12)", glow:"rgba(96,165,250,.4)",  col:"#60a5fa"},
    {emoji:"↕",  label:"Двигать",  tab:"tab-order",  bg:"rgba(74,222,128,.12)", glow:"rgba(74,222,128,.4)",  col:"#4ade80"},
    {emoji:"－",  label:"Удалить",  tab:"tab-prices", bg:"rgba(239,68,68,.12)",  glow:"rgba(239,68,68,.4)",   col:"#ef4444"},
];
navItems.forEach(({emoji,label,tab,bg,glow,col})=>{
    const btn=document.createElement("button"); btn.className="nav-btn";
    const ic=document.createElement("div"); ic.className="nav-icon"; ic.textContent=emoji;
    const lb=document.createElement("div"); lb.className="nav-lbl"; lb.textContent=label;
    btn.appendChild(ic); btn.appendChild(lb);
    btn.addEventListener("touchstart",()=>{
        ic.style.background=bg; ic.style.boxShadow="0 0 20px "+glow; lb.style.color=col;
    },{passive:true});
    btn.addEventListener("touchend",()=>{
        setTimeout(()=>{ ic.style.background="none"; ic.style.boxShadow="none"; lb.style.color="#3a3a3a"; },200);
    },{passive:true});
    btn.addEventListener("click",()=>{
        vibrate(); btn.classList.add("flash"); setTimeout(()=>btn.classList.remove("flash"),400);
        openModal(tab);
    });
    nav.appendChild(btn);
});
document.body.appendChild(nav);
document.querySelector(".container").style.paddingBottom="88px";

// ═══════════════════════════════════════════════════════════════════════════
// RESET / NOTES
// ═══════════════════════════════════════════════════════════════════════════
const resetBtn=document.getElementById("reset-btn"); resetBtn.textContent="";
const binImg=document.createElement("img"); binImg.src="static/icons/bin.png"; binImg.alt="BIN"; binImg.style.cssText="width:28px;height:28px;"; resetBtn.appendChild(binImg);
resetBtn.addEventListener("click",()=>{ vibrate(); cart={}; saveCart(); document.querySelectorAll(".product-btn .count").forEach(c=>{c.textContent="";c.style.display="none";}); updateTotal(); updateList(); });

const notesBtn=document.getElementById("notes-btn"); notesBtn.textContent="";
const noteImg=document.createElement("img"); noteImg.src="static/icons/note.png"; noteImg.alt="NOTE"; noteImg.style.cssText="width:24px;height:24px;"; notesBtn.appendChild(noteImg);
const notesModal=document.getElementById("notes-modal");
const notesText=document.getElementById("notes-text");
let savedNotes=""; try{savedNotes=localStorage.getItem("lidl_notes")||"";}catch(e){}
notesText.value=savedNotes; updateNotesIndicator();
function updateNotesIndicator(){ notesBtn.classList.toggle("active-note",savedNotes.trim().length>0); }
notesModal.addEventListener("click",e=>{ if(e.target===notesModal) notesModal.style.display="none"; });
notesBtn.addEventListener("click",()=>{ vibrate(); notesModal.style.display="flex"; });
document.getElementById("close-notes").addEventListener("click",()=>{ notesModal.style.display="none"; });
document.getElementById("save-notes").addEventListener("click",()=>{ savedNotes=notesText.value; try{localStorage.setItem("lidl_notes",savedNotes);}catch(e){} notesModal.style.display="none"; updateNotesIndicator(); });
document.getElementById("clear-notes").addEventListener("click",()=>{ notesText.value=""; notesText.focus(); });
