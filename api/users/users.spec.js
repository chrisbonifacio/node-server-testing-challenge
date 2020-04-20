const server = require("../../server");
const request = require("supertest");

describe("GET", () => {
  it("returns a list of all users", () => {
    return request(server)
      .get("/api/users")
      .expect(200);
  });
});
