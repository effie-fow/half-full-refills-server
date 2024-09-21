import initknex from "knex";
import configuration from "../knexfile.js";

const knex = initknex(configuration);

export const getAllItems = async (req, res) => {
  try {
    const items = await knex("items").select("id", "name", "formatted_name");

    if (!items.length) {
      return res.status(500).json({
        message: `Error whilst fetching items. There are no items on the database.`,
      });
    }

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: `Error while fetching items. ${error}` });
  }
};
