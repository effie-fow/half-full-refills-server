export async function seed(knex) {
  await knex("shops").del();
  await knex("shops").insert([
    {
      id: 1,
      name: "Test1",
      street_number: "1",
      street_name: "Test1",
      city: "Brighton",
      postcode: "BN1 1AE",
      lat_long: "50.8214, 0.1417",
      is_active: "1",
    },
    {
      id: 2,
      name: "Test2",
      street_number: "2",
      street_name: "Test2",
      city: "Brighton",
      postcode: "BN1 1AE",
      lat_long: "50.8214, 0.1417",
      is_active: "1",
    },
    {
      id: 3,
      name: "Test3",
      street_number: "3",
      street_name: "Test3",
      city: "Brighton",
      postcode: "BN1 1AE",
      lat_long: "50.8214, 0.1417",
      is_active: "0",
    },
    {
      id: 4,
      name: "Test4",
      street_number: "4",
      street_name: "Test4",
      city: "Brighton",
      postcode: "BN1 1AE",
      lat_long: "50.8214, 0.1417",
      is_active: "0",
    },
  ]);
}
