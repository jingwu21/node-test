const { assert, expect } = require("chai");
const chai = require("chai");

const chaiHttp = require("chai-http");
const app = require("../app");
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Greetings", () => {
  describe("GET /", () => {
    it("should return hello", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.text).to.equals("Hello, Mr.Wu");
          done();
        });
    });
  });
});
