/* ===== MARKAN — Interactive Scripts (Multi-Page) ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Page Loader ---------- */
  const loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 600);
    });
    if (document.readyState === 'complete') {
      setTimeout(() => loader.classList.add('loaded'), 600);
    }
  }

  /* ---------- Navbar Scroll Effect ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const scrollThreshold = 60;
    function handleNavScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  /* ---------- Mobile Navigation ---------- */
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const navH = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Hero Spark Particles ---------- */
  const sparksContainer = document.getElementById('heroSparks');
  if (sparksContainer) {
    const sparkCount = 30;
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.top = `${40 + Math.random() * 50}%`;
      spark.style.setProperty('--dur', `${1.5 + Math.random() * 3}s`);
      spark.style.setProperty('--dx', `${(Math.random() - 0.5) * 150}px`);
      spark.style.setProperty('--dy', `${-80 - Math.random() * 200}px`);
      spark.style.animationDelay = `${Math.random() * 4}s`;
      spark.style.width = `${2 + Math.random() * 3}px`;
      spark.style.height = spark.style.width;
      sparksContainer.appendChild(spark);
    }
  }

  /* ---------- Counter Animation ---------- */
  const counters = [
    { id: 'statYears',    target: 15 },
    { id: 'statClients',  target: 500 },
    { id: 'statProducts', target: 50 },
  ];

  let counterAnimated = false;

  function animateCounters() {
    if (counterAnimated) return;
    counterAnimated = true;

    counters.forEach(({ id, target }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = easeOutQuart(frame / totalFrames);
        el.textContent = Math.round(target * progress);
        if (frame >= totalFrames) {
          el.textContent = target;
          clearInterval(timer);
        }
      }, frameDuration);
    });
  }

  function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(heroStats);
  }

  /* ---------- Scroll Reveal Animations ---------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-children');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Back to Top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.form-submit');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        Sending...
      `;
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Message Sent!
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #66BB6A)';
        submitBtn.style.boxShadow = '0 4px 20px rgba(76,175,80,.4)';
        submitBtn.style.opacity = '1';

        setTimeout(() => {
          contactForm.reset();
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          submitBtn.style.boxShadow = '';
        }, 3000);
      }, 1500);
    });
  }

  /* ---------- Product Card Tilt Effect ---------- */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---------- Parallax Hero ---------- */
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

  /* ---------- Products Page: Search & Filter ---------- */
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('productSearch');
  const filterContainer = document.getElementById('filterTabs');

  if (productGrid && typeof MARKAN_PRODUCTS !== 'undefined') {
    let activeCategory = 'All';
    let searchQuery = '';

    function renderProducts() {
      let products = activeCategory === 'All'
        ? MARKAN_PRODUCTS
        : MARKAN_PRODUCTS.filter(p => p.category === activeCategory);

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        products = products.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }

      if (products.length === 0) {
        productGrid.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3>No Products Found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        `;
        return;
      }

      productGrid.innerHTML = products.map(p => renderProductCard(p)).join('');

      // Re-apply tilt effect to new cards
      productGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 25;
          const rotateY = (centerX - x) / 25;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    // Build filter tabs
    if (filterContainer) {
      const categories = getCategories();
      filterContainer.innerHTML = categories.map(cat =>
        `<button class="filter-tab${cat === 'All' ? ' active' : ''}" data-category="${cat}">${cat}</button>`
      ).join('');

      filterContainer.addEventListener('click', e => {
        if (!e.target.classList.contains('filter-tab')) return;
        filterContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.dataset.category;
        renderProducts();
      });
    }

    // Search
    if (searchInput) {
      let debounce;
      searchInput.addEventListener('input', e => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          searchQuery = e.target.value;
          renderProducts();
        }, 250);
      });
    }

    // Initial render
    renderProducts();
  }

  /* ---------- Accessories Page: Filter ---------- */
  const accessoryGrid = document.getElementById('accessoryGrid');
  const accFilterContainer = document.getElementById('accFilterTabs');

  if (accessoryGrid && typeof MARKAN_ACCESSORIES !== 'undefined') {
    let activeAccCategory = 'All';

    function renderAccessories() {
      const items = activeAccCategory === 'All'
        ? MARKAN_ACCESSORIES
        : MARKAN_ACCESSORIES.filter(a => a.category === activeAccCategory);

      if (items.length === 0) {
        accessoryGrid.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3>No Accessories Found</h3>
            <p>Try selecting a different category.</p>
          </div>
        `;
        return;
      }

      accessoryGrid.innerHTML = items.map(a => renderAccessoryCard(a)).join('');
    }

    if (accFilterContainer) {
      const categories = getAccessoryCategories();
      accFilterContainer.innerHTML = categories.map(cat =>
        `<button class="filter-tab${cat === 'All' ? ' active' : ''}" data-category="${cat}">${cat}</button>`
      ).join('');

      accFilterContainer.addEventListener('click', e => {
        if (!e.target.classList.contains('filter-tab')) return;
        accFilterContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        activeAccCategory = e.target.dataset.category;
        renderAccessories();
      });
    }

    renderAccessories();
  }

  /* ---------- Product Detail Page ---------- */
  const detailContainer = document.getElementById('productDetailContent');

  if (detailContainer && typeof MARKAN_PRODUCTS !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = getProductById(productId);

    if (!product) {
      detailContainer.innerHTML = `
        <div class="empty-state" style="padding: 6rem 2rem;">
          <div class="empty-state-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h3>Product Not Found</h3>
          <p>The product you're looking for doesn't exist.</p>
          <a href="products.html" class="btn btn-primary" style="margin-top: 1.5rem;">Browse Products</a>
        </div>
      `;
      return;
    }

    // Update page title
    document.title = `${product.name} — MARKAN Welding Solutions`;

    // Update breadcrumb
    const breadcrumbName = document.getElementById('breadcrumbProductName');
    if (breadcrumbName) breadcrumbName.textContent = product.name;

    const imgSrc = product.image || getProductPlaceholderSVG(product.category);

    // Build specs table
    const specsHTML = Object.entries(product.specifications).map(([key, val]) =>
      `<tr><td>${key}</td><td>${val}</td></tr>`
    ).join('');

    // Build applications list
    const appsHTML = product.applications.map(app =>
      `<li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        ${app}
      </li>`
    ).join('');

    // Build benefits list
    const benefitsHTML = product.benefits.map(b =>
      `<li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        ${b}
      </li>`
    ).join('');

    detailContainer.innerHTML = `
      <div class="product-detail-grid">
        <div class="product-detail-image reveal reveal-left">
          <img src="${imgSrc}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<span class="product-badge" style="position:absolute;top:1rem;right:1rem;">${product.badge}</span>` : ''}
        </div>

        <div class="product-detail-info reveal reveal-right">
          <span class="product-detail-category">${product.category}</span>
          <h2 class="product-detail-name">${product.name}</h2>
          <p class="product-detail-desc">${product.description}</p>

          <div class="detail-section">
            <h3 class="detail-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              Specifications
            </h3>
            <table class="specs-table">${specsHTML}</table>
          </div>

          <div class="detail-section">
            <h3 class="detail-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              Applications
            </h3>
            <ul class="detail-list">${appsHTML}</ul>
          </div>

          <div class="detail-section">
            <h3 class="detail-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Benefits
            </h3>
            <ul class="detail-list">${benefitsHTML}</ul>
          </div>

          <div class="inquiry-cta">
            <h3>Interested in ${product.name}?</h3>
            <p>Get in touch for pricing, specifications, and availability.</p>
            <div class="inquiry-buttons">
              <a href="${getWhatsAppLink(product.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Inquiry
              </a>
              <a href="${getEmailLink(product.name)}" class="btn btn-email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="related-products reveal">
        <div class="section-header">
          <span class="section-label">More Options</span>
          <h2 class="section-title">Related Products</h2>
        </div>
        <div class="related-products-grid" id="relatedProductsGrid"></div>
      </div>
    `;

    // Render related products (same category, different ID)
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (relatedGrid) {
      const related = MARKAN_PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

      if (related.length === 0) {
        // Show products from other categories
        const others = MARKAN_PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
        relatedGrid.innerHTML = others.map(p => renderProductCard(p)).join('');
      } else {
        relatedGrid.innerHTML = related.map(p => renderProductCard(p)).join('');
      }
    }

    // Re-init scroll reveal for dynamically added content
    document.querySelectorAll('.reveal, .reveal-children').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
      obs.observe(el);
    });
  }

});

/* ---------- Inline spin animation ---------- */
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .spin {
    animation: spin 1s linear infinite;
  }
`;
document.head.appendChild(style);
