/*
 There are two differant operators to tests for
 equality in JavaScript:
  1) ==, !=
  2) ===, !==
 The first one does type coercion if the operands are
 not of the same type. This leads to bugs which are very
 hard to find. The rules for the type coercion are complicated
 and unmemorable. So always use triple equals instead!
*/
module("About Equality (topics/2_equality.js)");

test("equality without type coercion", function() {
    ok(3 === __, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(3 == "__", 'what string is equal to 3, with type coercion?');
});

test("why type coercion is bad", function() {
    // Can you guess all of them?
    equals(0 == '', __);
    equals('' == '0', __);
    equals(0 == [0], __);
    equals(0 == false, __);
    equals(',,,' == new Array(4), __);
});

test("string literals", function() {
    equals("frankenstein", '__', "quote types are interchangable, but must match.");
});
