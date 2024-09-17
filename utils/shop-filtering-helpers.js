import initknex from "knex";
import configuration from "../knexfile.js";

const knex = initknex(configuration);

export const filterShopsByItem = (items, queriedShopsList, matchType) => {
  const filteredShops = [];
  const queryItems = items.split(",");

  for (let shop of queriedShopsList) {
    const shopItems = shop.items;

    if (matchType === "exact") {
      let shopContainsAllItems = true;

      for (let queryItem of queryItems) {
        if (!shopItems.some((shopItem) => queryItem === shopItem)) {
          shopContainsAllItems = false;
        }
      }

      if (shopContainsAllItems) {
        filteredShops.push(shop);
      }
    }

    if (matchType === "partial") {
      let shopContainsSomeItem = false;

      for (let queryItem of queryItems) {
        if (shopItems.includes(queryItem)) {
          shopContainsSomeItem = true;
        }
      }

      if (shopContainsSomeItem) {
        filteredShops.push(shop);
      }
    }
  }

  return filteredShops;
};

export const getShopItems = async (shop) => {
  const shopsItemsIds = await knex("shops_items").where("shops_id", shop.id);

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
  return shop;
};
