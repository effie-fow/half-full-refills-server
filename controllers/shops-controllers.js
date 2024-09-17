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
  const {
    name,
    street_number,
    street_name,
    city,
    postcode,
    lat_long,
    is_active,
  } = req.body;
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
      lat_long: lat_long,
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
  const { name, street_number, street_name, city, postcode, lat_long } =
    req.body;

  const newShop = {
    name: name,
    street_number: street_number,
    street_name: street_name,
    city: city,
    postcode: postcode,
    lat_long: lat_long,
    is_active: false,
  };

  try {
    await knex("shops").insert(newShop);
    res.status(201).json(newShop);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error encountered while adding new shop. ${error}` });
  }
};
