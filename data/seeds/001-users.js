const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "chris",
          password: bcrypt.hashSync("newyork", 8),
          age: 24,
          city: "Waterbury",
          state: "Connecticut"
        },
        {
          username: "mary",
          password: bcrypt.hashSync("miami", 8),
          age: 24,
          city: "Miami",
          state: "Florida"
        },
        {
          username: "daniel",
          age: 19,
          password: bcrypt.hashSync("bronx", 8),
          city: "Bronx",
          state: "New York"
        }
      ]);
    });
};
