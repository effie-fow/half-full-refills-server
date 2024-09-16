export function up(knex) {
  return knex.schema.createTable("nominations_items", (table) => {
    table
      .integer("nominations_id")
      .unsigned()
      .references("nominations.id")
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
  return knex.schema.dropTable("nominations_items");
}
