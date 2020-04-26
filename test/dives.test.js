const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("dives route", () => {
  describe("responds with 200", () => {
    it("with get request", (done) => {
      request
        .get("/dives")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
    it("with post request", (done) => {
      request
        .post("/dives")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
    it("with a put request", (done) => {
      request
        .put("/dives/1")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
    it("with a delete request", (done) => {
      request
        .delete("/dives/1")
        .set("Content-type", "application/json")
        .expect(200, done);
    });
  });
});
