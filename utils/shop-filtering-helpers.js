export const filterShopsByItem = (items, queriedShopsList, matchType) => {
  const filteredShops = [];
  const queryItems = items.split("-");

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
