import express from "express";
import cors from "cors";
import articleRoutes from "./routes/article.route";
import commandeRoutes from "./routes/commande.route";
import { connectDB } from "./dal/database";

const app = express();

// Connexion à MongoDB
connectDB();

// CORS - DOIT être avant les routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parser JSON
app.use(express.json());

// Route de test
app.get('/test', (req, res) => {
  res.json({ message: 'Backend fonctionne !' });
});

// Routes API
app.use("/api/articles", articleRoutes);
app.use("/api/commandes", commandeRoutes);

export default app;