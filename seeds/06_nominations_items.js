export async function seed(knex) {
  await knex("nominations_items").del();
  await knex("nominations_items").insert([
    {
      nominations_id: 1,
      items_id: 1,
    },
    {
      nominations_id: 1,
      items_id: 3,
    },
    {
      nominations_id: 1,
      items_id: 4,
    },
    {
      nominations_id: 1,
      items_id: 8,
    },
    {
      nominations_id: 1,
      items_id: 12,
    },
    {
      nominations_id: 1,
      items_id: 15,
    },
    {
      nominations_id: 1,
      items_id: 18,
    },
    {
      nominations_id: 2,
      items_id: 2,
    },
    {
      nominations_id: 2,
      items_id: 6,
    },
    {
      nominations_id: 2,
      items_id: 7,
    },
    {
      nominations_id: 2,
      items_id: 9,
    },
    {
      nominations_id: 2,
      items_id: 14,
    },
    {
      nominations_id: 2,
      items_id: 15,
    },
    {
      nominations_id: 2,
      items_id: 17,
    },
    {
      nominations_id: 2,
      items_id: 18,
    },
    {
      nominations_id: 3,
      items_id: 2,
    },
    {
      nominations_id: 3,
      items_id: 5,
    },
    {
      nominations_id: 3,
      items_id: 10,
    },
    {
      nominations_id: 3,
      items_id: 14,
    },
    {
      nominations_id: 3,
      items_id: 15,
    },
    {
      nominations_id: 4,
      items_id: 5,
    },
    {
      nominations_id: 4,
      items_id: 18,
    },
    {
      nominations_id: 5,
      items_id: 1,
    },
    {
      nominations_id: 5,
      items_id: 2,
    },
    {
      nominations_id: 5,
      items_id: 3,
    },
    {
      nominations_id: 5,
      items_id: 7,
    },
    {
      nominations_id: 5,
      items_id: 9,
    },
    {
      nominations_id: 5,
      items_id: 15,
    },
    {
      nominations_id: 5,
      items_id: 17,
    },
    {
      nominations_id: 5,
      items_id: 18,
    },
  ]);
}
