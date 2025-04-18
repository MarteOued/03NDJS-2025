require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

// Connexion DB
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

