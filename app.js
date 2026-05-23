// ============================================================
//  FOODS CARNIVAL — App Logic
// ============================================================

// ── STATE ────────────────────────────────────────────────────
let cart = [];
let currentCategory = 'all'; 
let itemsLimit = 8; // Locked threshold to display exactly 8 cards initially

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
const searchInput   = $('searchInput'); 
const paginationWrap = $('paginationWrap');
const loadMoreBtn   = $('loadMoreBtn');

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderDeals();
  bindEvents();

  // ── STARTUP AUTOMATED SPLASH LOADER (CHEEZIOUS LOGO SPLASH STYLE) ──
  const splashOverlay = $('brandingSplashScreen');
  if (splashOverlay) {
    setTimeout(() => {
      splashOverlay.classList.add('hidden');
    }, 2500); 
  }
});

// ── RENDER MENU WITH INTERACTIVE RESPONSIVE LIMITS ───────────────────
function renderMenu(cat, searchQuery = '') {
  // 1. Filter by Category
  let items = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);
  
  // 2. Filter by Search Query
  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase().trim();
    items = items.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query)
    );
  }

  // 3. Handle Empty Search Results State
  if (items.length === 0) {
    menuGridEl.innerHTML = `
      <div class="search-empty-state" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-3);">
        <p>No items found matching "${searchQuery}"</p>
      </div>`;
    paginationWrap.style.display = 'none';
    return;
  }

  // 4. Implement Pagination Logic
  const totalItemsCount = items.length;
  if (totalItemsCount > itemsLimit) {
    paginationWrap.style.display = 'flex'; // Show load more button
    items = items.slice(0, itemsLimit);    // Take only up to limit
  } else {
    paginationWrap.style.display = 'none';  // Hide load more if count is small
  }

  menuGridEl.innerHTML = items.map((item, idx) => {
    const inCart = cart.find(c => Number(c.id) === Number(item.id));
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
  const c = cart.find(i => Number(i.id) === Number(id));
  if (c) { c.qty++; updateCartUI(); refreshCardUI(id); }
}
function menuDec(id) {
  const c = cart.find(i => Number(i.id) === Number(id));
  if (!c) return;
  c.qty--;
  if (c.qty <= 0) cart = cart.filter(i => Number(i.id) !== Number(id));
  updateCartUI();
  refreshCardUI(id);
}

function addToCart(id) {
  const item = MENU_ITEMS.find(i => Number(i.id) === Number(id));
  if (!item) return;
 
  const ex = cart.find(c => Number(c.id) === Number(id));
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
  const isDeal = String(id).startsWith('deal_');
  const c = cart.find(i => isDeal ? i.id === id : Number(i.id) === Number(id));
  if (c) { 
    c.qty++; 
    updateCartUI(); 
    if (!isDeal) refreshCardUI(id); 
  }
}

function cartDec(id) {
  const isDeal = String(id).startsWith('deal_');
  const c = cart.find(i => isDeal ? i.id === id : Number(i.id) === Number(id));
  if (!c) return;
  
  c.qty--;
  if (c.qty <= 0) {
    cart = cart.filter(i => isDeal ? i.id !== id : Number(i.id) !== Number(id));
  }
  
  updateCartUI();
  if (!isDeal) refreshCardUI(id);
}

function refreshCardUI(id) {
  const card = document.querySelector(`.menu-card[data-id="${id}"]`);
  if (!card) return;
  const c   = cart.find(i => Number(i.id) === Number(id));
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

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

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
          <p>Rs. ${item.price} × ${item.qty} = Rs. ${item.price * item.qty}</p>
        </div>
        <div class="ci-ctrl">
          <button class="ci-btn" onclick="cartDec('${item.id}')">−</button>
          <span class="ci-qty">${item.qty}</span>
          <button class="ci-btn" onclick="cartInc('${item.id}')">+</button>
        </div>
      </div>`).join('');

    cartFooterEl.classList.add('visible');
    $('cartSubtotal').textContent = `Rs. ${total}`;
    $('cartTotal').textContent    = `Rs. ${total}`;
  }
}

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

function openCheckout() {
  if (cart.length === 0) { showToast('Please add items to your cart first'); return; }
  closeCart();
  modalBg.classList.add('open');
}

function buildOrderText(name, phone, address) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total    = subtotal ;
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
  lines.push(`Delivery    : Rs. 22 per KM`);
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

function handleQuickCheckout(method) {
  if (cart.length === 0) { showToast('Please add items to your cart first'); return; }
  
  if (method === 'call') {
    window.location.href = 'tel:+923164640160';
    return;
  }
  
  let summary = `QUICK ORDER — Foods Carnival\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  cart.forEach(item => {
    summary += `• ${item.name} x${item.qty}\n`;
  });
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  summary += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSubtotal: Rs. ${subtotal}\nDelivery: Rs. 22 per KM\n\nPlease reply with your Name and Address to confirm.`;

  closeCart();

  if (method === 'whatsapp') {
    window.open(`https://wa.me/923164640160?text=${encodeURIComponent(summary)}`, '_blank');
    clearSystemCartState();
  } else if (method === 'email') {
    window.location.href = `mailto:foodscarnival.wah@gmail.com?subject=${encodeURIComponent('Quick Order — Foods Carnival')}&body=${encodeURIComponent(summary)}`;
    clearSystemCartState();
  }
}

function sendViaWhatsApp() {
  const d = validateOrder(); if (!d) return;
  const text = buildOrderText(d.name, d.phone, d.address);
  window.open(`https://wa.me/923164640160?text=${encodeURIComponent(text)}`, '_blank');
  finishOrder();
}

// Corrected window context syntax reference mappings
function sendViaEmail() {
  const d = validateOrder(); if (!d) return;
  window.location.href = `mailto:foodscarnival.wah@gmail.com?subject=${encodeURIComponent('New Order — Foods Carnival')}&body=${encodeURIComponent(buildOrderText(d.name, d.phone, d.address))}`;
  finishOrder();
}

function callRestaurant() {
  window.location.href = 'tel:+923164640160';
}

function clearSystemCartState() {
  cart = [];
  updateCartUI();
  document.querySelectorAll('.menu-card').forEach(card => {
    const addBtn  = card.querySelector('.mc-add-btn');
    const qtyCtrl = card.querySelector('.mc-qty-ctrl');
    if (addBtn)  addBtn.classList.remove('hidden');
    if (qtyCtrl) qtyCtrl.classList.remove('visible');
  });
}

function finishOrder() {
  clearSystemCartState();
  modalBg.classList.remove('open');
  showToast('Order sent! We will confirm shortly.');
}

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

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 2600);
}

function bindEvents() {
  $('cartNavBtn').addEventListener('click', e => { e.preventDefault(); openCart(); });
  $('cartNavBtnMobile').addEventListener('click', openCart);
  $('floatCart').addEventListener('click', openCart);
  $('cartClose').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  $('checkoutBtn').addEventListener('click', openCheckout);
  $('sendWhatsApp').addEventListener('click', sendViaWhatsApp);
  $('sendEmail').addEventListener('click', sendViaEmail);
  $('callBtn').addEventListener('click', callRestaurant);
  $('modalClose').addEventListener('click', () => modalBg.classList.remove('open'));
  modalBg.addEventListener('click', e => { if (e.target === modalBg) modalBg.classList.remove('open'); });

  // Load More logic framework trigger
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      itemsLimit += 12; // Dynamic load expansion step
      const searchVal = searchInput ? searchInput.value : '';
      renderMenu(currentCategory, searchVal);
    });
  }

  catTabsEl.addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    currentCategory = tab.dataset.cat;
    itemsLimit = 8; // Reset view compression threshold layer on category shifts
    const searchVal = searchInput ? searchInput.value : '';
    renderMenu(currentCategory, searchVal);
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      itemsLimit = 8; // Reset boundary on real-time character evaluation searches
      renderMenu(currentCategory, e.target.value);
    });
  }

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  $('hamburger').addEventListener('click', () => {
    $('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => $('navLinks').classList.remove('open'));
  });
}

window.menuAdd  = menuAdd;
window.menuInc  = menuInc;
window.menuDec  = menuDec;
window.cartInc  = cartInc;
window.cartDec  = cartDec;
window.addDeal  = addDeal;
window.closeCart = closeCart;
window.handleQuickCheckout = handleQuickCheckout;