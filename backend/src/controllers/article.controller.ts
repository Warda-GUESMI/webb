import { Request, Response } from "express";
import { ArticleService } from "../services/article.service";

const service = new ArticleService();

export class ArticleController {
  async create(req: Request, res: Response) {
    const result = await service.create(req.body);
    res.json(result);
  }

  async getAll(req: Request, res: Response) {
    res.json(await service.getAll());
  }
}