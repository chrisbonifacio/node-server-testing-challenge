const server = require("../../server");
const request = require("supertest");

describe("POST /api/register", () => {
  it("returns 200 OK and responds with json", () => {
    return request(server)
      .post("/api/register")
      .send({ username: "newUser", password: "password" })
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
  });
});
