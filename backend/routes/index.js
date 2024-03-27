import { Router } from "express";
import auth from "./auth.js";
import course from "./course.js";

const router = Router();

router.use('/auth',auth)
router.use('/course',course)

export default router;