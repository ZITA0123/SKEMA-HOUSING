# 🏠 SKEMA Housing — At Home Worldwide

> Plateforme e-commerce de logement étudiant SKEMA. Projet final du cours **E-Business**.

[![Status](https://img.shields.io/badge/status-production-success)]()
[![Tech](https://img.shields.io/badge/tech-HTML%20CSS%20JS-orange)]()
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)]()

---

## 📋 Sommaire

1. [À propos du projet](#-à-propos-du-projet)
2. [L'équipe ambassadrice](#-léquipe-ambassadrice)
3. [Charte graphique SKEMA](#-charte-graphique-skema)
4. [Architecture du site](#-architecture-du-site)
5. [Stack technique](#-stack-technique)
6. [Installation locale](#-installation-locale)
7. [Déploiement GitHub Pages](#-déploiement-github-pages)
8. [Business model](#-business-model)
9. [Biais cognitifs & UX appliqués](#-biais-cognitifs--ux-appliqués)
10. [Critères Bastien & Scapin](#-critères-bastien--scapin)
11. [Système de notation](#-système-de-notation)
12. [Documentation Notion suggérée](#-documentation-notion-suggérée)

---

## 🎯 À propos du projet

**SKEMA Housing — At Home Worldwide** est la plateforme officielle de logement étudiant SKEMA. Elle propose deux services :

- 🏢 **Logements en résidence vérifiés** — studios et résidences partenaires, dossier digitalisé, garantie locative incluse.
- 👨‍👩‍👧 **Familles d'accueil sélectionnées** — immersion culturelle, adaptation aux régimes alimentaires (halal, casher, végétarien, sans gluten, etc.) et allergies.

**Phrase d'accroche :** *"At Home Worldwide"*

**Promesse :** trouver un logement validé SKEMA en moins de 20 jours, partout dans le monde.

---

## 👥 L'équipe ambassadrice

| Membre | Rôle |
|---|---|
| **Noémie RAFFAT** | Chef de projet & Coordinatrice générale |
| **Julia NUNES** | Responsable Partenariats & Business |
| **Séraphine GNEKOU** | Responsable Digital & Plateforme |
| **Debora CARDACI** | Responsable Expérience étudiante & Communication |
| **Zahira ABOURYAK** | Responsable Finance & Juridique |

---

## 🎨 Charte graphique SKEMA

### Couleurs primaires

| Couleur | Hex | Usage |
|---|---|---|
| 🔴 Rouge SKEMA clair | `#e7433c` | Gradient début |
| 🔴 Rouge SKEMA foncé | `#bf0030` | Gradient fin, CTA |
| ⚫ Noir | `#252525` | Texte, header |
| ⚪ Blanc | `#ffffff` | Fond principal |
| 🟫 Beige marque | `#f1ece1` | Sections beige fort |
| 🟫 Beige clair | `#fbfaf6` | Sections beige doux |

### Gradient rouge officiel
```css
background: radial-gradient(circle at 0% 0%, #e7433c, #bf0030);
```

### Couleurs des programmes (utilisées dans les avatars témoignages/équipe)

| Programme | Gradient |
|---|---|
| Global BBA | `radial-gradient(circle at 0% 0%, #ec7404, #e8a139)` |
| PGE | `linear-gradient(90deg, #e20074, #d3455a)` |
| MSc | `linear-gradient(135deg, #6d1f80, #933569)` |
| MS® | `linear-gradient(135deg, #371253, #70b5a3)` |
| Executive | `linear-gradient(90deg, #00a5c4, #225674)` |
| Doctoraux | `linear-gradient(180deg, #0e1655, #3a3877)` |
| IA | `linear-gradient(90deg, #f7f410, #a2ccce, #006a79)` |
| Transitions | `linear-gradient(90deg, #171c3f, #03425a, #4da7a9)` |
| Esdhem | `linear-gradient(90deg, #e75012, #e42d33)` |

### Typographie

- **Police titres :** Playfair Display (serif, élégance institutionnelle)
- **Police corps :** Inter (sans-serif, lisibilité moderne)

---

## 🗂️ Architecture du site

```
Projet_ECOM/
│
├── index.html                  → Accueil "At Home Worldwide"
├── residences.html             → Catalogue logements résidence
├── familles.html               → Catalogue familles d'accueil
├── formulaire-residence.html   → Formulaire 4 étapes (logement)
├── formulaire-famille.html     → Formulaire 5 étapes (famille + allergies)
├── confirmation.html           → Confirmation envoi dossier
├── temoignages.html            → Avis étudiants
├── faq.html                    → FAQ avec recherche
├── equipe.html                 → Ambassadeurs SKEMA Housing
├── apropos.html                → Mission, valeurs, chiffres
│
├── css/
│   ├── variables.css           → Charte graphique SKEMA (variables CSS)
│   ├── reset.css               → Reset + accessibilité
│   ├── global.css              → Header, footer, boutons, layout
│   ├── components.css          → Cartes, formulaires, badges
│   └── pages.css               → Styles spécifiques par page
│
├── js/
│   ├── data.js                 → Données : logements, familles, équipe, témoignages, FAQ
│   ├── translations.js         → Système i18n FR/EN
│   ├── main.js                 → Header, menu, animations, utils
│   └── formulaire.js           → Logique formulaires multi-étapes
│
├── assets/
│   ├── images/                 → (vide — placeholders emoji utilisés)
│   ├── icons/                  → (vide)
│   └── logo/                   → (vide)
│
└── README.md                   → Ce fichier
```

**Total : 10 pages HTML + 5 CSS + 4 JS = 19 fichiers de code**

---

## 🛠️ Stack technique

- **HTML5** sémantique avec accessibilité (skip-link, ARIA, focus visible)
- **CSS3** avec variables CSS pour la charte SKEMA (pas de framework)
- **JavaScript vanilla** (pas de React, pas de bundler)
- **Polices Google Fonts** : Inter + Playfair Display
- **Stockage localStorage** : brouillon formulaire + langue préférée
- **Architecture i18n prête** pour bascule FR ↔ EN

---

## 🚀 Installation locale

Aucune installation requise. Le site fonctionne 100% statique.

```bash
# 1. Naviguer dans le dossier
cd C:\Users\seraphine.gnekou\Downloads\Projet_ECOM

# 2. Ouvrir index.html dans le navigateur
# Double-clic sur index.html
```

**OU**, pour un mini-serveur local (optionnel) :

```bash
# Avec Python (si installé)
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

---

## 🌐 Déploiement GitHub Pages

### Étape 1 — Créer le repository GitHub

```bash
# Initialiser git
cd C:\Users\seraphine.gnekou\Downloads\Projet_ECOM
git init
git add .
git commit -m "Initial commit - SKEMA Housing platform"

# Créer le repo sur GitHub (via interface ou CLI)
# Puis le lier
git branch -M main
git remote add origin https://github.com/[VOTRE-USERNAME]/skema-housing.git
git push -u origin main
```

### Étape 2 — Activer GitHub Pages

1. Aller dans **Settings** > **Pages** du repository
2. Source : **Deploy from a branch**
3. Branch : **main** / **/ (root)**
4. Cliquer **Save**

### Étape 3 — Accéder au site

URL : `https://[VOTRE-USERNAME].github.io/skema-housing/`

Le déploiement prend 1-2 minutes après le push.

---

## 💰 Business model

### Sources de revenus

| Source | Détail | Tarif |
|---|---|---|
| **Frais de dossier logement** | Mise en relation + dossier digital | **150 € unique** (vs 250 € marché) |
| **Mise en relation famille** | Matching + suivi 15 jours | **80 € unique** (vs 130 € marché) |
| **Commission partenaires** | Versée par les résidences partenaires | ~5-10 % du loyer 1er mois |
| **Abonnement Premium SKEMA** | Garantie locative + support 24/7 | À définir |

### Avantages compétitifs

1. **Exclusivité SKEMA** : accès prioritaire aux logements négociés
2. **Garantie locative incluse** : levier majeur pour étudiants internationaux
3. **Support multilingue** : démultiplie la portée internationale
4. **Tarifs étudiants** : 40% moins cher que le marché
5. **100% digital** : pas de paperasse, traitement rapide

---

## 🧠 Biais cognitifs & UX appliqués

La plateforme intègre **7 biais cognitifs majeurs** issus de l'économie comportementale pour optimiser le parcours utilisateur :

| Biais | Mise en œuvre concrète | Page(s) |
|---|---|---|
| **Preuve sociale** | "2 847 étudiants logés", témoignages, notes/avis | Accueil, Témoignages |
| **Rareté** | "Plus que 47 places", "12 dossiers restants" | Accueil, Résidences, Familles |
| **Aversion à la perte** | "Ne ratez pas votre logement", urgency banners | Accueil, Produits |
| **Ancrage** | Prix marché barré (250 €) vs prix SKEMA (150 €) | Tous les produits |
| **Heuristique de disponibilité** | Badges "Top noté" 🏆 sur les meilleurs | Listings |
| **Charge cognitive réduite** | Formulaire multi-étapes (4-5 steps) avec barre de progression | Formulaires |
| **Effet de halo** | Témoignages vidéo, notes globales 4,7/5 mises en avant | Témoignages |

---

## ✅ Critères Bastien & Scapin

Les **8 critères ergonomiques** de Bastien & Scapin sont respectés :

| Critère | Application |
|---|---|
| **1. Guidage** | Breadcrumbs, barre de progression formulaires, labels clairs, étoiles notation |
| **2. Charge de travail** | Formulaires multi-étapes, sauvegarde brouillon auto, choix par cards cliquables |
| **3. Contrôle explicite** | Boutons "Précédent/Suivant", confirmation avant envoi, récap final |
| **4. Adaptabilité** | Bascule FR/EN, responsive mobile, filtres et tri |
| **5. Gestion des erreurs** | Validation en temps réel, messages d'erreur clairs, alertes contextuelles |
| **6. Homogénéité** | Header/footer identiques, palette unique, composants réutilisables |
| **7. Signifiance des codes** | "Démarrer mon dossier" > "Soumettre", emojis explicites, icônes universelles |
| **8. Compatibilité** | Lisible mobile/desktop, compatible tous navigateurs, accessible (WCAG AA) |

---

## ⭐ Système de notation

### Pour les logements (note sur 5)

Calculée à partir de :
- Qualité du logement (état, équipements)
- Rapport qualité/prix
- Distance au campus
- Réactivité du propriétaire/gestionnaire
- Avis des anciens étudiants SKEMA

### Pour les familles d'accueil (note sur 5)

Calculée à partir de :
- Chaleur humaine et accueil
- Communication / disponibilité
- Qualité du logement proposé
- Respect des préférences (allergies, régime)
- Expérience d'intégration culturelle

### Affichage visuel

- ⭐⭐⭐⭐⭐ + note chiffrée (ex : `4.8/5`)
- Nombre d'avis entre parenthèses (ex : `(127 avis)`)
- **Badge "Top noté"** 🏆 sur les 3 premiers
- **Tri par défaut** : meilleures notes en premier

---

## 📓 Documentation Notion suggérée

Voici la structure de pages à créer dans Notion pour documenter le projet :

### Page 1 — 🏠 Vue d'ensemble
- Description du projet
- Promesse et phrase d'accroche
- Équipe ambassadrice (5 cartes)
- Lien GitHub + lien démo

### Page 2 — 🎨 Charte graphique
- Couleurs primaires et secondaires
- Gradients programmes SKEMA
- Typographie (Inter + Playfair Display)
- Logo et déclinaisons

### Page 3 — 📐 Architecture du site
- Arborescence (10 pages)
- Diagramme du parcours utilisateur
- Wireframes (si disponibles)

### Page 4 — 💼 Business model
- 2 produits détaillés
- Tarification vs marché
- Sources de revenus
- Projection financière

### Page 5 — 🧠 Analyse UX
- Biais cognitifs appliqués (avec captures)
- Critères Bastien & Scapin respectés
- Personas étudiants
- Parcours utilisateur

### Page 6 — 🚀 Déploiement
- Instructions GitHub Pages
- URL de production
- Suivi des évolutions
- Backlog d'améliorations

### Page 7 — 📊 KPI et suivi
- Nombre de dossiers
- Taux de conversion
- NPS étudiants
- Roadmap fonctionnelle

---

## 📞 Contact

**Équipe SKEMA Housing — Promo 2025**

Site : [skema-housing.github.io](https://skema-housing.github.io)
Email : contact@skema-housing.fr

---

## 📄 Licence

Projet académique réalisé dans le cadre du cours **E-Business** à **SKEMA Business School**.
© 2025 SKEMA Housing — Tous droits réservés.

---

> **Note pour le développement futur** : pour ajouter une page, dupliquer un fichier HTML existant (ex : `apropos.html`), modifier le contenu et ajouter le lien dans le menu de toutes les pages. Le footer et le header se trouvent en haut/bas de chaque page HTML — les modifier partout pour rester homogène.
