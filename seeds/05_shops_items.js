export async function seed(knex) {
  await knex("shops_items").del();
  await knex("shops_items").insert([
    {
      shops_id: 1,
      items_id: 1,
    },
    {
      shops_id: 1,
      items_id: 2,
    },
    {
      shops_id: 1,
      items_id: 3,
    },
    {
      shops_id: 1,
      items_id: 4,
    },
    {
      shops_id: 1,
      items_id: 5,
    },
    {
      shops_id: 1,
      items_id: 6,
    },
    {
      shops_id: 1,
      items_id: 7,
    },
    {
      shops_id: 1,
      items_id: 8,
    },
    {
      shops_id: 1,
      items_id: 9,
    },
    {
      shops_id: 1,
      items_id: 10,
    },
    {
      shops_id: 1,
      items_id: 11,
    },
    {
      shops_id: 1,
      items_id: 12,
    },
    {
      shops_id: 1,
      items_id: 13,
    },
    {
      shops_id: 1,
      items_id: 14,
    },
    {
      shops_id: 1,
      items_id: 15,
    },
    {
      shops_id: 1,
      items_id: 16,
    },
    {
      shops_id: 1,
      items_id: 17,
    },
    {
      shops_id: 1,
      items_id: 18,
    },
    {
      shops_id: 2,
      items_id: 10,
    },
    {
      shops_id: 2,
      items_id: 12,
    },
    {
      shops_id: 2,
      items_id: 14,
    },
    {
      shops_id: 2,
      items_id: 15,
    },
    {
      shops_id: 2,
      items_id: 17,
    },
    {
      shops_id: 2,
      items_id: 18,
    },
    {
      shops_id: 5,
      items_id: 1,
    },
    {
      shops_id: 5,
      items_id: 2,
    },
    {
      shops_id: 5,
      items_id: 6,
    },
    {
      shops_id: 5,
      items_id: 7,
    },
    {
      shops_id: 5,
      items_id: 16,
    },
    {
      shops_id: 5,
      items_id: 18,
    },
    {
      shops_id: 8,
      items_id: 1,
    },
    {
      shops_id: 8,
      items_id: 5,
    },
    {
      shops_id: 8,
      items_id: 12,
    },
    {
      shops_id: 8,
      items_id: 9,
    },
    {
      shops_id: 8,
      items_id: 3,
    },
    {
      shops_id: 8,
      items_id: 17,
    },
    {
      shops_id: 9,
      items_id: 3,
    },
    {
      shops_id: 9,
      items_id: 7,
    },
    {
      shops_id: 9,
      items_id: 9,
    },
    {
      shops_id: 9,
      items_id: 14,
    },
    {
      shops_id: 9,
      items_id: 1,
    },
    {
      shops_id: 9,
      items_id: 16,
    },
    {
      shops_id: 10,
      items_id: 2,
    },
    {
      shops_id: 10,
      items_id: 6,
    },
    {
      shops_id: 10,
      items_id: 11,
    },
    {
      shops_id: 10,
      items_id: 15,
    },
    {
      shops_id: 10,
      items_id: 17,
    },
    {
      shops_id: 10,
      items_id: 9,
    },
    {
      shops_id: 11,
      items_id: 1,
    },
    {
      shops_id: 11,
      items_id: 8,
    },
    {
      shops_id: 11,
      items_id: 16,
    },
    {
      shops_id: 11,
      items_id: 5,
    },
    {
      shops_id: 11,
      items_id: 10,
    },
    {
      shops_id: 11,
      items_id: 3,
    },
    {
      shops_id: 12,
      items_id: 4,
    },
    {
      shops_id: 12,
      items_id: 10,
    },
    {
      shops_id: 12,
      items_id: 12,
    },
    {
      shops_id: 12,
      items_id: 18,
    },
    {
      shops_id: 12,
      items_id: 9,
    },
    {
      shops_id: 12,
      items_id: 16,
    },
    {
      shops_id: 13,
      items_id: 3,
    },
    {
      shops_id: 13,
      items_id: 13,
    },
    {
      shops_id: 13,
      items_id: 5,
    },
    {
      shops_id: 13,
      items_id: 1,
    },
    {
      shops_id: 13,
      items_id: 10,
    },
    {
      shops_id: 13,
      items_id: 17,
    },
    {
      shops_id: 14,
      items_id: 5,
    },
    {
      shops_id: 14,
      items_id: 8,
    },
    {
      shops_id: 14,
      items_id: 15,
    },
    {
      shops_id: 14,
      items_id: 3,
    },
    {
      shops_id: 14,
      items_id: 11,
    },
    {
      shops_id: 14,
      items_id: 7,
    },
    {
      shops_id: 15,
      items_id: 6,
    },
    {
      shops_id: 15,
      items_id: 9,
    },
    {
      shops_id: 15,
      items_id: 13,
    },
    {
      shops_id: 15,
      items_id: 12,
    },
    {
      shops_id: 15,
      items_id: 18,
    },
    {
      shops_id: 15,
      items_id: 7,
    },
    {
      shops_id: 16,
      items_id: 4,
    },
    {
      shops_id: 16,
      items_id: 7,
    },
    {
      shops_id: 16,
      items_id: 10,
    },
    {
      shops_id: 16,
      items_id: 18,
    },
    {
      shops_id: 16,
      items_id: 6,
    },
    {
      shops_id: 16,
      items_id: 2,
    },
    {
      shops_id: 17,
      items_id: 2,
    },
    {
      shops_id: 17,
      items_id: 11,
    },
    {
      shops_id: 17,
      items_id: 17,
    },
    {
      shops_id: 17,
      items_id: 4,
    },
    {
      shops_id: 17,
      items_id: 16,
    },
    {
      shops_id: 17,
      items_id: 1,
    },
  ]);
}
