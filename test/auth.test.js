const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("auths route", () => {
  describe("responds with 200", () => {
    it("with get request", async (done) => {
      const response = await request.get("/auth");
      expect(response.status).toBe(200);
      done();
    });
    it("with post request", async (done) => {
      const response = await request.post("/auth");
      expect(response.status).toBe(200);
      done();
    });
  });
});
