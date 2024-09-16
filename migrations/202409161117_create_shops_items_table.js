export function up(knex) {
  return knex.schema.createTable("shops_items", (table) => {
    table
      .integer("shops_id")
      .unsigned()
      .references("shops.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("items_id")
      .unsigned()
      .references("items.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTable("shops_items");
}
