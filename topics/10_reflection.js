module("About Reflection (topics/10_reflection.js)");

test("typeof", function() {
    equals(typeof({}), 'object', 'what is the type of an empty object?');
    equals(typeof('apple'), 'string', 'what is the type of a string?');
    equals(typeof(-5), 'number', 'what is the type of -5?');
    equals(typeof(false), 'boolean', 'what is the type of false?');
});

test("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    ok(keys.equalTo(['name','age','unemployed']), 'what are the property names of the object?');
    ok(values.equalTo(['Amory Blaine',102,true]), 'what are the property values of the object?');
});


