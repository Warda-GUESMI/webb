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
}