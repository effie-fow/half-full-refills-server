import express from "express";
import cors from "cors";
import shopsRoutes from "./routes/shops-routes.js";
import nominationsRoutes from "./routes/nominations-routes.js";
import itemsRoutes from "./routes/items-routes.js";
import usersRoutes from "./routes/users-routes.js";
import { apiKeyValidation } from "./middleware/apiKeyValidation.js";
import "dotenv/config";

const app = express();
const { PORT, FRONTEND_URL } = process.env;

app.use(cors({ origin: FRONTEND_URL }));

app.use(express.json());
app.use(apiKeyValidation);

app.use("/shops", shopsRoutes);
app.use("/nominations/shops", nominationsRoutes);
app.use("/items", itemsRoutes);
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`The app is listening on ${PORT}`);
});
