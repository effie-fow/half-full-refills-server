export async function seed(knex) {
  await knex("nominations").del();
  await knex("nominations").insert([
    {
      id: 1,
      users_id: 1,
      shops_id: 3,
    },
    {
      id: 2,
      users_id: 1,
      shops_id: 4,
    },
    {
      id: 3,
      users_id: 2,
      shops_id: 4,
    },
    {
      id: 4,
      users_id: 3,
      shops_id: 3,
    },
    {
      id: 5,
      users_id: 3,
      shops_id: 4,
    },
  ]);
}
