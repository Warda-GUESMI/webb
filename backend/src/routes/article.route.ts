import { Router } from "express";
import { ArticleController } from "../controllers/article.controller";

const router = Router();
const c = new ArticleController();

router.post("/", c.create);
router.get("/", c.getAll);

export default router;