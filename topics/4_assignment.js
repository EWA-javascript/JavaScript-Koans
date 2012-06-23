module("About Assignment (topics/4_assignment.js)");

test("local variables", function() {
    var temp = 1;
    equals(1, temp, "Assign a value to the variable temp");
});

test("no block scope", function() {
  // JavaScript has no block scope like Java, but function scope.
  // It's best to define all vars at the top of a function to avoid confusion
  var isInnerVariableDefined = true;
  if(true) {
    var innerVariable = 5;
  }
  try {
    innerVariable
  } catch(e){
    isInnerVariableDefined = false;
  }
  equals(isInnerVariableDefined, true, "there is no block scope");
});

test("function scope", function() {
    var outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
        var innerVariable = "inner";
        equals(outerVariable, "outer", 'is outerVariable defined in this scope?');
        equals(innerVariable, "inner", 'is innerVariable defined in this scope?');
    })();

    equals(outerVariable, "outer", 'is outerVariable defined in this scope?');
    var isInnerVariableDefined = true;
    try {
        innerVariable
    } catch(e) {
        isInnerVariableDefined = false;
    }
    equals(isInnerVariableDefined, false, 'is innerVariable defined in this scope?');
});

temp = 1;
test("global variables", function() {
    //If you try to use a variable before declaring it, JavaScript assumes that you
    //meant the global context. The top level object is the window object, so your
    //variable becomes a property of that object. Most of the time this is not intended
    //by the programmer, so they introduced "use strict" in ES5. If you really want
    //to make a global var use windows.myVar = value instead, but make sure not to
    //override any existing properties!
    equals(temp, window.temp, 'global variables are assigned to the window object');
});
