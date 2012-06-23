module("About Reflection (topics/10_reflection.js)");

test("typeof", function() {
    equals(typeof({}), __, 'what is the type of an empty object?');
    equals(typeof('apple'), __, 'what is the type of a string?');
    equals(typeof(-5), __, 'what is the type of -5?');
    equals(typeof(false), __, 'what is the type of false?');		
});

test("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    ok(keys.equalTo(['__','__','__']), 'what are the property names of the object?');
    ok(values.equalTo(['__',__,__]), 'what are the property values of the object?');
});


