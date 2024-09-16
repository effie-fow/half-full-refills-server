import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const { PORT, FRONTEND_URL } = process.env;

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`The app is listening on ${PORT}`);
});
