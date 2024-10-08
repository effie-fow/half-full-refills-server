import "dotenv/config";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export default {
  client: "mysql2",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    charset: "utf8",
  },
};
