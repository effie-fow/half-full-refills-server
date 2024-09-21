export function up(knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name").notNullable();
    table.string("formatted_name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("items");
}
