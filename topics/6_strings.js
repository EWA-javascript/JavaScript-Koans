
module("About Strings (topics/6_strings.js)");

test("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    equals(singleQuotedString === doubleQuotedString, true, 'are the two strings equal?');
});

test("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    equals(fruit + " " + dish, "apple pie", 'what is the value of fruit + " " + dish?');
});

test("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equals(characterType, "string", 'Javascript has no character type');
});

test("string.length", function() {
    var fruit = "apple";
    equals(fruit.length, 5, 'what is the value of fruit.length?');
});


