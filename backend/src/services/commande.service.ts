import { getDB } from "../dal/database";
import { ICommande, COMMANDE_COLLECTION } from "../models/commande.model";
import { ObjectId } from "mongodb";

export class CommandeService {
  private collection() {
    return getDB().collection<ICommande>(COMMANDE_COLLECTION);
  }

  create(data: ICommande) {
    return this.collection().insertOne(data);
  }

  getAll() {
    return this.collection().find().toArray();
  }

  getById(id: string) {
    return this.collection().findOne({ _id: new ObjectId(id) });
  }

  update(id: string, data: Partial<ICommande>) {
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