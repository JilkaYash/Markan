/* ===== MARKAN — Shared Components ===== */

(function () {
  'use strict';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    if (page === 'index.html' && (currentPage === '' || currentPage === 'index.html')) return 'active';
    return currentPage === page ? 'active' : '';
  }

  /* ---------- Navbar ---------- */
  function renderNavbar() {
    return `
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="index.html" class="nav-logo">
          <img src="assets/images/mk-logo.png" alt="MARKAN Logo">
          <span class="nav-logo-text">MARKAN</span>
        </a>

        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
          <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
          <li><a href="products.html" class="${isActive('products.html')}">Products</a></li>
          <li><a href="industries.html" class="${isActive('industries.html')}">Industries</a></li>
          <li><a href="accessories.html" class="${isActive('accessories.html')}">Accessories</a></li>
          <li><a href="contact.html" class="nav-cta ${isActive('contact.html')}">Contact Us</a></li>
        </ul>

        <button class="nav-hamburger" id="navHamburger" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>`;
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    return `
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo">
              <img src="assets/images/mk-logo.png" alt="MARKAN Logo">
              <span class="nav-logo-text">MARKAN</span>
            </a>
            <p class="footer-desc">
              Trusted supplier of professional welding equipment, consumables, and accessories for industrial fabrication,
              manufacturing, and metalworking professionals across India.
            </p>
            <div class="footer-socials">
              <a href="#" class="footer-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" class="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/919998032794" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-heading">Products</h4>
            <ul class="footer-links">
              <li><a href="products.html">MIG Wire</a></li>
              <li><a href="products.html">Welding Rods</a></li>
              <li><a href="products.html">Cutting Discs</a></li>
              <li><a href="products.html">Grinding Discs</a></li>
              <li><a href="accessories.html">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="industries.html">Industries</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Contact Info</h4>
            <ul class="footer-links">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  style="display:inline;vertical-align:middle;margin-right:.5rem;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+919998032794">+91 99980 32794</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  style="display:inline;vertical-align:middle;margin-right:.5rem;">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@markanweld.com">info@markanweld.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  style="display:inline;vertical-align:middle;margin-right:.5rem;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Rajkot, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} MARKAN. All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- WhatsApp Float ---------- */
  function renderWhatsAppFloat() {
    return `
    <a href="https://wa.me/919998032794" target="_blank" rel="noopener noreferrer"
       class="whatsapp-float" id="whatsappFloat" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>`;
  }

  /* ---------- Back to Top ---------- */
  function renderBackToTop() {
    return `
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>`;
  }

  /* ---------- Page Header (inner pages) ---------- */
  window.renderPageHeader = function (title, breadcrumbs) {
    const crumbs = breadcrumbs.map((b, i) => {
      if (i === breadcrumbs.length - 1) {
        return `<span class="breadcrumb-current">${b.label}</span>`;
      }
      return `<a href="${b.href}" class="breadcrumb-link">${b.label}</a>`;
    }).join('<span class="breadcrumb-sep">/</span>');

    return `
    <section class="page-header">
      <div class="page-header-bg"></div>
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-header-title">${title}</h1>
          <nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs}</nav>
        </div>
      </div>
    </section>`;
  };

  /* ---------- Product Card Renderer ---------- */
  window.renderProductCard = function (product) {
    const imgSrc = product.image || getProductPlaceholderSVG(product.category);
    const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    const featuresHTML = product.features.map(f => `
      <li>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        ${f}
      </li>
    `).join('');

    return `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
        <img src="${imgSrc}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
      </div>
      <div class="product-info">
        <span class="product-category-tag">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <ul class="product-features">${featuresHTML}</ul>
        <div class="product-buttons">
          <a href="product-detail.html?id=${product.id}" class="btn btn-sm btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View Details
          </a>
          <a href="${getWhatsAppLink(product.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="${getEmailLink(product.name)}" class="btn btn-sm btn-email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>`;
  };

  /* ---------- Accessory Card Renderer ---------- */
  window.renderAccessoryCard = function (acc) {
    const imgSrc = acc.image || getProductPlaceholderSVG(acc.category);
    const featuresHTML = acc.features.map(f => `
      <li>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        ${f}
      </li>
    `).join('');

    return `
    <div class="product-card accessory-card" data-category="${acc.category}">
      <div class="product-image">
        <img src="${imgSrc}" alt="${acc.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category-tag">${acc.category}</span>
        <h3 class="product-name">${acc.name}</h3>
        <p class="product-desc">${acc.description}</p>
        <ul class="product-features">${featuresHTML}</ul>
        <div class="product-buttons">
          <a href="${getWhatsAppLink(acc.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="${getEmailLink(acc.name)}" class="btn btn-sm btn-email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>`;
  };

  /* ---------- Inject Components ---------- */
  function injectComponents() {
    // Navbar
    const navSlot = document.getElementById('nav-slot');
    if (navSlot) navSlot.innerHTML = renderNavbar();

    // Footer
    const footerSlot = document.getElementById('footer-slot');
    if (footerSlot) footerSlot.innerHTML = renderFooter();

    // WhatsApp + Back to top
    const utilSlot = document.getElementById('util-slot');
    if (utilSlot) utilSlot.innerHTML = renderWhatsAppFloat() + renderBackToTop();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }
})();
