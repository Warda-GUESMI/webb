import { Router } from "express";
import { ArticleController } from "../controllers/article.controller";

const router = Router();
const c = new ArticleController();

router.post("/", c.create);
router.get("/", c.getAll);
router.get("/:id", c.getById);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

export default router;