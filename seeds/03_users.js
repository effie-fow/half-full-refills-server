export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "User 1",
      email: "user1@user.user",
      password: "test",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@user.user",
      password: "test",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@user.user",
      password: "test",
    },
    {
      id: 4,
      name: "User 4",
      email: "user4@user.user",
      password: "test",
    },
    {
      id: 5,
      name: "User 5",
      email: "user5@user.user",
      password: "test",
    },
    {
      id: 6,
      name: "User 6",
      email: "user6@user.user",
      password: "test",
    },
    {
      id: 7,
      name: "User 7",
      email: "user7@user.user",
      password: "test",
    },
    {
      id: 8,
      name: "User 8",
      email: "user8@user.user",
      password: "test",
    },
  ]);
}
