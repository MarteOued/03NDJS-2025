import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true, // corrigé "require" → "required"
    unique: true,
  },
  password: {
    type: String,
    required: true, // optionnel mais recommandé
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now, // corrigé "dafault" → "default"
  },
});

export const User = model("User", userSchema);

