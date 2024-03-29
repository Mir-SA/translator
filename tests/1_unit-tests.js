const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const locale1 = "american-to-british";
const locale2 = "british-to-american";

suite("Unit Tests", () => {
  test("Translate given string to British English", function () {
    assert.isString(
      translator.translate(locale1, "Mangoes are my favorite fruit.")
    );
    assert.equal(
      translator.translate(locale1, "Mangoes are my favorite fruit."),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I ate yogurt for breakfast. to British English", function () {
    assert.isString(
      translator.translate(locale1, "I ate yogurt for breakfast.")
    );
    assert.equal(
      translator.translate(locale1, "I ate yogurt for breakfast."),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });
  test("Translate We had a party at my friend's condo. to British English", function () {
    assert.isString(
      translator.translate(locale1, "We had a party at my friend's condo.")
    );
    assert.equal(
      translator.translate(locale1, "We had a party at my friend's condo."),
      "Everything looks good to me!"
    );
  });
  test("Translate Can you toss this in the trashcan for me? to British English", function () {
    assert.isString(
      translator.translate(locale1, "Can you toss this in the trashcan for me?")
    );
    assert.equal(
      translator.translate(
        locale1,
        "Can you toss this in the trashcan for me?"
      ),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
  });
  test("Translate The parking lot was full. to British English", function () {
    assert.isString(translator.translate(locale1, "The parking lot was full."));
    assert.equal(
      translator.translate(locale1, "The parking lot was full."),
      "Everything looks good to me!"
    );
  });
  test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
    assert.isString(
      translator.translate(locale1, "Like a high tech Rube Goldberg machine.")
    );
    assert.equal(
      translator.translate(locale1, "Like a high tech Rube Goldberg machine."),
      "Everything looks good to me!"
    );
  });
  test("Translate To play hooky means to skip class or work. to British English", function () {
    assert.isString(
      translator.translate(
        locale1,
        "To play hooky means to skip class or work."
      )
    );
    assert.equal(
      translator.translate(
        locale1,
        "To play hooky means to skip class or work."
      ),
      "Everything looks good to me!"
    );
  });
  test("Translate No Mr. Bond, I expect you to die. to British English", function () {
    assert.isString(
      translator.translate(locale1, "No Mr. Bond, I expect you to die.")
    );
    assert.equal(
      translator.translate(locale1, "No Mr. Bond, I expect you to die."),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
  });
  test("Translate Dr. Grosh will see you now. to British English", function () {
    assert.isString(
      translator.translate(locale1, "Dr. Grosh will see you now.")
    );
    assert.equal(
      translator.translate(locale1, "Dr. Grosh will see you now."),
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
  });
  test("Translate Lunch is at 12:15 today. to British English", function () {
    assert.isString(translator.translate(locale1, "Lunch is at 12:15 today."));
    assert.equal(
      translator.translate(locale1, "Lunch is at 12:15 today."),
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
  });
  test("Translate We watched the footie match for a while. to American English", function () {
    assert.isString(
      translator.translate(locale2, "We watched the footie match for a while.")
    );
    assert.equal(
      translator.translate(locale2, "We watched the footie match for a while."),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });
  test("Translate Paracetamol takes up to an hour to work. to American English", function () {
    assert.isString(
      translator.translate(locale2, "Paracetamol takes up to an hour to work.")
    );
    assert.equal(
      translator.translate(locale2, "Paracetamol takes up to an hour to work."),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });
  test("Translate First, caramelise the onions. to American English", function () {
    assert.isString(
      translator.translate(locale2, "First, caramelise the onions.")
    );
    assert.equal(
      translator.translate(locale2, "First, caramelise the onions."),
      'First, <span class="highlight">caramelize</span> the onions.'
    );
  });
  test("Translate I spent the bank holiday at the funfair. to American English", function () {
    assert.isString(
      translator.translate(locale2, "I spent the bank holiday at the funfair.")
    );
    assert.equal(
      translator.translate(locale2, "I spent the bank holiday at the funfair."),
      "Everything looks good to me!"
    );
  });
  test("Translate I had a bicky then went to the chippy. to American English", function () {
    assert.isString(
      translator.translate(locale2, "I had a bicky then went to the chippy.")
    );
    assert.equal(
      translator.translate(locale2, "I had a bicky then went to the chippy."),
      'I had a <span class="highlight">cookie</span> then went to the chippy.'
    );
  });
  test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
    assert.isString(
      translator.translate(
        locale2,
        "I've just got bits and bobs in my bum bag."
      )
    );
    assert.equal(
      translator.translate(
        locale2,
        "I've just got bits and bobs in my bum bag."
      ),
      "Everything looks good to me!"
    );
  });
  test("Translate Have you met Mrs Kalyani? to American English", function () {
    assert.isString(translator.translate(locale2, "Have you met Mrs Kalyani?"));
    assert.equal(
      translator.translate(locale2, "Have you met Mrs Kalyani?"),
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
  });
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
    assert.isString(
      translator.translate(
        locale2,
        "The car boot sale at Boxted Airfield was called off."
      )
    );
    assert.equal(
      translator.translate(
        locale2,
        "The car boot sale at Boxted Airfield was called off."
      ),
      "Everything looks good to me!"
    );
  });
  test("Translate Prof Joyner of King's College, London. to American English", function () {
    assert.isString(
      translator.translate(locale2, "Prof Joyner of King's College, London.")
    );
    assert.equal(
      translator.translate(locale2, "Prof Joyner of King's College, London."),
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    );
  });
  test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
    assert.isString(
      translator.translate(locale2, "Tea time is usually around 4 or 4.30.")
    );
    assert.equal(
      translator.translate(locale2, "Tea time is usually around 4 or 4.30."),
      'Tea time is usually around 4 or <span class="highlight">4:30.</span>'
    );
  });
  test("Translate Mangoes are my favorite fruit. to American English", function () {
    assert.isString(
      translator.translate(locale1, "Mangoes are my favorite fruit.")
    );
    assert.include(
      translator.translate(locale1, "Mangoes are my favorite fruit."),
      '<span class="highlight">favourite</span>'
    );
  });
  test("Translate I ate yogurt for breakfast. to American English", function () {
    assert.isString(
      translator.translate(locale1, "I ate yogurt for breakfast.")
    );
    assert.include(
      translator.translate(locale1, "I ate yogurt for breakfast."),
      '<span class="highlight">yoghurt</span> '
    );
  });
  test("Translate We watched the footie match for a while. to American English", function () {
    assert.isString(
      translator.translate(locale2, "We watched the footie match for a while.")
    );
    assert.include(
      translator.translate(locale2, "We watched the footie match for a while."),
      '<span class="highlight">soccer</span>'
    );
  });
  test("Translate Paracetamol takes up to an hour to work. to American English", function () {
    assert.isString(
      translator.translate(locale2, "Paracetamol takes up to an hour to work.")
    );
    assert.include(
      translator.translate(locale2, "Paracetamol takes up to an hour to work."),
      '<span class="highlight">Tylenol</span>'
    );
  });
});
