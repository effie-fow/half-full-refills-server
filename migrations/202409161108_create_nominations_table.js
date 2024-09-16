export function up(knex) {
  return knex.schema.createTable("nominations", (table) => {
    table.increments("id").primary();
    table
      .integer("shops_id")
      .unsigned()
      .references("shops.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("users_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("nominations");
}
