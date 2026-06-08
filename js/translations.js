/* ============================================
   SKEMA HOUSING - Système de traduction FR/EN
   Architecture prête pour bascule multilingue
   ============================================ */

const TRANSLATIONS = {
  fr: {
    // ===== NAVIGATION =====
    'nav.home': 'Accueil',
    'nav.residences': 'Logements',
    'nav.families': 'Familles d\'accueil',
    'nav.testimonials': 'Témoignages',
    'nav.team': 'Notre équipe',
    'nav.faq': 'FAQ',
    'nav.about': 'À propos',
    'nav.start': 'Démarrer mon dossier',

    // ===== HOME - HERO =====
    'home.hero.title': 'At Home Worldwide',
    'home.hero.subtitle': 'Votre logement étudiant validé par SKEMA, partout dans le monde.',
    'home.hero.description': 'Trouvez en quelques jours un logement fiable, sécurisé et adapté à votre profil, sur tous les campus SKEMA.',
    'home.hero.cta.residence': 'Trouver un logement',
    'home.hero.cta.family': 'Famille d\'accueil',

    // ===== STATS =====
    'stats.students': 'Étudiants logés',
    'stats.residences': 'Résidences partenaires',
    'stats.families': 'Familles vérifiées',
    'stats.satisfaction': 'Satisfaction étudiante',

    // ===== FOOTER =====
    'footer.tagline': 'At Home Worldwide',
    'footer.description': 'La plateforme officielle de logement étudiant SKEMA. Logements vérifiés, accompagnement dédié, et accès prioritaire pour tous les étudiants.',
    'footer.services': 'Services',
    'footer.help': 'Aide',
    'footer.about': 'À propos',
    'footer.copyright': '© 2025 SKEMA Housing. Tous droits réservés.',

    // ===== BIAIS COGNITIFS =====
    'biais.scarcity': 'Plus que {n} places disponibles pour la rentrée 2025',
    'biais.social': '{n} étudiants ont réservé cette semaine',
    'biais.urgency': 'Ne ratez pas votre logement avant la rentrée',
    'biais.savings': 'Économisez jusqu\'à {amount}€ vs marché classique',

    // ===== FORMULAIRES =====
    'form.firstname': 'Prénom',
    'form.lastname': 'Nom',
    'form.email': 'Email SKEMA',
    'form.phone': 'Téléphone',
    'form.program': 'Programme',
    'form.year': 'Année d\'études',
    'form.campus': 'Campus de destination',
    'form.arrival': 'Date d\'arrivée',
    'form.departure': 'Date de départ',
    'form.duration': 'Durée du séjour',
    'form.budget': 'Budget mensuel',
    'form.required': 'Champ obligatoire',
    'form.next': 'Étape suivante',
    'form.previous': 'Précédent',
    'form.submit': 'Envoyer mon dossier',
    'form.cgu': 'J\'accepte les conditions générales d\'utilisation',

    // ===== CONFIRMATION =====
    'confirm.title': 'Votre dossier est en route ! 🎉',
    'confirm.subtitle': 'Vous recevrez nos propositions par email sous 48h',
    'confirm.number': 'Numéro de dossier',
    'confirm.next.title': 'Prochaines étapes',
    'confirm.step1': 'Email de confirmation sous 1h',
    'confirm.step2': 'Propositions personnalisées sous 48h',
    'confirm.step3': 'Visite organisée selon vos disponibilités'
  },

  en: {
    // ===== NAVIGATION =====
    'nav.home': 'Home',
    'nav.residences': 'Housing',
    'nav.families': 'Host Families',
    'nav.testimonials': 'Testimonials',
    'nav.team': 'Our Team',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.start': 'Start application',

    // ===== HOME - HERO =====
    'home.hero.title': 'At Home Worldwide',
    'home.hero.subtitle': 'Your SKEMA-verified student housing, anywhere in the world.',
    'home.hero.description': 'Find a reliable, secure and tailored housing in just a few days, on all SKEMA campuses.',
    'home.hero.cta.residence': 'Find housing',
    'home.hero.cta.family': 'Host family',

    // ===== STATS =====
    'stats.students': 'Students housed',
    'stats.residences': 'Partner residences',
    'stats.families': 'Verified families',
    'stats.satisfaction': 'Student satisfaction',

    // ===== FOOTER =====
    'footer.tagline': 'At Home Worldwide',
    'footer.description': 'The official SKEMA student housing platform. Verified accommodations, dedicated support, and priority access for all students.',
    'footer.services': 'Services',
    'footer.help': 'Help',
    'footer.about': 'About',
    'footer.copyright': '© 2025 SKEMA Housing. All rights reserved.',

    // ===== BIAIS COGNITIFS =====
    'biais.scarcity': 'Only {n} spots left for 2025 intake',
    'biais.social': '{n} students booked this week',
    'biais.urgency': 'Don\'t miss your housing before the start',
    'biais.savings': 'Save up to €{amount} compared to market',

    // ===== FORMULAIRES =====
    'form.firstname': 'First name',
    'form.lastname': 'Last name',
    'form.email': 'SKEMA Email',
    'form.phone': 'Phone',
    'form.program': 'Program',
    'form.year': 'Year of study',
    'form.campus': 'Destination campus',
    'form.arrival': 'Arrival date',
    'form.departure': 'Departure date',
    'form.duration': 'Stay duration',
    'form.budget': 'Monthly budget',
    'form.required': 'Required field',
    'form.next': 'Next step',
    'form.previous': 'Previous',
    'form.submit': 'Submit application',
    'form.cgu': 'I accept the terms and conditions',

    // ===== CONFIRMATION =====
    'confirm.title': 'Your application is on its way! 🎉',
    'confirm.subtitle': 'You will receive our proposals by email within 48 hours',
    'confirm.number': 'Application number',
    'confirm.next.title': 'Next steps',
    'confirm.step1': 'Confirmation email within 1 hour',
    'confirm.step2': 'Personalized proposals within 48 hours',
    'confirm.step3': 'Visit scheduled according to your availability'
  }
};

// ===== GESTIONNAIRE DE LANGUE =====
const I18n = {
  currentLang: 'fr',

  init() {
    const savedLang = localStorage.getItem('skema-lang') || 'fr';
    this.setLang(savedLang);
  },

  setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('skema-lang', lang);
    document.documentElement.lang = lang;
    this.translatePage();
  },

  t(key, vars = {}) {
    let text = TRANSLATIONS[this.currentLang][key] || key;
    Object.keys(vars).forEach(k => {
      text = text.replace(`{${k}}`, vars[k]);
    });
    return text;
  },

  translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', this.t(key));
    });
  },

  toggle() {
    this.setLang(this.currentLang === 'fr' ? 'en' : 'fr');
  }
};

window.I18n = I18n;
