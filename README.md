# SKEMA Housing

Plateforme de logement étudiant conçue dans le cadre du cours E-Business à SKEMA Business School. Elle met en relation des étudiants avec des résidences partenaires ou des familles d'accueil, selon leurs besoins et leur profil.

## À propos du projet

SKEMA Housing propose deux types de services distincts. Le premier concerne les logements en résidence, avec un processus de candidature entièrement numérisé. Le second concerne les familles d'accueil, avec une attention particulière portée aux préférences alimentaires et aux besoins culturels de chaque étudiant.

La plateforme vise à simplifier et accélérer la recherche de logement pour les étudiants SKEMA, notamment ceux en mobilité internationale.

## Architecture du site

Le site est composé de dix pages HTML indépendantes, organisées de la manière suivante :

```
Projet_ECOM/
│
├── index.html                  
├── residences.html             
├── familles.html               
├── formulaire-residence.html   
├── formulaire-famille.html     
├── confirmation.html           
├── temoignages.html            
├── faq.html                    
├── equipe.html                 
├── apropos.html                
│
├── css/
│   ├── variables.css           
│   ├── reset.css               
│   ├── global.css              
│   ├── components.css          
│   └── pages.css               
│
├── js/
│   ├── data.js                 
│   ├── translations.js         
│   ├── main.js                 
│   └── formulaire.js           
│
└── assets/
    └── images/
```

## Stack technique

Le site repose exclusivement sur des technologies web fondamentales, sans recours à un framework ou à un outil de compilation. HTML5 semantique, CSS3 avec variables natives et JavaScript vanilla constituent l'intégralité de la base de code. Les polices utilisées proviennent de Google Fonts. Le site intègre un système de traduction français et anglais ainsi qu'une sauvegarde automatique des formulaires via le localStorage du navigateur.

## Installation locale

Aucune installation n'est requise. Il suffit d'ouvrir le fichier `index.html` directement dans un navigateur. Pour disposer d'un environnement de développement local plus proche d'un serveur réel, il est possible de lancer la commande suivante si Python est installé sur la machine :

```bash
python -m http.server 8000
```

Le site est ensuite accessible à l'adresse `http://localhost:8000`.

## Déploiement

Le site est déployé via GitHub Pages à partir de la branche principale. Il est accessible publiquement à l'adresse suivante :

`https://zita0123.github.io/SKEMA-HOUSING/`

Tout nouveau push sur la branche `main` déclenche automatiquement une mise à jour du site en ligne, avec un délai de déploiement de une à deux minutes.

## Licence

Projet académique réalisé dans le cadre du cours E-Business à SKEMA Business School. Tous droits réservés.
