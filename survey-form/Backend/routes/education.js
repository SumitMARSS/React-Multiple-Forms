import express from "express";
import { high_school, bachelors, masters , phd} from "../controllers/education.js";

const router = express.Router();

router.get("/high_school", high_school);
router.get("/bachelors", bachelors);
router.get("/masters", masters);
router.get("/phd", phd);

export default router;