export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "User 1",
      email: "user1@user.user",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@user.user",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@user.user",
    },
  ]);
}
