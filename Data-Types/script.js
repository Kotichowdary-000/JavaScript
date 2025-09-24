/*
Datatypes:


    - It is used to store the data , What kind of data can be stored in side the variable. 

Types of datatypes:

    - There are two types of datatypes :
    
            1. Primitive datatypes: It can hold only one value. 
            2. Non-primitive datatypes: It can hold the multiple data or complex data entities.


    - Types of Primitive datatypes:

            1. String.
            2. Number.
            3. Boolean.
            4. Undefined.
            5. Null.
            6. BigInt
            7. Symbole.


     - Types of Non-Primitive datatypes:

        - Array 
        - Object 
            - literal way
            - Constructor way
            - Object.create()
            - Constructor function way
        - Array of an Object
        - Functions
        - Sets
        - Maps
            .
            .
            .
            .
            .

*/


/*1. String: It is collection of characters . It can be created two ways:

// 1. String literal way: recom
let course = "JavaScript";
console.log(course);
console.log(typeof course); 
console.log(course.length); 

// 2. String constructor way: new 

let mode = new String('offline/online')
console.log(mode);
console.log(typeof mode);

*/


/* 2. Number: It can be created two ways:

// 1. Number literal way
let fee = 40000;
console.log(fee);
console.log(typeof fee);

// 2. Number constructor way:
let discountFee = new Number(3000)
console.log(discountFee);
console.log (typeof discountFee);

*/

/* 3. Boolean:

*/

/*
// 1. Boolean Literal way:

let isClassAvailable = false;
console.log(isClassAvailable);
console.log(typeof isClassAvailable);

// 2. Boolean Constructor way:
let isClassCompleted = new Boolean(true);
console.log(isClassCompleted);
console.log(typeof isClassCompleted);
*/


/* 4.  Undefined 

let isClassEmpty;
console.log(isClassEmpty);

*/

/*5 Null: Empty */
/*
let table = null;
console.log(table);


table = 'Sanjay';
table = 100.986;
console.log(table);
*/

////////////////////////////////////////////////////////////////////////////////
// Non-Primitive- Datatypes:


// 1. Array: Literal way

/*
let course = ['HTML','CSS','JS','BTS','React'];
console.log(course);
console.log(typeof course); // Object
console.log(course.length); 


// 2. Array constructor way:
let technology = new Array('Front-end','back-end');
console.log(technology);
console.log(typeof technology);  

*/
/*

// 2. Object: 

let details = {
    name: 'Akash',
    course: 'JFS',
    mode: 'Online / Offline'
}

console.log(details);


// 2. Constructor way:

let newObject = new Object();

newObject.fee = 10000
console.log(newObject); // {}


// Array of an Object

let list = [
    {
        name: 'Akash',
        course: 'JFS',
        mode: 'Online / Offline'
    },
    {
        name: 'Akash',
        course: 'JFS',
        mode: 'Online / Offline'
    },
    {
        name: 'Akash',
        course: 'JFS',
        mode: 'Online / Offline'
    }
]

console.log(list);
*/
// Literal way of creating a string
let koti='Hello, World!';
console.log(koti);
console.log(typeof koti);
console.log(koti.length);


//Constructor way of creating a string
let koti2=new String('Hello, World!');
console.log(koti2);         // Hello, World!
console.log(typeof koti2); // object
console.log(koti2.length);  // 13

//Literal way of creating a number
let num1=123;
console.log(num1); // 123
console.log(typeof num1); // number

//Constructor way of creating a number
let num2=new Number(123); 
console.log(num2); // [Number: 123]
console.log(typeof num2); // object

//Literal way of creating a boolean
let bool1=true;
console.log(bool1);
console.log(typeof bool1);  

//Constructor way of creating a boolean
let bool2=new Boolean(false);
console.log(bool2);
console.log(typeof bool2);

//Literal way of creating an object
let obj1={name:'Koti',age:22};
console.log(obj1);
console.log(typeof obj1);

//Constructor way of creating an object
let obj2=new Object({name:'Koti',age:22});
console.log(obj2);
console.log(typeof obj2);

//Literal way of creating an array  
let arr1=[1,2,3,4,5];
console.log(arr1);
console.log(typeof arr1);   

//Constructor way of creating an array
let arr2=new Array(1,2,3,4,5); 
console.log(arr2);
console.log(typeof arr2);   
