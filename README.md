# 🍽️ Application React — Gestion des Plats

## 📖 Description

Cette application web développée avec **React.js** permet aux utilisateurs de consulter une liste de plats, rechercher et filtrer des résultats, naviguer entre plusieurs pages, et gérer une authentification connectée à une API Laravel.

Le projet est structuré de manière progressive afin de maîtriser les concepts fondamentaux du développement frontend moderne.

---

## 🚀 Fonctionnalités principales

### 🧩 Composants & Props

* Affichage d’une carte de plat
* Informations affichées :

  * Nom du plat
  * Prix
  * Disponibilité (badge)
* Données statiques (mockées)

---

### 📋 Liste des plats

* Affichage de plusieurs plats
* Réutilisation du composant carte
* Minimum 3 plats

---

### 🔍 Recherche & Filtrage

* Champ de recherche dynamique
* Filtrage en temps réel
* Recherche insensible à la casse
* Message affiché si aucun résultat :

  > *Aucun plat trouvé*

---

### 🌐 Navigation (SPA)

* Navigation sans rechargement (React Router)

#### 📍 Routes :

* `/` → Accueil
* `/plates` → Liste des plats
* `/plates/:id` → Détail d’un plat
* `/login` → Connexion
* `/register` → Inscription
* `/profile` → Profil (protégé)

---

### 📄 Détail d’un plat

* Accès via clic sur une carte
* Chargement dynamique selon l’ID

---

### 🧭 Navbar

* Visible sur toutes les pages
* Lien actif mis en évidence

---

### 📡 Intégration API (Laravel)

#### 🔹 Plats

* `GET /api/plates`
* Affichage avec :

  * Loading spinner
  * Gestion des erreurs

#### 🔹 Détail

* `GET /api/plates/{id}`

#### 🔹 Catégories

* `GET /api/categories`
* Affichage sous forme de filtre ou liste

---

### 🔐 Authentification (Context API)

#### ✅ Connexion

* `POST /api/login`
* Sauvegarde du token
* Redirection vers `/plates`
* Stockage des données utilisateur

#### 💾 Persistance

* Token stocké dans `localStorage`
* Récupération automatique au démarrage
* Gestion globale avec Context API

#### 👤 Profil

* Route protégée (`/profile`)
* Redirection vers `/login` si non connecté

#### 🚪 Déconnexion

* `POST /api/logout`
* Suppression du token
* Réinitialisation du user
* Redirection automatique

---

## 🛠️ Technologies utilisées

* ⚛️ React.js
* 🔁 React Router
* 🌐 Axios
* 🧠 Context API
* 🖥️ Laravel (API backend)
* 🎨 CSS / Tailwind (optionnel)

---

## 📁 Structure du projet

```bash
src/
│── components/
│   ├── PlateCard.jsx
│   ├── Navbar.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Plates.jsx
│   ├── PlateDetail.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│
│── context/
│   └── AuthContext.jsx
│
│── services/
│   └── api.js
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation

```bash
# Cloner le projet
git clone https://github.com/username/project.git

# Accéder au dossier
cd project

# Installer les dépendances
npm install

# Lancer l'application
npm run dev
```

---

## 🔧 Configuration

### 🔹 Backend (Laravel)

* Lancer le serveur :

```bash
php artisan serve
```

* URL API :

```
http://localhost:8000/api
```

---

### 🔹 CORS (important)

Configurer CORS dans Laravel (`config/cors.php`) :

```php
'allowed_origins' => ['*'],
'allowed_headers' => ['*'],
'allowed_methods' => ['*'],
```

---

## ⚠️ Gestion des erreurs

* Affichage d’un message si l’API échoue
* Gestion des états :

  * Loading
  * Error
  * Data

---

## 🎯 Objectifs pédagogiques

* Comprendre React (components, props)
* Gérer le state avec `useState`
* Implémenter le routing
* Consommer une API REST
* Gérer l’authentification
* Utiliser Context API
* Optimiser l’expérience utilisateur

---

## 📸 Screenshots (optionnel)

Ajoutez ici des captures d’écran de votre application.

---

## 📌 Améliorations possibles

* Ajout d’un panier 🛒
* Gestion des rôles (admin/user)
* Pagination
* Dark mode 🌙
* Tests unitaires

---

## 👨‍💻 Auteur

Projet réalisé dans le cadre d’une formation en développement web Full Stack.

---

## 📄 Licence

Ce projet est open-source et libre d’utilisation.
