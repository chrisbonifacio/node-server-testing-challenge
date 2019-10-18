exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
    tbl.increments().unique();
    tbl
      .integer("user_id")
      .unsigned()
      .unique();
    tbl
      .foreign("user_id")
      .references("id")
      .inTable("users");
    tbl.string("title").notNullable();
    tbl.string("content").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
