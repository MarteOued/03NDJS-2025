// routes/user.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.get("/me", auth, userController.getMe);
router.get("/", auth, userController.getAllUsers);          
router.delete("/:id", auth, userController.deleteUser);     

module.exports = router;

