import "dotenv/config";

const { API_KEY } = process.env;

export const apiKeyValidation = (req, res, next) => {
  const apiKey = req.query.api_key;
  if (!apiKey || apiKey !== API_KEY) {
    res.status(401).send("Unauthorized: API key is invalid or missing");
    return;
  }
  next();
};
