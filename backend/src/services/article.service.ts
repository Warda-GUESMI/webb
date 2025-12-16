import { getDB } from "../dal/database";
import { IArticle, ARTICLE_COLLECTION } from "../models/article.model";
import { ObjectId } from "mongodb";

export class ArticleService {
  private collection() {
    return getDB().collection<IArticle>(ARTICLE_COLLECTION);
  }

  create(data: IArticle) {
    return this.collection().insertOne(data);
  }

  getAll() {
    return this.collection().find().toArray();
  }

  getById(id: string) {
    return this.collection().findOne({ _id: new ObjectId(id) });
  }
}