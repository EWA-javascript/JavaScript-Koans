/*
 These exercises use the QUnit test suite. It contains of three different
 functions to test for expected values. Fill in the values to see how they work!
*/
module("About Asserts (topics/0_asserts.js)");

test("ok", function() {
    ok(true, 'what will satisfy the ok assertion?');
});

test("not", function() {
    not(false, 'what is a false value?');
});

test("equals", function() {
    equals(1+1, 2, 'what will satisfy the equals assertion?');
});
