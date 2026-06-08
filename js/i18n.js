/* ============================================
   SKEMA HOUSING - i18n DÉSACTIVÉ
   Le site est maintenant 100% en français.
   ============================================ */

// Fichier conservé pour compatibilité mais désactivé.
// Si une page le charge encore, il ne fait rien.
window.i18n = {
  currentLang: 'fr',
  t: function(key, fallback) { return fallback || key; },
  setLang: function() {},
  toggle: function() {},
  applyTranslations: function() {},
  init: function() {}
};
