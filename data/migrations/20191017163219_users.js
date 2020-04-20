exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments().unique();
    tbl
      .string("username")
      .unique()
      .notNullable();
    tbl.string("password").notNullable();
    tbl.integer("age").notNullable();
    tbl.string("city").notNullable();
    tbl.string("state").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
