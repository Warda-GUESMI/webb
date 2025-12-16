import { MongoClient, Db } from "mongodb";

const uri = process.env.DB_URI || "mongodb://localhost:27017";
export const client = new MongoClient(uri);

let db: Db;

export const connectDB = async () => {
  await client.connect();
  db = client.db("erp");
  console.log("MongoDB connecté");
};

export const getDB = () => db;