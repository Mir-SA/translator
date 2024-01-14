"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let { text } = req.body;
    let { locale } = req.body;

    if (text == undefined || locale == undefined) {
      res.send({ error: "Required field(s) missing" });
    } else if (text === "") {
      res.send({ error: "No text to translate" });
    } else if (!translator.validateLocale(locale)) {
      res.send({ error: "Invalid value for locale field" });
    } else {
      let translation = translator.translate(locale, text);
      console.log("Translated: ", translation);
      res.send({ text, translation });
    }
  });
};
