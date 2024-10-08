import initknex from "knex";
import configuration from "../knexfile.js";

const knex = initknex(configuration);

export const getShopNominations = async (req, res) => {
  const id = req.params.id;

  try {
    const selectedShop = await knex("shops").where({ id: id }).first();

    if (!selectedShop) {
      return res.status(404).json({ message: `No shop found with that ID.` });
    }

    const nominations = await knex("nominations")
      .where({ shops_id: id })
      .select("id", "shops_id", "users_id");

    if (!nominations.length) {
      res
        .status(404)
        .json({ message: "There are no nominations for this shop." });
    }

    res.status(200).json(nominations);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while fetching nomination. ${error}` });
  }
};

export const addShopNomination = async (req, res) => {
  const id = req.params.id;
  const { users_id, items } = req.body;

  const nominationsShopData = {
    shops_id: id,
    users_id: users_id,
  };

  try {
    const selectedShop = await knex("shops").where({ id: id }).first();

    if (!selectedShop) {
      return res.status(404).json({ message: `No shop found with that ID.` });
    }

    await knex("nominations").insert(nominationsShopData);

    const nomination = await knex("nominations").orderBy("id", "desc").first();

    items.forEach(async (item) => {
      const itemId = await knex("items")
        .where({ name: item })
        .select("id")
        .first();

      const newNomination = {
        nominations_id: nomination.id,
        items_id: itemId.id,
      };

      await knex("nominations_items").insert(newNomination);
    });

    const shopName = await knex("shops")
      .where({ id: id })
      .select("name")
      .first();

    const nominationRecord = {
      shopName: shopName.name,
      nominatedItems: items,
    };

    res.status(201).json(nominationRecord);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while adding nomination. ${error}` });
  }
};

export const deleteNomination = async (req, res) => {
  const { nominationId } = req.params;

  if (!nominationId) {
    return res
      .status(400)
      .json({ message: `A nomination ID is required to remove a nomination.` });
  }

  try {
    const selectedNomination = await knex("nominations")
      .where({
        id: nominationId,
      })
      .first();

    if (!selectedNomination) {
      return res
        .status(404)
        .json({ message: `No nomination found with that ID.` });
    }

    await knex("nominations").where({ id: nominationId }).del();

    return res.status(204).end();
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while deleting nomination. ${error}` });
  }
};

export const getNominationsItems = async (req, res) => {
  const { nominationId } = req.params;

  try {
    const nominationsItemsData = await knex("nominations_items").where({
      nominations_id: nominationId,
    });

    if (!nominationsItemsData) {
      return res
        .status(404)
        .json({ message: `No nominations found with that ID.` });
    }

    if (!nominationsItemsData.length) {
      res.status(404).json({
        message: "There are no items associated with this nominations.",
      });
    }

    res.status(200).json(nominationsItemsData);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while fetching nomination details. ${error}` });
  }
};
