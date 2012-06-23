
module("About Operators (topics/1_operators.js)");

test("logic", function(){
  equals(true && true, __, "and");
  equals(true || false, __, "or");
});

test("plus", function() {
    // The plus operator works for nearly every datatype.
    // But be careful, the results may be strange for everything
    // else than strings and numbers.
    equals(5+5, __, 'plus with numeric values');
    equals("a" + "string", '__', 'string concatenation');
    // Something unexecpected, better use Array.concat.
    equals([1,2] + [3,4], '__', 'plus with arrays');
});
