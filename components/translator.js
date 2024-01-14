const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function reverseObject(obj) {
  let reversedObj = {};
  for (let key in obj) {
    reversedObj[obj[key]] = key;
  }
  return reversedObj;
}
let britishToAmericanSpelling = reverseObject(americanToBritishSpelling);
let britishToAmericanTitles = reverseObject(americanToBritishTitles);

class Translator {
  validateLocale(locale) {
    if (locale === "american-to-british" || locale === "british-to-american") {
      return true;
    }
    return false;
  }

  translate(locale, text) {
    if (locale === "american-to-british") {
      return this.americanToBritish(text);
    } else {
      return this.britishToAmerican(text);
    }
  }

  highlight(word) {
    return `<span class=\"highlight\">${word}</span>`;
  }

  checkTime(locale, time) {
    let regex = /\b\d{1,2}[:.]\d{2}\b/;
    if (regex.test(time)) {
      time =
        locale === "american-to-british"
          ? time.replace(":", ".")
          : time.replace(".", ":");

      return this.highlight(time);
    }
    return false;
  }

  americanToBritish(text) {
    let txtArr = text.split(" ");
    let translatedWords = 0;

    let translated = txtArr.map((word) => {
      word = americanToBritishTitles[word.toLowerCase()]
        ? this.highlight(word.slice(0, word.length - 1))
        : word;
      word = americanOnly[word.toLowerCase()]
        ? this.highlight(americanOnly[word.toLowerCase()])
        : word;
      word = americanToBritishSpelling[word.toLowerCase()]
        ? this.highlight(americanToBritishSpelling[word.toLowerCase()])
        : word;
      word = this.checkTime("american-to-british", word)
        ? this.checkTime("american-to-british", word)
        : word;

      if (word.includes("</span>")) translatedWords++;
      return word;
    });

    return translatedWords === 0
      ? "Everything looks good to me!"
      : translated.join(" ");
  }

  britishToAmerican(text) {
    let txtArr = text.split(" ");
    let translatedWords = 0;

    let translated = txtArr.map((word) => {
      word = britishToAmericanTitles[word.toLowerCase()]
        ? this.highlight(word + ".")
        : word;
      word = britishOnly[word.toLowerCase()]
        ? this.highlight(britishOnly[word.toLowerCase()])
        : word;
      word = britishToAmericanSpelling[word.toLowerCase()]
        ? this.highlight(britishToAmericanSpelling[word.toLowerCase()])
        : word;
      word = this.checkTime("british-to-american", word)
        ? this.checkTime("british-to-american", word)
        : word;

      if (word.includes("</span>")) translatedWords++;
      return word;
    });

    return translatedWords === 0
      ? "Everything looks good to me!"
      : translated.join(" ");
  }
}

module.exports = Translator;
