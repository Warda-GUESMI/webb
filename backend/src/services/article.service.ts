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

  update(id: string, data: Partial<IArticle>) {
    return this.collection().findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after' }
    );
  }

  delete(id: string) {
    return this.collection().deleteOne({ _id: new ObjectId(id) });
  }
}