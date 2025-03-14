import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = Router();

router.post("/signup", registerController);

router.post("/login", loginController);

export default router;
