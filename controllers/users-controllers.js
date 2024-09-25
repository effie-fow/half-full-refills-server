import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import initknex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";

const knex = initknex(configuration);
const { JWT_SECRET } = process.env;
const SALT_ROUNDS = 8;

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, SALT_ROUNDS, async (err, hashedPassword) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Couldn't encrypt supplied password." });
    }

    try {
      await knex("users").insert({
        name: name,
        email: email,
        password: hashedPassword,
      });

      res.json({ success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Couldn't create a new user - ${error.message}` });
    }
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users").where({ email: email }).first();

    bcrypt.compare(password, user.password, function (_, success) {
      if (!success) {
        return res.status(403).json({
          message: "The username/password combination provided is incorrect",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          sub: user.email,
        },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.status(200).json({ authToken: token });
    });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.token.id }).first();

    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch user profile." });
  }
};
