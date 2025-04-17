const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.get("/me", auth, userController.getMe);
router.get("/users", auth, userController.getAllUsers);
router.delete("/users/:id", auth, userController.deleteUser);

module.exports = router;

