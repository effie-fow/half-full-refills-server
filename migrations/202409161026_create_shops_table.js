export function up(knex) {
  return knex.schema.createTable("shops", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name").notNullable();
    table.bigInteger("street_number").notNullable();
    table.string("street_name").notNullable();
    table.string("city").notNullable();
    table.string("postcode").notNullable();
    table.string("lat_long").notNullable();
    table.tinyint("is_active", 1).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("shops");
}
