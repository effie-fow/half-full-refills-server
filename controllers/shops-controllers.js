import initknex from "knex";
import configuration from "../knexfile.js";
import { filterShopsByItem } from "../utils/shop-filtering-helpers.js";

const knex = initknex(configuration);

export const getAllShops = async (req, res) => {
  const { is_active, items, match_type } = req.query;

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
      const shopsItemsIds = await knex("shops_items").where(
        "shops_id",
        shop.id
      );

      const shopIdsList = [];

      for (let i = 0; i < shopsItemsIds.length; i++) {
        let itemId = shopsItemsIds[i].items_id;
        shopIdsList.push(itemId);
      }

      const shopsItemsAsObjects = await knex("items")
        .whereIn("id", shopIdsList)
        .select("name");

      const shopItems = shopsItemsAsObjects.map((itemObject) => {
        return itemObject.name;
      });

      shop.items = shopItems;
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
    // NEXT - NO QUERYING BY ITEMS IF THE SHOP IS NOT ACTIVE
    // THEN - PATCH / ADD / DELETE
  } catch (error) {
    res.status(500).json({
      message: `Error encountered whilst querying the database: ${error}`,
    });
  }
};
