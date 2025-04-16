import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/formule1")
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Connection error:", err));

