import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5201;

app.listen(PORT, () => console.log("Serveur démarré sur " + PORT));
const cors = require('cors');
app.use(cors());
