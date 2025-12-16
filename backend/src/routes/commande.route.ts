import { Router } from "express";
import { CommandeController } from "../controllers/commande.controller";

const router = Router();
const c = new CommandeController();

router.post("/", c.create);
router.get("/", c.getAll);

export default router;