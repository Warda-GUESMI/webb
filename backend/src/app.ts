import express from "express";
import cors from "cors";
import articleRoutes from "./routes/article.route";
import commandeRoutes from "./routes/commande.route";
import { connectDB } from "./dal/database";

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/articles", articleRoutes);
app.use("/api/commandes", commandeRoutes);

export default app;