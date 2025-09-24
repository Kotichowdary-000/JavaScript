// Object methods 
const person = {
    firstName: "koti",
    lastName: "chowdary",
    age: 24,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Output: koti chowdary

// Object.keys() method
const keys = Object.keys(person);
console.log(keys); // Output: [ 'firstName', 'lastName', 'age', 'fullName' ]
// Object.values() method
const values = Object.values(person);
console.log(values);    
// Output: [ 'koti', 'chowdary', 24, [Function: fullName] ]
// Object.entries() method
// entries method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const entries = Object.entries(person);
console.log(entries);
// Output: [ [ 'firstName', 'koti' ],
//   [ 'lastName', 'chowdary' ],    
//   [ 'age', 24 ],
//   [ 'fullName', [Function: fullName] ] ]
// Object.assign() method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
// Output: { a: 1, b: 4, c: 5 }
// Object.freeze() method
// Freezing an object prevents modifications to its properties
const obj = {
    prop: 42    
};  
Object.freeze(obj);
obj.prop = 33; // This will not change the property value
console.log(obj.prop);

// Output: 42
// Object.seal() method
// Sealing an object prevents adding or removing properties, but allows modification of existing properties
const sealedObj = {
    prop: 42
};
Object.seal(sealedObj);
sealedObj.prop = 33; // This will change the property value
sealedObj.newProp = 100; // This will not add a new property
console.log(sealedObj);

// Output: { prop: 33 }
// Object.getOwnPropertyNames() method
const ownProps = Object.getOwnPropertyNames(person);
console.log(ownProps);




// Output: [ 'firstName', 'lastName', 'age', 'fullName' ]

// Object.getPrototypeOf() method
const proto = Object.getPrototypeOf(person);
console.log(proto); // Output: {}
// Object.hasOwnProperty() method
console.log(person.hasOwnProperty('firstName'));
// Output: true
console.log(person.hasOwnProperty('middleName'));
// Output: false
// Object.is() method
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(Object.is(obj1, obj2));
// Output: false
console.log(Object.is(obj1, obj1));
// Output: true
// Object.isExtensible() method
console.log(Object.isExtensible(person));   
// Output: true
// Object.preventExtensions() method
Object.preventExtensions(person);
console.log(Object.isExtensible(person));
// Output: false

// Object.getOwnPropertyDescriptor() method
const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// Output: { value: 'koti', writable: true, enumerable: true, configurable: true }
// Object.defineProperty() method
Object.defineProperty(person, 'middleName', {
    value: 'Reddy',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(person.middleName); // Output: Reddy
// Object.defineProperties() method
Object.defineProperties(person, {
    nickName: {
        value: 'Koti',
        writable: true
    },
    country: {
        value: 'India',
        writable: true
    }
});
console.log(person.nickName);
console.log(person.country);
// Output: Koti
// Output: India
// Object.fromEntries() method
const entriesArray = [['a', 1], ['b', 2], ['c', 3]];
const fromEntriesObj = Object.fromEntries(entriesArray);
console.log(fromEntriesObj);
// Output: { a: 1, b: 2, c: 3 }
// Object.prototype.toString() method
console.log(Object.prototype.toString.call(person));
// Output: [object Object]
// Object.prototype.valueOf() method
console.log(person.valueOf() === person); // Output: true
// Object.prototype.hasOwnProperty() method
console.log(person.hasOwnProperty('age')); // Output: true
console.log(('person.hasOwnPropertysalary')); // Output: false
// Object.prototype.isPrototypeOf() method
const anotherPerson = Object.create(person);
console.log(person.isPrototypeOf(anotherPerson));
// Output: true
// Object.prototype.propertyIsEnumerable() method
console.log(person.propertyIsEnumerable('firstName'));
// Output: true
console.log(person.propertyIsEnumerable('toString'));
// Output: false
// Object.prototype.toLocaleString() method
console.log(person.toLocaleString());
// Output: [object Object]
// Object.prototype.constructor property
console.log(person.constructor === Object); // Output: true
// Object.prototype.__proto__ property
console.log(person.__proto__ === Object.prototype); // Output: true
// Object.prototype.__defineGetter__() method
person.__defineGetter__('fullNameGetter', function() {
    return this.firstName + " " + this.lastName;
}); 

console.log(person.fullNameGetter); // Output: koti chowdary
// Object.prototype.__defineSetter__() method
person.__defineSetter__('ageSetter', function(newAge) {
    this.age = newAge;
}); 
person.ageSetter = 25;
console.log(person.age); // Output: 25
// Object.prototype.__lookupGetter__() method
const getter = person.__lookupGetter__('fullNameGetter');
console.log(getter); // Output: [Function (anonymous)]
// Object.prototype.__lookupSetter__() method
const setter = person.__lookupSetter__('ageSetter');
console.log(setter); // Output: [Function (anonymous)]
// End of Object methods
// Note: Some of these methods and properties are deprecated and should be avoided in modern JavaScript code.
// Always refer to the latest documentation for best practices.
