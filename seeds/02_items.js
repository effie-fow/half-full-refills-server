export async function seed(knex) {
  await knex("items").del();
  await knex("items").insert([
    {
      id: 1,
      name: "pasta",
      formatted_name: "Pasta",
    },
    {
      id: 2,
      name: "rice",
      formatted_name: "Rice",
    },
    {
      id: 3,
      name: "grains",
      formatted_name: "Grains",
    },
    {
      id: 4,
      name: "cereals",
      formatted_name: "Cereals",
    },
    {
      id: 5,
      name: "nuts",
      formatted_name: "Nuts",
    },
    {
      id: 6,
      name: "dried_fruit",
      formatted_name: "Dried Fruit",
    },
    {
      id: 7,
      name: "sugar",
      formatted_name: "Sugar",
    },
    {
      id: 8,
      name: "herbs_spices",
      formatted_name: "Herbs & Spices",
    },
    {
      id: 9,
      name: "salt_pepper",
      formatted_name: "Salt & Pepper",
    },
    {
      id: 10,
      name: "shower_products",
      formatted_name: "Shower Products",
    },
    {
      id: 11,
      name: "oat_milk",
      formatted_name: "Oat Milk",
    },
    {
      id: 12,
      name: "laundry_detergent",
      formatted_name: "Laundry Detergent",
    },
    {
      id: 13,
      name: "toilet_cleaner",
      formatted_name: "Toilet Cleaner",
    },
    {
      id: 14,
      name: "washing_up_liq",
      formatted_name: "Washing-up Liquid",
    },
    {
      id: 15,
      name: "fruit_veg",
      formatted_name: "Fruit & Veg",
    },
    {
      id: 16,
      name: "vegan",
      formatted_name: "Vegan",
    },
    {
      id: 17,
      name: "vegan_friendly",
      formatted_name: "Vegan-Friendly",
    },
    {
      id: 18,
      name: "step_free",
      formatted_name: "Step-Free",
    },
  ]);
}
