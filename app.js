// ============================================================
//  FOODS CARNIVAL — App Logic
// ============================================================

// ── STATE ────────────────────────────────────────────────────
let cart = [];

// ── DOM ───────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const cartSidebar   = $('cartSidebar');
const cartOverlay   = $('cartOverlay');
const cartItemsEl   = $('cartItems');
const cartFooterEl  = $('cartFooter');
const menuGridEl    = $('menuGrid');
const dealsGridEl   = $('dealsGrid');
const catTabsEl     = $('catTabs');
const navbar        = $('navbar');
const modalBg       = $('modalBg');
const toastEl       = $('toast');

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderDeals();
  bindEvents();
});

// ── RENDER MENU ───────────────────────────────────────────────
function renderMenu(cat) {
  const items = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);
  menuGridEl.innerHTML = items.map((item, idx) => {
    const inCart = cart.find(c => c.id === item.id);
    const qty    = inCart ? inCart.qty : 0;
    return `
    <div class="menu-card" style="animation-delay:${Math.min(idx,12)*0.04}s" data-id="${item.id}">
      <div class="mc-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=70'"/>
        ${item.badge ? `<span class="mc-badge">${item.badge}</span>` : ''}
      </div>
      <div class="mc-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="mc-footer">
          <span class="mc-price">Rs. ${item.price}</span>
          <div class="mc-add-wrap">
            <button class="mc-add-btn ${qty > 0 ? 'hidden' : ''}" onclick="menuAdd(${item.id})" aria-label="Add to cart">+</button>
            <div class="mc-qty-ctrl ${qty > 0 ? 'visible' : ''}">
              <button class="mc-qbtn" onclick="menuDec(${item.id})">−</button>
              <span class="mc-qnum" id="mqn-${item.id}">${qty}</span>
              <button class="mc-qbtn" onclick="menuInc(${item.id})">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── RENDER DEALS ──────────────────────────────────────────────
function renderDeals() {
  dealsGridEl.innerHTML = DEALS.map(deal => `
    <div class="deal-card">
      <div class="dc-num">${deal.num}</div>
      <div class="dc-items">
        ${deal.items.map(i => `
          <div class="dc-item">
            <span class="dc-dot"></span>${i}
          </div>`).join('')}
      </div>
      <div class="dc-footer">
        <div class="dc-price-wrap">
          <span class="dc-old">Rs. ${deal.oldPrice}</span>
          <span class="dc-price">Rs. ${deal.price}</span>
        </div>
        <button class="dc-add" onclick="addDeal('${deal.id}')">Add Deal</button>
      </div>
    </div>`).join('');
}

// ── CART LOGIC ────────────────────────────────────────────────
function menuAdd(id) {
  addToCart(id);
  refreshCardUI(id);
}
function menuInc(id) {
  const c = cart.find(i => i.id === id);
  if (c) { c.qty++; updateCartUI(); refreshCardUI(id); }
}
function menuDec(id) {
  const c = cart.find(i => i.id === id);
  if (!c) return;
  c.qty--;
  if (c.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
  refreshCardUI(id);
}

function addToCart(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCartUI();
  showToast(`${item.name} added to cart`);
}

function addDeal(dealId) {
  const deal = DEALS.find(d => d.id === dealId);
  if (!deal) return;
  const fakeId = 'deal_' + dealId;
  const ex = cart.find(c => c.id === fakeId);
  if (ex) ex.qty++;
  else cart.push({ id: fakeId, name: deal.num, price: deal.price, img: deal.img, qty: 1 });
  updateCartUI();
  showToast(`${deal.num} added to cart`);
}

function cartInc(id) {
  const c = cart.find(i => i.id === id);
  if (c) { c.qty++; updateCartUI(); if (!String(id).startsWith('deal_')) refreshCardUI(id); }
}
function cartDec(id) {
  const c = cart.find(i => i.id === id);
  if (!c) return;
  c.qty--;
  if (c.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
  if (!String(id).startsWith('deal_')) refreshCardUI(id);
}

// Refresh a single menu card's quantity control
function refreshCardUI(id) {
  const card = document.querySelector(`.menu-card[data-id="${id}"]`);
  if (!card) return;
  const c   = cart.find(i => i.id === id);
  const qty = c ? c.qty : 0;
  const addBtn  = card.querySelector('.mc-add-btn');
  const qtyCtrl = card.querySelector('.mc-qty-ctrl');
  const qtyNum  = card.querySelector('.mc-qnum');
  if (qty > 0) {
    addBtn.classList.add('hidden');
    qtyCtrl.classList.add('visible');
    qtyNum.textContent = qty;
  } else {
    addBtn.classList.remove('hidden');
    qtyCtrl.classList.remove('visible');
  }
}

// ── UPDATE CART UI ────────────────────────────────────────────
function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  // badges
  [$('cartCount'), $('cartCountMobile'), $('floatCount')].forEach(el => {
    if (el) el.textContent = count;
  });

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty-state">
        <i class="fas fa-bag-shopping"></i>
        <p>Your cart is empty</p>
        <button class="btn-ghost small" onclick="closeCart()">Browse Menu</button>
      </div>`;
    cartFooterEl.classList.remove('visible');
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="ci-img"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&q=70'"/>
        <div class="ci-info">
          <h4>${item.name}</h4>
          <p>Rs. ${item.price} &times; ${item.qty} = Rs. ${item.price * item.qty}</p>
        </div>
        <div class="ci-ctrl">
          <button class="ci-btn" onclick="cartDec('${item.id}')">−</button>
          <span class="ci-qty">${item.qty}</span>
          <button class="ci-btn" onclick="cartInc('${item.id}')">+</button>
        </div>
      </div>`).join('');

    cartFooterEl.classList.add('visible');
    $('cartSubtotal').textContent = `Rs. ${total}`;
    $('cartTotal').textContent    = `Rs. ${total + 250}`;
  }
}

// ── CART OPEN / CLOSE ─────────────────────────────────────────
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── CHECKOUT ──────────────────────────────────────────────────
function openCheckout() {
  if (cart.length === 0) { showToast('Please add items to your cart first'); return; }
  closeCart();
  modalBg.classList.add('open');
}

// Build order summary text
function buildOrderText(name, phone, address) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total    = subtotal + 250;
  let lines = [];
  lines.push(`ORDER — Foods Carnival Fast Food & Refreshment Point`);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Customer : ${name}`);
  if (phone)   lines.push(`Phone    : ${phone}`);
  lines.push(`Address  : ${address}`);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`ITEMS:`);
  cart.forEach(item => {
    lines.push(`  • ${item.name} x${item.qty}  —  Rs. ${item.price * item.qty}`);
  });
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Subtotal    : Rs. ${subtotal}`);
  lines.push(`Delivery    : Rs. 250`);
  lines.push(`TOTAL       : Rs. ${total}`);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Thank you for ordering from Foods Carnival!`);
  return lines.join('\n');
}

function validateOrder() {
  const name    = $('custName').value.trim();
  const address = $('custAddress').value.trim();
  if (!name)    { showToast('Please enter your name'); return null; }
  if (!address) { showToast('Please enter your delivery address'); return null; }
  return {
    name,
    phone:   $('custPhone').value.trim(),
    address,
  };
}

// WhatsApp
function sendViaWhatsApp() {
  const d = validateOrder(); if (!d) return;
  const text = buildOrderText(d.name, d.phone, d.address);
  const url  = `https://wa.me/923164640160?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  finishOrder();
}

// Email
function sendViaEmail() {
  const d = validateOrder(); if (!d) return;
  const subject = encodeURIComponent('New Order — Foods Carnival');
  const body    = encodeURIComponent(buildOrderText(d.name, d.phone, d.address));
  window.location.href = `mailto:foodscarnival.wah@gmail.com?subject=${subject}&body=${body}`;
  finishOrder();
}

// Call
function callRestaurant() {
  window.location.href = 'tel:+923164640160';
}

function finishOrder() {
  cart = [];
  updateCartUI();
  // refresh all card UIs
  document.querySelectorAll('.menu-card').forEach(card => {
    const id = Number(card.dataset.id);
    const addBtn  = card.querySelector('.mc-add-btn');
    const qtyCtrl = card.querySelector('.mc-qty-ctrl');
    if (addBtn)  addBtn.classList.remove('hidden');
    if (qtyCtrl) qtyCtrl.classList.remove('visible');
  });
  modalBg.classList.remove('open');
  showToast('Order sent! We will confirm shortly.');
}

// ── LOCATION ─────────────────────────────────────────────────
$('getLocationBtn').addEventListener('click', () => {
  const st = $('locationStatus');
  if (!navigator.geolocation) { st.textContent = 'Location not supported'; return; }
  st.textContent = 'Fetching location...';
  navigator.geolocation.getCurrentPosition(
    async pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      try {
        const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
        const j = await r.json();
        $('custAddress').value = j.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
        st.textContent = 'Location set';
      } catch {
        $('custAddress').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
        st.textContent = 'Location set';
      }
    },
    () => { st.textContent = 'Could not get location'; }
  );
});

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 2600);
}

// ── EVENT BINDINGS ────────────────────────────────────────────
function bindEvents() {
  // Cart open
  $('cartNavBtn').addEventListener('click', e => { e.preventDefault(); openCart(); });
  $('cartNavBtnMobile').addEventListener('click', openCart);
  $('floatCart').addEventListener('click', openCart);
  // Cart close
  $('cartClose').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  // Checkout
  $('checkoutBtn').addEventListener('click', openCheckout);
  // Modal channels
  $('sendWhatsApp').addEventListener('click', sendViaWhatsApp);
  $('sendEmail').addEventListener('click', sendViaEmail);
  $('callBtn').addEventListener('click', callRestaurant);
  // Modal close
  $('modalClose').addEventListener('click', () => modalBg.classList.remove('open'));
  modalBg.addEventListener('click', e => { if (e.target === modalBg) modalBg.classList.remove('open'); });

  // Category tabs
  catTabsEl.addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });

  // Navbar scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger
  $('hamburger').addEventListener('click', () => {
    $('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => $('navLinks').classList.remove('open'));
  });
}

// Expose for inline onclick
window.menuAdd  = menuAdd;
window.menuInc  = menuInc;
window.menuDec  = menuDec;
window.cartInc  = cartInc;
window.cartDec  = cartDec;
window.addDeal  = addDeal;
window.closeCart = closeCart;

