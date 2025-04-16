Résumé – Express.js, API REST, MongoDB, Auth

1. Express.js

    Framework de Node.js pour créer facilement des API ou applications backend.

    Il permet de gérer les routes, les requêtes, les réponses et les middlewares.

Ce que je peux faire avec Express.js :

    Créer un serveur web.

    Gérer des routes (ex. : GET /produits, POST /login, etc.).

    Utiliser des middlewares pour filtrer ou modifier les requêtes.

    Lire les données entrantes (JSON, formulaires, etc.).

    Se connecter à des bases de données comme MongoDB.

    Créer des APIs CRUD très rapidement.
    
   2. Middleware functions
Les middlewares sont des fonctions qui ont accès à la requête (req), la réponse (res) et la fonction suivante (next) dans le cycle de traitement d'une requête.
Ils servent à :

    Modifier la requête ou la réponse.

    Gérer l’authentification.

    Journaliser les requêtes.

    Gérer les erreurs.
    
    3. Création d’un serveur express.js server
 Un serveur Express est une application qui écoute sur un port et répond aux requêtes HTTP comme GET ou POST.
C’est la base de toute API avec Node.js.

 On a utilisé express() pour créer un serveur.

 Le serveur écoute sur un port (ex : 5000).

 On a ajouté des routes pour répondre aux requêtes du client. 
    
    4. Définition des routes API avec GET, POST, PUT, DELETE

Chaque méthode HTTP a un rôle :

    GET : lire des données

    POST : créer une donnée

    PUT : modifier une donnée existante

    DELETE : supprimer une donnée
    
Une API CRUD permet de :

    Créer

    Read (lire)

    Update (modifier)

    Delete (supprimer)

Avec une version en mémoire, les données sont stockées dans une variable (pas encore en base de données).

5. Variables d’environnement (.env)

Ce sont des fichiers qui gardent les infos sensibles (comme mots de passe ou clés secrètes).
On y stocke par exemple :

    Le port du serveur

    L’URL MongoDB

    La clé secrète pour les tokens

Comme ça, on ne met rien de confidentiel dans le code visible.

 DELETE → Supprimer une ressource
 
Postman est un outil pour :

    Tester chaque route (GET, POST…)

    Envoyer des données (body, headers…)

    Voir les réponses C’est très pratique pour vérifier que l'API fonctionne sans devoir créer un site frontend.
 
 MongoDB est une base de données NoSQL.
On s’y connecte pour sauvegarder les vraies données (utilisateurs, produits, tâches…).
On utilise souvent un outil appelé Mongoose pour gérer les modèles (les "tables" de MongoDB).

B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
 
