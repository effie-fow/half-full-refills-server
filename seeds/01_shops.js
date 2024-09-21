export async function seed(knex) {
  await knex("shops").del();
  await knex("shops").insert([
    {
      id: 1,
      name: "Eco Trading Post",
      street_number: "1",
      street_name: "Warpole Terrace",
      city: "Brighton",
      postcode: "BN1 1AE",
      is_active: "1",
    },
    {
      id: 2,
      name: "Barnaby's",
      street_number: "7",
      street_name: "Ruthven Place",
      city: "Brighton",
      postcode: "BN1 1AE",
      is_active: "1",
    },
    {
      id: 3,
      name: "Rice & Beans",
      street_number: "3",
      street_name: "College Place",
      city: "Brighton",
      postcode: "BN1 1AE",
      is_active: "0",
    },
    {
      id: 4,
      name: "Twenty Six Foods",
      street_number: "26",
      street_name: "Oxford Street",
      city: "Brighton",
      postcode: "BN1 1AE",
      is_active: "0",
    },
    {
      id: 5,
      name: "Cabbage",
      street_number: "67",
      street_name: "Lamond",
      city: "London",
      postcode: "NW1 1AE",
      is_active: "1",
    },
  ]);
}
