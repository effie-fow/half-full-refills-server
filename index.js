import express from "express";
import cors from "cors";
import shopsRoutes from "./routes/shops-routes.js";
import nominationsRoutes from "./routes/nominations-routes.js";

import "dotenv/config";

const app = express();
const { PORT, FRONTEND_URL } = process.env;

// app.use(cors({ origin: FRONTEND_URL }));
app.use(cors());

app.use(express.json());

app.use("/shops", shopsRoutes);
app.use("/shops", nominationsRoutes);

app.listen(PORT, () => {
  console.log(`The app is listening on ${PORT}`);
});
