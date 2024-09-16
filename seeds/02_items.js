export async function seed(knex) {
  await knex("items").del();
  await knex("items").insert([
    {
      id: 1,
      name: "pasta",
    },
    {
      id: 2,
      name: "rice",
    },
    {
      id: 3,
      name: "grains",
    },
    {
      id: 4,
      name: "cereals",
    },
    {
      id: 5,
      name: "nuts",
    },
    {
      id: 6,
      name: "dried_fruit",
    },
    {
      id: 7,
      name: "sugar",
    },
    {
      id: 8,
      name: "herbs_spices",
    },
    {
      id: 9,
      name: "salt_pepper",
    },
    {
      id: 10,
      name: "shower_products",
    },
    {
      id: 11,
      name: "oat_milk",
    },
    {
      id: 12,
      name: "laundry_detergent",
    },
    {
      id: 13,
      name: "toilet_cleaner",
    },
    {
      id: 14,
      name: "washing_up_liq",
    },
    {
      id: 15,
      name: "fruit_veg",
    },
    {
      id: 16,
      name: "vegan",
    },
    {
      id: 17,

      name: "vegan_friendly",
    },
    {
      id: 18,
      name: "step_free",
    },
  ]);
}
