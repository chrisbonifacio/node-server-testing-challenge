const db = require("../../config/knexConfig");

module.exports = { find, findBy, add, update, remove };

function find() {
  return db("posts");
}
function findBy(filter) {
  return db("posts")
    .select("*")
    .first()
    .where(filter);
}

function add(post) {
  return db("posts").insert(post);
}

function update(id, changes) {
  return db("posts")
    .update(changes)
    .where({ id });
}

function remove(id) {}
