import initknex from "knex";
import configuration from "../knexfile.js";
import {
  filterShopsByItem,
  getShopItems,
} from "../utils/shop-filtering-helpers.js";

const knex = initknex(configuration);

export const getAllShops = async (req, res) => {
  const { is_active, items, match_type, city } = req.query;

  if (is_active === "0" && items) {
    return res.status(400).json({
      message:
        "Inactive (nominated) shops do not have items assigned to them. The 'items' query parameter can only be used for active shops.",
    });
  }

  try {
    const shopsList = await knex("shops");
    let queriedShopsList = [];

    for (let shop of shopsList) {
      if (shop.is_active === Number(is_active)) {
        queriedShopsList.push(shop);
      }
    }

    if (!is_active) {
      queriedShopsList = [...shopsList];
    }

    for (let shop of queriedShopsList) {
      shop = await getShopItems(shop);
    }

    if (city) {
      queriedShopsList = queriedShopsList.filter(
        (shop) => shop.city.toLowerCase() === city.toLowerCase()
      );
    }

    if (!items && !match_type) {
      return res.status(200).json(queriedShopsList);
    }

    if (items && !match_type) {
      return res
        .status(400)
        .json(
          "Item queries must include a 'match_type' parameter of eiter 'exact' or 'partial'."
        );
    }

    const filteredShops = filterShopsByItem(
      items,
      queriedShopsList,
      match_type
    );

    res.status(200).json(filteredShops);
  } catch (error) {
    res.status(500).json({
      message: `Error encountered whilst querying the database: ${error}`,
    });
  }
};

export const getIndividualShop = async (req, res) => {
  const id = req.params.id;

  try {
    const shop = await knex("shops").where({ id: id }).first();

    if (!shop) {
      return res.status(404).json({ message: "No shop found with that ID." });
    }

    const shopWithItems = await getShopItems(shop);

    res.status(200).json(shopWithItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error whilst fetching shop from server. ${error}` });
  }
};

export const updateShopDetails = async (req, res) => {
  const { name, street_number, street_name, city, postcode, is_active } =
    req.body;
  const id = req.params.id;

  try {
    const shop = await knex("shops").where({ id: id }).first();

    if (!shop) {
      return res.status(404).json({ message: "No shop found with that ID." });
    }

    const updatedShop = {
      name: name,
      street_number: street_number,
      street_name: street_name,
      city: city,
      postcode: postcode,
      is_active: is_active,
    };

    await knex("shops").where({ id: id }).update(updatedShop);
    const shopWithItems = await getShopItems(shop);

    res.status(200).json(shopWithItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error encountered while updating shop. ${error}` });
  }
};

export const deleteShop = async (req, res) => {
  const id = req.params.id;

  try {
    const selectedShop = await knex("shops").where({ id: id }).first();

    if (!selectedShop) {
      return res.status(404).json({ message: `No shop found with that ID.` });
    }

    await knex("shops").where({ id: id }).del();
    return res.status(204).end();
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error encountered while deleting shop. ${error}` });
  }
};

export const addShop = async (req, res) => {
  const { name, street_number, street_name, city, postcode, coordinates } =
    req.body;

  const newShop = {
    name: name,
    street_number: street_number,
    street_name: street_name,
    city: city,
    coordinates: coordinates,
    postcode: postcode,
    is_active: false,
  };

  try {
    const newShopId = await knex("shops").insert(newShop).returning("id");
    newShop.id = newShopId[0];
    res.status(201).json(newShop);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error encountered while adding new shop. ${error}` });
  }
};

export const addShopsItems = async (req, res) => {
  const { shops_id, items_id } = req.body;

  if (!shops_id || !items_id) {
    res.status(400).json({
      message: `A shop and item ID must both be included to add a shop item.`,
    });
  }

  const selectedShop = await knex("shops").where({ id: shops_id }).first();

  if (!selectedShop) {
    return res
      .status(404)
      .json({ message: `No shop found with ID of ${shops_id}.` });
  }

  const selectedItem = await knex("items").where({ id: items_id }).first();

  if (!selectedItem) {
    return res
      .status(404)
      .json({ message: `No item found with ID of ${items_id}.` });
  }

  const shopItem = {
    shops_id: shops_id,
    items_id: items_id,
  };

  try {
    await knex("shops_items").insert(shopItem);
    res.status(201).json(shopItem);
  } catch (error) {
    res.status(500).json({
      message: `Error encountered while adding items to shop. ${error}`,
    });
  }
};

export const checkShopExists = async (req, res) => {
  const { streetnumber, streetname, city } = req.headers;

  try {
    const shop = await knex("shops")
      .where({
        street_number: streetnumber,
        street_name: streetname,
        city: city,
      })
      .first();

    if (!shop) {
      res.status(200).json({ message: "New shop enabled." });
      return;
    }

    res.status(200).json({ message: "Shop already exists." });
  } catch (error) {
    res.status(404).json({
      message:
        "An issue was encountered whilst querying the database for the shop.",
    });
  }
};
