/* ========================================================
   VIVA STOREFRONT — MODERN LUXURY ENGINE
   Interactive Features, 3D Tilt, Theme Mode, Cursor & Cart
   ======================================================== */

// ---------- Product Catalog ----------
const products = [
  { id:1, name:"Sovereign Tote Bag", category:"bags", price:289, originalPrice:359, image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop", rating:4.9, reviews:142, isNew:true, isSale:true, desc:"Hand-burnished Italian calfskin leather in deep violet with brushed gold hardware. Velvet interior lining with passport and tablet partition." },
  { id:2, name:"Chronometer Royale Gold & Malachite", category:"watches", price:499, originalPrice:null, image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", rating:5.0, reviews:96, isNew:true, isSale:false, desc:"Swiss automatic movement, genuine malachite dial, anti-reflective sapphire crystal, and dark midnight alligator-embossed strap." },
  { id:3, name:"Botanical Mulberry Silk Foulard", category:"accessories", price:119, originalPrice:160, image:"https://images.unsplash.com/photo-1601924921557-45e8e0220586?w=600&h=600&fit=crop", rating:4.8, reviews:78, isNew:false, isSale:true, desc:"100% grade 6A mulberry silk featuring bespoke botanical engravings with hand-rolled borders. Hypoallergenic and lightweight." },
  { id:4, name:"Aviator Titanium Violet Tint", category:"accessories", price:219, originalPrice:null, image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop", rating:4.7, reviews:215, isNew:false, isSale:false, desc:"Aerospace-grade titanium frame with dual anti-reflective polarized violet lenses and custom filigree bridge detail." },
  { id:5, name:"Maison Low-Top Court Sneakers", category:"shoes", price:279, originalPrice:340, image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop", rating:4.9, reviews:324, isNew:true, isSale:true, desc:"Handcrafted in Porto with premium Nappa leather, contrasting coral heel tab, and ergonomic cork footbed." },
  { id:6, name:"Fine Mongolian Cashmere Knit", category:"clothing", price:320, originalPrice:null, image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop", rating:4.9, reviews:182, isNew:false, isSale:false, desc:"Two-ply pure Mongolian cashmere with ribbed trims. Exquisitely soft touch with natural thermoregulating properties." },
  { id:7, name:"Verdant Saddle Flap Bag", category:"bags", price:199, originalPrice:260, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop", rating:4.6, reviews:110, isNew:false, isSale:true, desc:"Architectural equestrian saddle silhouette with gold magnetic clasp and detachable braided chain strap." },
  { id:8, name:"Imperial Diver Chronograph 300M", category:"watches", price:649, originalPrice:null, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", rating:5.0, reviews:194, isNew:true, isSale:false, desc:"Ceramic uni-directional bezel, helium escape valve, Super-LumiNova markers, and 300m water resistance certification." },
  { id:9, name:"Crepe de Chine Tiered Dress", category:"clothing", price:210, originalPrice:280, image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop", rating:4.8, reviews:104, isNew:false, isSale:true, desc:"Flowing tiered silhouette made from airy organic linen and silk blend in soft lilac and rose hues." },
  { id:10, name:"Patina Leather Chelsea Boots", category:"shoes", price:349, originalPrice:null, image:"https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=600&fit=crop", rating:4.9, reviews:165, isNew:true, isSale:false, desc:"Full-grain museum calf leather with hand-finished patina, Goodyear welted construction, and Vibram rubber insets." },
  { id:11, name:"Baroque Tahitian Pearl Drops", category:"accessories", price:149, originalPrice:195, image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", rating:4.7, reviews:89, isNew:false, isSale:true, desc:"Cultured Tahitian pearls with iridescent peacock violet overtones, mounted on 18K solid yellow gold hooks." },
  { id:12, name:"Double-Faced Wool & Cashmere Overcoat", category:"clothing", price:580, originalPrice:null, image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=600&fit=crop", rating:5.0, reviews:240, isNew:true, isSale:false, desc:"Unstructured Italian tailoring, hand-stitched lapels, horn buttons, and deep midnight felted wool finish." },
];

const categories = [
  { name:"Haute Apparel", slug:"clothing", count:64, image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
  { name:"Leather & Bags", slug:"bags", count:32, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop" },
  { name:"Horology Watches", slug:"watches", count:22, image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=400&fit=crop" },
  { name:"Artisanal Shoes", slug:"shoes", count:40, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop" },
  { name:"Fine Accessories", slug:"accessories", count:48, image:"https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&h=400&fit=crop" },
];

const testimonials = [
  { name:"Lady Genevieve Vance", role:"Art Collector, London", text:"Viva's attention to craftsmanship is second to none. The malachite watch arrived in an exquisite lacquer box and performs with Swiss precision. An unforgettable luxury experience.", rating:5, avatar:"GV" },
  { name:"Alexander Thorne", role:"Architectural Director, Zurich", text:"Finding sustainable pieces that also exude uncompromising regal prestige is rare. The double-faced overcoat is simply the finest garment I have ever acquired.", rating:5, avatar:"AT" },
  { name:"Camilla Dupont", role:"Fashion Editor, Paris", text:"The bespoke violet tote bag is an absolute showstopper. It blends timeless modern tones with flawless tailoring. Viva has redefined contemporary luxury storefronts.", rating:5, avatar:"CD" },
];

// ---------- State ----------
const load = (k) => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } };
// Cart stores only id/qty/variant; name, price & image are always read from `products`
let cart = load('vivaCart').filter(i => i && i.id).map(i => ({ id: i.id, qty: i.qty || 1, size: i.size || '', color: i.color || '', key: i.key || String(i.id) }));
let wishlist = load('vivaWishlist');
const FREE_SHIP_MIN = 200, SHIP_FEE = 15;
let currentFilter = 'all';

// ---------- App Initialization ----------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories();
  renderProducts();
  renderTestimonials();
  updateCartUI();
  updateWishlistUI();
  initNavbarScroll();
  initSearch();
  initCountdown();
  initBackToTop();
  initNewsletterForm();
});

// ---------- Dark / Light Mode with LocalStorage ----------
function initTheme() {
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('vivaTheme') || 'dark'; } catch (_) {}
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('vivaTheme', next); } catch (_) {}
  updateThemeIcons(next);
  showToast(`Switched to ${next.toUpperCase()} mode ✨`);
}

function updateThemeIcons(theme) {
  const isDark = theme === 'dark';
  const iconClass = isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill';
  
  const desktopIcon = document.getElementById('themeIcon');
  if (desktopIcon) {
    desktopIcon.className = `bi ${iconClass}`;
  }
  const mobileIcon = document.getElementById('mobileThemeIcon');
  if (mobileIcon) {
    mobileIcon.className = `bi ${iconClass}`;
  }
}

// ---------- Transparent Navbar at Top & Scroll Effect ----------
function initNavbarScroll() {
  const nav = document.getElementById('mainNavbar');
  if (!nav) return;

  function updateNavbar() {
    if (window.scrollY > 40) {
      nav.classList.remove('at-top');
      nav.classList.add('scrolled');
    } else {
      nav.classList.add('at-top');
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}

// ---------- Render Categories ----------
function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;
  container.innerHTML = categories.map(cat => `
    <div class="col-6 col-md-4 col-lg reveal">
      <div class="category-card" onclick="filterByCategory('${cat.slug}')">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy">
        <div class="category-overlay">
          <div class="category-name">${cat.name}</div>
          <div class="category-count">${products.filter(p => p.category === cat.slug).length} Artifacts</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------- Render Products with 3D Tilt Hook ----------
function renderProducts(filter = 'all') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = filter === 'all' ? products
    : filter === 'new' ? products.filter(p => p.isNew)
    : filter === 'sale' ? products.filter(p => p.isSale)
    : products.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    const isWished = wishlist.includes(p.id);
    const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    return `
    <div class="col-6 col-md-4 col-lg-3 reveal">
      <div class="product-card" data-id="${p.id}">
        <div class="product-img-wrapper">
          ${p.isNew ? '<span class="badge-new">New In</span>' : ''}
          ${p.isSale ? '<span class="badge-sale">-' + discount + '%</span>' : ''}
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="product-actions">
            <button class="product-action-btn ${isWished ? 'wishlisted' : ''}" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">
              <i class="bi bi-heart${isWished ? '-fill' : ''}"></i>
            </button>
            <button class="product-action-btn" onclick="quickView(${p.id})" title="Quick View">
              <i class="bi bi-eye"></i>
            </button>
            <button class="product-action-btn" onclick="addToCart(${p.id})" title="Add to Bag">
              <i class="bi bi-bag-plus"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category-label">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-rating">
            <span class="stars">${generateStars(p.rating)}</span>
            <span class="count">(${p.reviews} verified)</span>
          </div>
          <div class="product-price">
            <span class="current">\$${p.price}</span>
            ${p.originalPrice ? `<span class="original">\$${p.originalPrice}</span>` : ''}
            ${discount > 0 ? `<span class="discount">Save ${discount}%</span>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '<i class="bi bi-star-fill"></i>';
  if (half) s += '<i class="bi bi-star-half"></i>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) s += '<i class="bi bi-star"></i>';
  return s;
}

// ---------- Filter Tabs ----------
function setFilter(filter, el) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderProducts(filter);
}

function filterByCategory(slug) {
  currentFilter = slug;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === slug);
  });
  renderProducts(slug);
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
}

// ---------- Shopping Cart System ----------
const money = (n) => `$${n.toFixed(2)}`;

function cartLines() {
  return cart.map(i => ({ ...i, p: products.find(p => p.id === i.id) })).filter(l => l.p);
}

function cartTotals() {
  const subtotal = cartLines().reduce((s, l) => s + l.p.price * l.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIP_MIN ? 0 : SHIP_FEE;
  return { subtotal, shipping, total: subtotal + shipping };
}

function addToCart(id, qty = 1, opts = {}) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const size = opts.size || '', color = opts.color || '';
  const key = [id, size, color].join('|');
  const existing = cart.find(item => item.key === key);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty, size, color, key });
  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to shopping bag!`);
}

function removeFromCart(key) {
  cart = cart.filter(item => item.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  try { localStorage.setItem('vivaCart', JSON.stringify(cart)); } catch (_) {}
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count:not(.wishlist-count)').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const sidebar = document.getElementById('cartSidebar');
  if (!overlay || !sidebar) return;
  overlay.classList.toggle('active');
  sidebar.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
  renderCartItems();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('cartSidebar')?.classList.contains('active')) toggleCart();
  document.querySelectorAll('.search-results').forEach(r => r.style.display = 'none');
});

function renderCartItems() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body) return;
  const lines = cartLines();

  if (lines.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="bi bi-bag"></i>
        <h5 style="color: var(--text-primary); margin-bottom: 8px;">Your Shopping Bag is Empty</h5>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Discover our latest creations and elevate your wardrobe.</p>
        <button class="btn-viva mt-3" onclick="toggleCart()">Begin Shopping</button>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';
  body.innerHTML = lines.map(l => {
    const variant = [l.size && `Size ${l.size}`, l.color].filter(Boolean).join(' / ') || 'Standard Edition';
    return `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${l.p.image}" alt="${l.p.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${l.p.name}</div>
        <div class="cart-item-variant">${variant} / Complimentary Box</div>
        <div class="cart-item-bottom">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="updateQty('${l.key}',-1)" aria-label="Decrease quantity">−</button>
            <span class="quantity-value">${l.qty}</span>
            <button class="quantity-btn" onclick="updateQty('${l.key}',1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-item-price">${money(l.p.price * l.qty)}</div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${l.key}')" aria-label="Remove item"><i class="bi bi-x-lg"></i></button>
    </div>`;
  }).join('');

  const t = cartTotals();
  document.getElementById('cartSubtotal').textContent = money(t.subtotal);
  document.getElementById('cartTotal').textContent = money(t.total);
  const ship = document.getElementById('cartShipping');
  ship.textContent = t.shipping === 0 ? 'FREE' : money(t.shipping);
  ship.className = t.shipping === 0 ? 'text-success fw-bold' : '';
}

// ---------- Wishlist System ----------
function syncWishlistButtons() {
  document.querySelectorAll('.product-card').forEach(card => {
    const btn = card.querySelector('.product-action-btn[title="Wishlist"]');
    if (!btn) return;
    const on = wishlist.includes(+card.dataset.id);
    btn.classList.toggle('wishlisted', on);
    btn.innerHTML = `<i class="bi bi-heart${on ? '-fill' : ''}"></i>`;
  });
}

function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  const product = products.find(p => p.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast(`Saved "${product?.name}" to wishlist! ✨`);
    if (btn) {
      btn.classList.add('heart-pop');
      setTimeout(() => btn.classList.remove('heart-pop'), 400);
    }
  }
  localStorage.setItem('vivaWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function moveToBag(id) {
  wishlist = wishlist.filter(w => w !== id);
  localStorage.setItem('vivaWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  addToCart(id);
  renderWishlistModal();
}

function removeFromWishlist(id) {
  toggleWishlist(id);
  renderWishlistModal();
}

function updateWishlistUI() {
  document.querySelectorAll('.wishlist-count').forEach(badge => {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
  syncWishlistButtons();
}

function renderWishlistModal() {
  const body = document.getElementById('wishlistModalBody');
  if (!body) return;
  const wishedItems = products.filter(p => wishlist.includes(p.id));

  if (wishedItems.length === 0) {
    body.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-heart" style="font-size: 3rem; color: var(--text-muted); opacity: 0.3;"></i>
        <h5 class="mt-3" style="color: var(--text-primary);">No items saved yet</h5>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Click the heart icon on any piece to save it for later.</p>
        <button class="btn-viva mt-3" data-bs-dismiss="modal">Browse Collection</button>
      </div>`;
    return;
  }
  body.innerHTML = `
    <div class="row g-3">
      ${wishedItems.map(item => `
        <div class="col-md-6">
          <div class="d-flex gap-3 align-items-center p-3 rounded h-100" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
            <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px; flex-shrink: 0;">
            <div class="flex-grow-1 min-w-0">
              <h6 class="mb-1 text-truncate" style="color: var(--text-primary); font-size: 0.95rem;">${item.name}</h6>
              <div class="fw-bold mb-2" style="color: var(--viva-emerald-light); font-size: 0.9rem;">${money(item.price)}</div>
              <div class="d-flex gap-2 align-items-center">
                <button class="btn btn-sm btn-outline-success" onclick="moveToBag(${item.id})" style="border-radius: 20px; font-size: 0.75rem;">
                  <i class="bi bi-bag-plus me-1"></i>Move to Bag
                </button>
                <button class="btn btn-sm btn-link text-danger p-0" onclick="removeFromWishlist(${item.id})" style="font-size: 0.8rem;">Remove</button>
              </div>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
}

function openWishlistModal() {
  const modalEl = document.getElementById('wishlistModal');
  if (!modalEl) return;
  renderWishlistModal();
  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

// ---------- Quick View Modal ----------
function quickView(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  modal.querySelector('.qv-image img').src = p.image;
  modal.querySelector('.qv-category').textContent = p.category.toUpperCase();
  modal.querySelector('.qv-info h3').textContent = p.name;
  modal.querySelector('.qv-price').innerHTML = `${money(p.price)} ${p.originalPrice ? `<span class="original">${money(p.originalPrice)}</span>` : ''}`;
  modal.querySelector('.qv-desc').textContent = p.desc;
  modal.querySelector('.qv-rating').innerHTML = `${generateStars(p.rating)} <span class="count ms-2">(${p.reviews} client appraisals)</span>`;

  // Reset selections; sizes only make sense for apparel
  const sizes = modal.querySelectorAll('.size-btn');
  sizes.forEach((b, i) => b.classList.toggle('active', i === 1));
  modal.querySelectorAll('.color-swatch').forEach((s, i) => s.classList.toggle('active', i === 0));
  const needsSize = p.category === 'clothing';
  const sizeBox = modal.querySelector('.size-options');
  sizeBox.style.display = needsSize ? 'flex' : 'none';
  sizeBox.previousElementSibling.style.display = needsSize ? '' : 'none';

  modal.querySelector('.qv-add-btn').onclick = () => {
    addToCart(p.id, 1, {
      size: needsSize ? modal.querySelector('.size-btn.active')?.textContent.trim() : '',
      color: modal.querySelector('.color-swatch.active')?.title || ''
    });
    bootstrap.Modal.getOrCreateInstance(modal).hide();
  };

  bootstrap.Modal.getOrCreateInstance(modal).show();
}

// ---------- Search System ----------
function pickSearchResult(id) {
  document.querySelectorAll('.search-results').forEach(r => r.style.display = 'none');
  document.querySelectorAll('.search-input').forEach(i => i.value = '');
  quickView(id);
}

function initSearch() {
  document.querySelectorAll('.search-wrapper').forEach(wrap => {
    const input = wrap.querySelector('.search-input');
    const results = wrap.querySelector('.search-results');
    if (!input || !results) return;

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.style.display = 'none'; return; }

      const matches = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );

      results.innerHTML = matches.length === 0
        ? '<div class="p-3 text-muted text-center" style="font-size:0.85rem;">No artifacts match your inquiry</div>'
        : matches.slice(0, 5).map(p => `
          <div class="search-result-item" onclick="pickSearchResult(${p.id})">
            <img src="${p.image}" alt="${p.name}" style="width:42px;height:42px;border-radius:8px;object-fit:cover;">
            <div>
              <div style="font-weight:600;font-size:.85rem;color:var(--text-primary);">${p.name}</div>
              <div style="font-size:.8rem;color:var(--viva-emerald-light); font-weight:700;">${money(p.price)}</div>
            </div>
          </div>`).join('');
      results.style.display = 'block';
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      document.querySelectorAll('.search-results').forEach(r => r.style.display = 'none');
    }
  });
}

// ---------- Countdown Timer ----------
function initCountdown() {
  // Static campaign deadline for this storefront preview.
  const endDate = new Date('2026-11-15T23:59:59');
  function update() {
    const diff = Math.max(0, endDate.getTime() - Date.now());
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val).padStart(2, '0');
    };
    set('cd-days', Math.floor(diff / 86400000));
    set('cd-hours', Math.floor((diff % 86400000) / 3600000));
    set('cd-minutes', Math.floor((diff % 3600000) / 60000));
    set('cd-seconds', Math.floor((diff % 60000) / 1000));
  }
  update();
  window.setInterval(update, 1000);
}

// ---------- Back to Top ----------
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Newsletter Form ----------
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value) {
      showToast('Thanks for your interest! Newsletter signup is a demo in this preview.');
      input.value = '';
    }
  });
}

// ---------- Toast Notification ----------
function showToast(message) {
  let toast = document.getElementById('vivaToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vivaToast';
    toast.className = 'viva-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon"><i class="bi bi-gem"></i></span> <span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ---------- Testimonials ----------
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = testimonials.map(t => `
    <div class="col-md-4 reveal">
      <div class="testimonial-card">
        <div class="testimonial-stars">${'<i class="bi bi-star-fill"></i>'.repeat(t.rating)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.avatar}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------- Checkout Flow ----------
function checkout() {
  if (cart.length === 0) return;
  const total = cartTotals().total;
  showToast(`Demo checkout · Order total ${money(total)}. No payment was processed.`);
}
