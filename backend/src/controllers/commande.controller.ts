import { Request, Response } from "express";
import { CommandeService } from "../services/commande.service";

const service = new CommandeService();

export class CommandeController {
  async create(req: Request, res: Response) {
    const result = await service.create(req.body);
    res.json(result);
  }

  async getAll(req: Request, res: Response) {
    res.json(await service.getAll());
  }
}