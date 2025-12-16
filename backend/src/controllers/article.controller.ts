import { Request, Response } from "express";
import { ArticleService } from "../services/article.service";

const service = new ArticleService();

export class ArticleController {
  async create(req: Request, res: Response) {
    try {
      const result = await service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la création de l'article", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const articles = await service.getAll();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des articles", error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const article = await service.getById(req.params.id);
      if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération de l'article", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const result = await service.update(req.params.id, req.body);
      if (!result) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour de l'article", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const result = await service.delete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json({ message: "Article supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression de l'article", error });
    }
  }
}