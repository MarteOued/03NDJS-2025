require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);     
app.use("/api/users", userRoutes);    

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

