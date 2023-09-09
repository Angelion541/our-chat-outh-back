const express = require("express");
const { authController } = require("../../controllers");
// const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/signup", ctrlWrapper(authController.signup));

module.exports = authRouter;
