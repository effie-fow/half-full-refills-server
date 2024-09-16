export const filterShopsByItem = (items, queriedShopsList) => {
  const filteredShops = [];
  const queryItems = items.split("-");

  for (let shop of queriedShopsList) {
    const shopItems = shop.items;

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

  return filteredShops;
};
