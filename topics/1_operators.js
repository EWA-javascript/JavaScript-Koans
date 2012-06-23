
module("About Operators (topics/1_operators.js)");

test("logic", function(){
  equals(true && true, true, "and");
  equals(true || false, true, "or");
});

test("plus", function() {
    // The plus operator works for nearly every datatype.
    // But be careful, the results may be strange for everything
    // else than strings and numbers.
    equals(5+5, 10, 'plus with numeric values');
    equals("a" + "string", 'astring', 'string concatenation');
    // Something unexecpected, better use Array.concat.
    equals([1,2] + [3,4], '1,23,4', 'plus with arrays');
});
