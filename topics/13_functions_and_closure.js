
module("About Functions And Closure (topics/13_functions_and_closure.js)");

test("defining functions directly", function() {
    var result = "a";
    function changeResult() {
        // the ability to access a variables defined in the same scope as the function is known as 'closure'
        result = "b";
    };	
    changeResult();
    equals(result, __, 'what is the value of result?');
});

test("assigning functions to variables", function() {
    var triple = function(input) {
        return input * 3;
    };
    equals(triple(4), __, 'what is triple 4?');		
});

test("self invoking functions", function() {		
    var publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function(pv) {
        var secretValue = "password";
        equals(pv, __, 'what is the value of pv?');
        equals(typeof(secretValue), "__", "is secretValue available in this context?");
        equals(typeof(publicValue), "__", "is publicValue available in this context?");
    })(publicValue);

    equals(typeof(secretValue), "__", "is secretValue available in this context?");
    equals(typeof(publicValue), "__", "is publicValue available in this context?");
});

