const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("users route", () => {
  describe("responds with 200", () => {
    it("with post request", (done) => {
      let data = {
        username: "nimzy",
        email: "n_soufiani@hotmail.com",
        password: "123456",
      };

      request
        .post("/users")
        .send(data)
        .set("Content-type", "application/json")
        .expect((res) => {
          res.body.username === "Nimzy",
            res.body.email === "n_soufiani@hotmail.com",
            res.body.password === "123456";
        })
        .expect(200, done);
    });
  });
});
