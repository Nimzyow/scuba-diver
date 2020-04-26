const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("auths route", () => {
  describe("responds with 200", () => {
    it("with get request", (done) => {
      request
        .get("/auth")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
    it("with post request", (done) => {
      request
        .post("/auth")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
  });
});
