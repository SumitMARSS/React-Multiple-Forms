import express from "express";
import { java, python, c } from "../controllers/technology.js";

const router = express.Router();

router.get("/java", java);
router.get("/python", python);
router.get("/c", c);

export default router;
