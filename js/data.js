/* ============================================
   SKEMA HOUSING - Données du site
   ============================================ */

// ===== UTILISATEUR CONNECTÉ (démo) =====
const CURRENT_USER = {
  firstname: 'Séraphine',
  lastname: 'GNEKOU',
  email: 'seraphine.gnekou@skema.edu',
  phone: '+33 6 12 34 56 78',
  nationality: 'Française',
  program: 'MS®',
  programFull: 'Mastère Spécialisé',
  year: 'M2',
  initials: 'SG',
  avatarColor: '#00a5c4'
};

// ===== PAYS AVEC CAMPUS SKEMA =====
const COUNTRIES = [
  { id: 'france', name: 'France', image: 'assets/images/pays/France.jpg', active: true, campusCount: 3 },
  { id: 'south-africa', name: 'Afrique du Sud', image: 'assets/images/pays/Afrique_du_sud.jpg', active: false, campusCount: 1 },
  { id: 'brazil', name: 'Brésil', image: 'assets/images/pays/Brezil.jpg', active: false, campusCount: 1 },
  { id: 'canada', name: 'Canada', image: 'assets/images/pays/Canada.jpg', active: false, campusCount: 1 },
  { id: 'china', name: 'Chine', image: 'assets/images/pays/Chine.jpg', active: false, campusCount: 1 },
  { id: 'uae', name: 'Émirats arabes unis', image: 'assets/images/pays/Emirat_Arabe_Unis.jpeg', active: false, campusCount: 1 },
  { id: 'usa', name: 'États-Unis', image: 'assets/images/pays/Etat_Unis.jpg', active: false, campusCount: 1 }
];

// ===== CAMPUS PAR PAYS =====
const CAMPUSES_BY_COUNTRY = {
  france: [
    { id: 'grand-paris', name: 'Paris', fullName: 'Campus Grand Paris', city: 'Suresnes', address: '5 Quai Marcel Dassault, 92150 Suresnes', country: 'France', active: true, image: 'assets/images/campus/campus-grand-paris.jpg' },
    { id: 'lille', name: 'Lille', fullName: 'Campus Lille', city: 'Lille', address: 'Avenue Willy Brandt, 59777 Euralille', country: 'France', active: false, image: 'assets/images/campus/campus-lille.jpg' },
    { id: 'sophia', name: 'Sophia Antipolis', fullName: 'Campus Sophia Antipolis', city: 'Sophia Antipolis', address: '60 rue Dostoïevski, 06902 Sophia Antipolis', country: 'France', active: false, image: 'assets/images/campus/campus-sophia-antipolis.jpg' }
  ]
};

// ===== LOGEMENTS EN RÉSIDENCE PRIVÉE =====
// Descriptions reformulées : MAX 10 MOTS, claires et engageantes
const RESIDENCES = [
  { id: 'res-001', featured: true, name: 'Suitétudes Le Diapason', operator: 'Suitétudes (groupe UXCO)', location: 'Suresnes (92150)', transportTime: 8, transportMode: '8 min à pied', zone: 'zone-1', rating: 4.9, reviewCount: 187, features: ['Meublé', 'Wifi', 'Salle de sport', 'Laverie'], available: 3, image: 'assets/images/residences/res-01-suitetudes-diapason.jpg', description: 'Studio moderne tout équipé, à 8 min du campus.', website: 'https://www.uxco.com/fr/', badges: ['Proche campus'] },
  { id: 'res-002', featured: true, name: 'Studea La Défense', operator: 'Nexity Studéa', location: 'Puteaux (92800)', transportTime: 12, transportMode: 'Tram T2', zone: 'zone-1', rating: 4.8, reviewCount: 215, features: ['Meublé', 'Wifi', 'Salle d\'étude', 'Laverie'], available: 2, image: 'assets/images/residences/res-02-studea-la-defense.jpg', description: 'Studio meublé au cœur du quartier d\'affaires.', website: 'https://www.nexity-studea.com', badges: ['Proche campus'] },
  { id: 'res-003', featured: true, name: 'Estudines Paris La Défense', operator: 'Les Estudines', location: 'Courbevoie (92400)', transportTime: 14, transportMode: 'Tram T2 + 5 min', zone: 'zone-1', rating: 4.7, reviewCount: 142, features: ['Meublé', 'Wifi', 'Coworking', 'Sécurité 24/7'], available: 4, image: 'assets/images/residences/res-03-estudines-la-defense.jpg', description: 'Studio meublé avec coworking et sécurité 24/7.', website: 'https://www.estudines.com', badges: [] },
  { id: 'res-004', featured: true, name: 'YouFirst Campus Nanterre', operator: 'YouFirst Campus', location: 'Nanterre (92000)', transportTime: 15, transportMode: 'RER A — 2 stations', zone: 'zone-1', rating: 4.6, reviewCount: 98, features: ['Meublé', 'Wifi', 'Salle de sport', 'Rooftop'], available: 5, image: 'assets/images/residences/res-04-youfirst-nanterre.jpg', description: 'Résidence neuve avec rooftop et salle de sport.', website: 'https://campus.youfirst.co/fr', badges: ['Nouveauté'] },
  { id: 'res-005', featured: true, name: 'The Boost Society Boulogne', operator: 'The Boost Society', location: 'Boulogne-Billancourt (92100)', transportTime: 25, transportMode: 'Métro 9 + Tram T2', zone: 'zone-2', rating: 4.8, reviewCount: 87, features: ['Meublé design', 'Wifi', 'Coworking', 'Salle cinéma'], available: 2, image: 'assets/images/residences/res-05-boost-society-boulogne.jpg', description: 'Coliving design avec coworking et salle cinéma.', website: 'https://www.theboostsociety.fr/', badges: ['Coliving'] },
  { id: 'res-006', featured: true, name: 'Studea Paris Étoile', operator: 'Nexity Studéa', location: 'Paris 17e — Étoile', transportTime: 28, transportMode: 'Métro 1 + Tram T2', zone: 'zone-2', rating: 4.6, reviewCount: 178, features: ['Meublé', 'Wifi', 'Réception', 'Sécurité 24/7'], available: 4, image: 'assets/images/residences/res-06-studea-etoile.jpg', description: 'Studio meublé à deux pas des Champs-Élysées.', website: 'https://www.nexity-studea.com', badges: [] },
  { id: 'res-007', featured: true, name: 'ECLA Massy-Palaiseau', operator: 'ECLA Paris', location: 'Massy (91300)', transportTime: 48, transportMode: 'RER B + RER A', zone: 'zone-4', rating: 4.9, reviewCount: 234, features: ['Meublé', 'Piscine', 'Salle de sport', 'Restaurant'], available: 4, image: 'assets/images/residences/res-07-ecla-massy.jpg', description: 'Plus grand campus étudiant : piscine et restaurant.', website: 'https://www.ecla.com', badges: [] },
  { id: 'res-008', featured: true, name: 'Studélites Le Vaneau', operator: 'Studélites', location: 'Paris 7e — Invalides', transportTime: 45, transportMode: 'Métro 12 + Tram T2', zone: 'zone-3', rating: 4.8, reviewCount: 92, features: ['Meublé', 'Wifi fibre', 'Conciergerie', 'Petit-déjeuner'], available: 2, image: 'assets/images/residences/res-08-studelites-vaneau.jpg', description: 'Résidence haut de gamme avec conciergerie au 7e.', website: 'https://www.studelites.com', badges: [] }
];

// ===== FAMILLES D'ACCUEIL (avec vraies photos) =====
// Descriptions reformulées : MAX 10 MOTS
const FAMILIES = [
  { id: 'fam-001', featured: true, name: 'Famille Dubois-Martin', type: 'Famille avec 2 enfants', location: 'Suresnes (92150)', transportTime: 10, transportMode: '10 min à pied', zone: 'zone-1', rating: 4.9, reviewCount: 67, languages: ['Français', 'Anglais', 'Espagnol'], diet: ['Omnivore', 'Végétarien accepté'], features: ['Chambre privée', 'Wifi', 'Repas inclus', 'Jardin'], available: 1, image: 'assets/images/residences/famille1.jpg', description: 'Famille chaleureuse avec jardin, à 10 min du campus.', badges: ['Proche campus'] },
  { id: 'fam-002', featured: true, name: 'Famille Laurent', type: 'Couple retraité', location: 'Puteaux (92800)', transportTime: 15, transportMode: 'Tram T2 — 2 stations', zone: 'zone-1', rating: 4.8, reviewCount: 89, languages: ['Français', 'Anglais'], diet: ['Omnivore', 'Halal accepté'], features: ['Chambre + SDB', 'Wifi', 'Petit-déj inclus', 'Calme'], available: 1, image: 'assets/images/residences/famille2.png', description: 'Couple retraité accueillant, calme et petit-déj inclus.', badges: [] },
  { id: 'fam-003', featured: true, name: 'Famille Nguyen', type: 'Famille avec 1 enfant', location: 'Boulogne-Billancourt (92100)', transportTime: 25, transportMode: 'Métro 9 + Tram T2', zone: 'zone-2', rating: 4.7, reviewCount: 54, languages: ['Français', 'Anglais', 'Vietnamien', 'Mandarin'], diet: ['Asiatique', 'Végétarien accepté'], features: ['Chambre privée', 'Wifi', 'Repas asiatiques', 'Multilingue'], available: 2, image: 'assets/images/residences/famille3.jpg', description: 'Famille multilingue : mandarin, vietnamien, repas asiatiques.', badges: [] },
  { id: 'fam-004', featured: true, name: 'Famille Bensaïd', type: 'Couple avec 2 enfants', location: 'Neuilly-sur-Seine (92200)', transportTime: 22, transportMode: 'Métro 1 + Tram T2', zone: 'zone-2', rating: 4.8, reviewCount: 38, languages: ['Français', 'Anglais', 'Arabe'], diet: ['Halal', 'Méditerranéen'], features: ['Chambre privée', 'Wifi', 'Repas inclus', 'Quartier chic'], available: 1, image: 'assets/images/residences/famille4.jpg', description: 'Famille franco-marocaine, cuisine halal dans quartier chic.', badges: ['Halal certifié'] },
  { id: 'fam-005', featured: false, name: 'Famille Moreau', type: 'Famille avec 3 enfants', location: 'Rueil-Malmaison (92500)', transportTime: 20, transportMode: 'RER A + Tram T2', zone: 'zone-1', rating: 4.5, reviewCount: 41, languages: ['Français', 'Anglais'], diet: ['Omnivore'], features: ['Chambre privée', 'Wifi', 'Jardin'], available: 1, image: 'assets/images/residences/famille5.jpg', description: 'Grande maison familiale avec jardin, ambiance conviviale.', badges: [] },
  { id: 'fam-006', featured: false, name: 'Famille Cohen', type: 'Couple avec 1 enfant', location: 'Saint-Cloud (92210)', transportTime: 18, transportMode: 'Transilien L + Tram T2', zone: 'zone-1', rating: 4.7, reviewCount: 45, languages: ['Français', 'Anglais', 'Hébreu'], diet: ['Casher', 'Végétarien'], features: ['Chambre + SDB', 'Wifi', 'Repas casher'], available: 1, image: 'assets/images/residences/famille1.jpg', description: 'Famille pratiquante, cuisine casher et chambre privée.', badges: ['Casher certifié'] }
];

// ===== TÉMOIGNAGES =====
const TESTIMONIALS = [
  { id: 't-001', name: 'Sarah Lefèvre', program: 'PGE Master 2', campus: 'Paris', photo: 'SL', rating: 5, duration: '3 jours', product: 'residence', quote: 'J\'ai trouvé mon studio à Suresnes en 3 jours seulement, à 10 min à pied du campus.' },
  { id: 't-002', name: 'Wei Zhang', program: 'MSc International Business', campus: 'Paris', photo: 'WZ', rating: 5, duration: '5 jours', product: 'family', quote: 'La famille Nguyen m\'a accueilli comme un fils. Vraie expérience d\'intégration.' },
  { id: 't-003', name: 'Lucas Martin', program: 'Global BBA', campus: 'Paris', photo: 'LM', rating: 5, duration: '1 semaine', product: 'residence', quote: 'L\'accès prioritaire aux résidences est un vrai plus.' },
  { id: 't-004', name: 'Maria Rodriguez', program: 'PGE Master 1', campus: 'Paris', photo: 'MR', rating: 5, duration: '4 jours', product: 'family', quote: 'En tant qu\'étudiante mexicaine, je voulais une vraie immersion. Parfait.' },
  { id: 't-005', name: 'Antoine Dubois', program: 'MS Finance', campus: 'Paris', photo: 'AD', rating: 4, duration: '2 semaines', product: 'residence', quote: 'Service ultra pro. Studio à Puteaux, 12 min de tram.' },
  { id: 't-006', name: 'Yuki Tanaka', program: 'MSc Digital Marketing', campus: 'Paris', photo: 'YT', rating: 5, duration: '6 jours', product: 'family', quote: 'La famille Bensaïd m\'a accueillie avec un repas en mon honneur.' }
];

// ===== STATS (chiffres raisonnables) =====
const STATS = {
  studentsHoused: 120,
  partnerResidences: 8,
  hostFamilies: 6,
  campuses: 1,
  satisfaction: 4.7,
  averageSearchDays: 18,
  dossiersThisWeek: 32,
  remainingPlacesParis: 47
};

// ===== ÉQUIPE =====
const TEAM = [
  { id: 'team-001', name: 'Noémie RAFFAT', role: 'Chef de projet & Coordinatrice générale', initials: 'NR', color: '#bf0030', mission: 'Pilote l\'ensemble du projet, prend les décisions stratégiques et garantit le respect des délais.', expertise: ['Gestion de projet', 'Coordination', 'Stratégie'], email: 'noemie.raffat@skema.edu' },
  { id: 'team-002', name: 'Julia NUNES', role: 'Responsable Partenariats & Business', initials: 'JN', color: '#e20074', mission: 'Développe le réseau de résidences partenaires et familles d\'accueil.', expertise: ['Négociation', 'Partenariats B2B'], email: 'julia.nunes@skema.edu' },
  { id: 'team-003', name: 'Séraphine GNEKOU', role: 'Responsable Digital & Plateforme', initials: 'SG', color: '#00a5c4', mission: 'Supervise la conception du site et l\'expérience utilisateur.', expertise: ['UX/UI Design', 'Plateforme digitale'], email: 'seraphine.gnekou@skema.edu' },
  { id: 'team-004', name: 'Debora CARDACI', role: 'Responsable Expérience étudiante', initials: 'DC', color: '#6d1f80', mission: 'Gère la relation étudiante et la communication.', expertise: ['Communication', 'Relation client'], email: 'debora.cardaci@skema.edu' },
  { id: 'team-005', name: 'Zahira ABOURYAK', role: 'Responsable Finance & Juridique', initials: 'ZA', color: '#0e1655', mission: 'Garantit la rentabilité du projet et la conformité juridique.', expertise: ['Finance', 'Droit'], email: 'zahira.abouryak@skema.edu' }
];

const TRANSPORT_ZONES = [
  { id: 'zone-1', label: '0-15 min', maxMinutes: 15 },
  { id: 'zone-2', label: '15-30 min', maxMinutes: 30 },
  { id: 'zone-3', label: '30-45 min', maxMinutes: 45 },
  { id: 'zone-4', label: '45-60 min', maxMinutes: 60 },
  { id: 'no-pref', label: 'Pas de préférence', maxMinutes: 999 }
];

const PROGRAMS = [
  { id: 'bba', name: 'Global BBA' }, { id: 'pge', name: 'PGE' }, { id: 'msc', name: 'MSc' },
  { id: 'ms', name: 'MS®' }, { id: 'exec', name: 'Executive Education' }
];

const FAQ = [
  {
    category: 'Avant l\'arrivée',
    questions: [
      { q: 'Combien de temps avant ma rentrée dois-je faire ma demande ?', a: 'Nous recommandons 2 mois avant. Vous recevrez nos propositions sous 48h.' },
      { q: 'Quels documents préparer ?', a: 'Pièce d\'identité, justificatif d\'inscription SKEMA, justificatif de garant, et RIB. Tout numérique.' },
      { q: 'Où se situe le campus SKEMA Paris ?', a: 'Au 5 Quai Marcel Dassault à Suresnes (92150), accessible Tram T2 et Transilien L.' }
    ]
  },
  {
    category: 'Logements & trajet',
    questions: [
      { q: 'Travaillez-vous avec le CROUS ?', a: 'Non, SKEMA Housing travaille exclusivement avec des opérateurs privés et familles d\'accueil vérifiées.' },
      { q: 'Quelles sont vos résidences partenaires ?', a: 'Nexity Studéa, Estudines, Studélites, Suitétudes (UXCO), Cardinal Campus, Twenty Campus, Boost Society, YouFirst, ECLA.' }
    ]
  },
  {
    category: 'Paiement',
    questions: [
      { q: 'Combien coûte le service ?', a: 'Résidences : 150€ frais de dossier. Familles : 80€ mise en relation. Loyer versé directement au logeur.' },
      { q: 'Garantie locative ?', a: 'Caution automatique pour étudiants internationaux sans garant français.' }
    ]
  },
  {
    category: 'Familles d\'accueil',
    questions: [
      { q: 'Comment sont sélectionnées les familles ?', a: 'Vérification d\'identité, contrôle du logement, entretien, et minimum 1 référence.' },
      { q: 'Allergies / régime alimentaire ?', a: 'Toutes vos contraintes sont prises en compte : halal, casher, végétarien, sans gluten, allergies.' }
    ]
  }
];

window.SKEMA_DATA = {
  CURRENT_USER, COUNTRIES, CAMPUSES_BY_COUNTRY,
  RESIDENCES, FAMILIES, TESTIMONIALS, STATS, TEAM,
  TRANSPORT_ZONES, PROGRAMS, FAQ
};
