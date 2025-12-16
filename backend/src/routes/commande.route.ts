import { Router } from "express";
import { CommandeController } from "../controllers/commande.controller";

const router = Router();
const c = new CommandeController();

router.post("/", c.create);
router.get("/", c.getAll);
router.get("/:id", c.getById);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

export default router;