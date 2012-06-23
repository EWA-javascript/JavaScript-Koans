// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module("About Prototype Chain (topics/11_prototype_chain.js)");

var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("Is there an 'a' and 'b' own property on childObj?", function () {
  equals(child.a, 1, 'what is \'a\' value?');
  equals(child.b, 2, 'what is \'b\' value?');
});

test("If 'b' was removed, whats b value?", function () {
  delete child.b;
  equals(child.b, 3, 'what is \'b\' value now?');
});


// Is there a 'c' own property on childObj? No, check its prototype
// Is there a 'c' own property on childObj.[[Prototype]]? Yes, its value is...
test("Is there a 'c' own property on childObj.[[Prototype]]?", function () {
  equals(child.hasOwnProperty('c'), false, 'childObj.hasOwnProperty(\'c\')?');
});

test("Is there a 'c' own property on childObj.[[Prototype]]?", function () {
  equals(child.c, 4, 'childObj.c?');
});


// Is there a 'd' own property on childObj? No, check its prototype
// Is there a 'd' own property on childObj.[[Prototype]]? No, check it prototype
// childObj.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' own property on childObj?", function () {
  equals(child.d, undefined, 'what is the value of childObj.d?');
});


