const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("dives route", () => {
  describe("responds with 200", () => {
    it("with get request", async (done) => {
      const response = await request.get("/dives");
      expect(response.status).toBe(200);
      done();
    });
    it("with post request", async (done) => {
      const response = await request.post("/dives");
      expect(response.status).toBe(200);
      done();
    });
    it("with a put request", async (done) => {
      const response = await request.put("/dives/1");
      expect(response.status).toBe(200);
      done();
    });
    it("with a delete request", async (done) => {
      const response = await request.delete("/dives/1");
      expect(response.status).toBe(200);
      done();
    });
  });
});
