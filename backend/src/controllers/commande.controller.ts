import { Request, Response } from "express";
import { CommandeService } from "../services/commande.service";

const service = new CommandeService();

export class CommandeController {
  async create(req: Request, res: Response) {
    try {
      const result = await service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la création de la commande", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const commandes = await service.getAll();
      res.json(commandes);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des commandes", error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const commande = await service.getById(req.params.id);
      if (!commande) {
        return res.status(404).json({ message: "Commande non trouvée" });
      }
      res.json(commande);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération de la commande", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const result = await service.update(req.params.id, req.body);
      if (!result) {
        return res.status(404).json({ message: "Commande non trouvée" });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour de la commande", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const result = await service.delete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Commande non trouvée" });
      }
      res.json({ message: "Commande supprimée avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression de la commande", error });
    }
  }
}