const db = require("../../config/knexConfig");

module.exports = {
  find,
  findBy,
  add,
  update,
  remove
};

function find() {
  return db("users");
}

function findBy(filter) {}

function add(user) {
  db("users").insert(user);
  return db("users")
    .select("*")
    .where({ username: user.username });
}

function update(id, changes) {}

function remove() {}
