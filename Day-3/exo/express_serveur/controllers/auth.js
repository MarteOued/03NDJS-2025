import bcrypt from "bcrypt"; // Pour hasher les mots de passe
import jwt from "jsonwebtoken"; // Pour générer les tokens JWT
import User from "../models/User.js";

// REGISTER
export async function register(req, res) {
  const { email, password, isAdmin } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "L'utilisateur existe déjà." });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer le nouvel utilisateur
    const newUser = await User.create({
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false, // par défaut false
    });

    res.status(201).json({
      success: true,
      message: "Utilisateur enregistré avec succès.",
      user: {
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        id: newUser._id,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de l'enregistrement." });
  }
}

// LOGIN
export async function login(req, res) {
  const { email, password } = req.body;

  // Vérifie que l'email et le mot de passe sont fournis
  if (!email || !password) {
    return res.status(400).json({ error: "Email ou mot de passe manquant." });
  }

  try {
    // Chercher l'utilisateur avec le mot de passe
    const theUser = await User.findOne({ email }).select("+password");
    if (!theUser) {
      return res.status(401).json({ error: "Utilisateur non trouvé." });
    }

    // Comparer les mots de passe
    const isMatch = await bcrypt.compare(password, theUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect." });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { id: theUser._id, isAdmin: theUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Connexion réussie.",
      token, // ← on envoie aussi le token
      user: {
        email: theUser.email,
        isAdmin: theUser.isAdmin,
        id: theUser._id,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la connexion." });
  }
}

