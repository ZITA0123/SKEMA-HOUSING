/* ============================================
   SKEMA HOUSING - Script principal
   Header, navigation, animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initMobileMenu();
  initLangSwitcher();
  initScrollAnimations();
  initLazyLoad();
  injectPartnerFooterLink();
});

// ===== HEADER SCROLL =====
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav-list');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });

  // Fermer en cliquant sur un lien
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      nav.classList.remove('is-open');
    });
  });
}

// ===== SÉLECTEUR DE LANGUE (DÉSACTIVÉ - site 100% FR) =====
function initLangSwitcher() {
  // Le sélecteur de langue est désactivé, le site est 100% en français.
  return;
}

function updateLangDisplay() {
  // Désactivé.
  return;
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===== LAZY LOAD IMAGES =====
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (images.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => observer.observe(img));
}

// ===== INJECTION AUTOMATIQUE DU LIEN "DEVENIR PARTENAIRE" DANS LE FOOTER =====
// Cette fonction parcourt tous les footers du site et ajoute le lien
// "Devenir partenaire" dans la colonne "À propos" si il n'existe pas déjà.
// Comme ça, pas besoin de modifier toutes les pages HTML manuellement.
function injectPartnerFooterLink() {
  // Cherche toutes les colonnes "À propos" du footer via leur h4
  const titles = document.querySelectorAll('.footer-title');
  titles.forEach(title => {
    if (title.textContent.trim().toLowerCase() === 'à propos') {
      const linksContainer = title.nextElementSibling;
      if (linksContainer && linksContainer.classList.contains('footer-links')) {
        // Vérifie si le lien existe déjà
        const exists = linksContainer.querySelector('a[href="devenir-partenaire.html"]');
        if (!exists) {
          const link = document.createElement('a');
          link.href = 'devenir-partenaire.html';
          link.textContent = 'Devenir partenaire';
          link.className = 'footer-link-partner';
          linksContainer.appendChild(link);
        }
      }
    }
  });
}

// ===== UTILITAIRES =====

// Génère un numéro de dossier unique
function generateApplicationNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `SKH-${year}-${random}`;
}

// Calcule une économie
function calculateSavings(market, skema) {
  return market - skema;
}

// Format prix en euros
function formatPrice(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Affiche les étoiles de notation
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

// Tri des éléments par note (logements et familles)
function sortByRating(items) {
  return [...items].sort((a, b) => b.rating - a.rating);
}

// Filtre les éléments "top notés"
function getTopRated(items, count = 3) {
  return sortByRating(items).slice(0, count);
}

// Smooth scroll vers une ancre
function smoothScrollTo(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Sauvegarde temporaire d'un formulaire dans localStorage
function saveFormDraft(formId, data) {
  localStorage.setItem(`draft-${formId}`, JSON.stringify(data));
}

function loadFormDraft(formId) {
  const draft = localStorage.getItem(`draft-${formId}`);
  return draft ? JSON.parse(draft) : null;
}

function clearFormDraft(formId) {
  localStorage.removeItem(`draft-${formId}`);
}

// Export des utilitaires
window.SKEMA_UTILS = {
  generateApplicationNumber,
  calculateSavings,
  formatPrice,
  renderStars,
  sortByRating,
  getTopRated,
  smoothScrollTo,
  saveFormDraft,
  loadFormDraft,
  clearFormDraft
};
