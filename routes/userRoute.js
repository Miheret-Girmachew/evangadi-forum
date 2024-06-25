const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddlewares");

const {
  register,
  login,
  checkUser,
  getUserById,
} = require("../controller/userController");

router.post("/register", register);

router.post("/login", login);

router.get("/check", authMiddleware, checkUser);

router.get("/:id", authMiddleware, getUserById);

module.exports = router;
