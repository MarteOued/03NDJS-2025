import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.js";

// Charger les variables d'environnement (.env)
dotenv.config();

// Connexion à la base de données
connectDB();

// Initialiser l'application
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes); // toutes les routes de auth sous /api/v1/auth

// Route de test
app.get("/", (req, res) => {
  res.send("API Express avec MongoDB et JWT !");
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});


