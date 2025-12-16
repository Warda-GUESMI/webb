import { ObjectId } from "mongodb";

export interface ICommande {
  _id?: ObjectId;
  date: string;
  total: number;
}

export const COMMANDE_COLLECTION = "commandes";