// routes/auth.js
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");

// Route pour l'enregistrement des utilisateurs
router.post("/register", register);  // POST /api/auth/register

// Route pour la connexion des utilisateurs
router.post("/login", login);  // POST /api/auth/login

module.exports = router;

