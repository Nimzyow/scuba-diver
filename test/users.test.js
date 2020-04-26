const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

it("Gets the test endpoint", async (done) => {
  const response = await request.post("/users");
  expect(response.status).toBe(200);
  done();
});
