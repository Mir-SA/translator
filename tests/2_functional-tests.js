const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
const translator = new Translator();

let amText = "No Mr. Bond, I expect you to die";
let brText = "No Mr Bond, I expect you to die";
let locale1 = "american-to-british";
let invalidLocale = "french-to-hindi";

suite("Functional Tests", () => {
  test("Translation with text and locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: amText,
        locale: locale1,
      })
      .end(function (err, res) {
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(
          res.body.translation,
          translator.translate(locale1, amText)
        );
        done();
      });
  });

  test("Translation with text and invalid locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: amText,
        locale: invalidLocale,
      })
      .end(function (err, res) {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });

  test("Translation with missing text field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: locale1,
      })
      .end(function (err, res) {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  test("Translation with missing locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: amText,
      })
      .end(function (err, res) {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  test("Translation with empty text", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: locale1,
      })
      .end(function (err, res) {
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });

  test("Translation with text and locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: brText,
        locale: locale1,
      })
      .end(function (err, res) {
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
