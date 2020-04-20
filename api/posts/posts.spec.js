const server = require("../../server");
const request = require("supertest");

const db = require("../../config/knexConfig");
const Posts = require("../posts/postModel");

describe("GET", () => {
  it("GET /api/posts", () => {
    return request(server)
      .get("/api/posts")
      .expect(200)
      .expect("Content-type", /json/);
  });
});

describe("posts model", () => {
  beforeEach(async () => {
    await db("posts").truncate();
  });

  describe("find()", () => {
    it("should return array of posts from the db", async () => {
      let posts = await Posts.find();

      expect(posts).toHaveLength(0);
    });
  });

  describe("add()", () => {
    it("should insert a new post to the db", async () => {
      let posts = await db("posts");

      const post = {
        user_id: 1,
        title: "New Post",
        content: "blah blah blah"
      };

      await Posts.add(post);
      posts = await db("posts");
      expect(posts).toHaveLength(1);
    });
  });

  describe("update()", () => {
    it("should update a post in the database", async () => {
      let posts = await db("posts");
      expect(posts).toHaveLength(0);

      await Posts.add({
        user_id: 2,
        title: "Title",
        content: "blah blah blah"
      });
      posts = await db("posts");
      expect(posts).toHaveLength(1);

      await Posts.update(1, { title: "Updated Title" });
      const post = await Posts.findBy({ id: 1 });
      console.log(post);
      expect(post.title).toBe("Updated Title");
    });
  });
});
