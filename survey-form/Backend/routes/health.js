import express from "express";
import { vegetarian, vegan, non_vegetarian } from "../controllers/health.js";

const router = express.Router();

router.get("/vegetarian", vegetarian);
router.get("/vegan", vegan);
router.get("/non_vegetarian", non_vegetarian);

export default router;
