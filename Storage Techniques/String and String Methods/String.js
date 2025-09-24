
/* 

 String: String is the combination of all (any char, any spec char, numbers) that can be presnetend single quotes or double qoutes. 


  Stirng can be created two ways:
    1. literal way
    2. Constructor way

*/ 



/*
// String literal way:
console.log(`- String literal way: -`);

let Name = 'JavaScript';
console.log(Name);
console.log(typeof Name);
console.log(Name.length);

console.log(`-  Constructor way way -`);

let fee = new String(30000);
console.log(fee);


// Single quotes:
let msg = 'Anirudh said to chitti, " I am busy now..!"'
console.log(msg);

// double qoutes
let time = "'It's 10 o' clock";
console.log(time);

// backticks / template literal 

let name  = 'Anirudh';
let place = 'BTM';

// console.log('My name is ' + name + 'I am from ' + place );
console.log(`My name is ${name} and I am from ${place}`);


*/


// String methods:

// let Name = 'UI Development';
// console.log(Name.length);

// // 1. indexOf()
// console.log(Name.indexOf('e')); 

// // 2. lastIndexOf()
// console.log(Name.lastIndexOf('e'));

// // 3. charAt(index based number)
// console.log(Name.charAt(0)); // U
// console.log(Name.charAt(1)); // t
// console.log(Name.charAt(2)); // t
// console.log(Name.charAt(3)); // t


// // 4. charCodeAt(): ASCII table

// console.log(Name.charCodeAt(0)); // U 
// console.log(Name.charCodeAt(1)); // I 

// // 5. toLowerCase()
// console.log(Name.toLowerCase());


// // 6. toUpperCase()
// console.log(Name.toUpperCase());

// // 7. Split():
// console.log(Name.split());

// // // 8. replace('old word','new word')
// // console.log(Name.replace('UI','Front-End'));


// // // 9. replaceAll('old word','new word')
// // console.log(Name.replaceAll('UI','Front-End'));


// // 10. includes():
// console.log(Name.includes('Y')); // 


// // 11. substring('from index','last number'):

// console.log(Name.substring(3,14));

let Name="Koteswara Rao ";
//Length of string
console.log(Name.length);
//Convert to upper case 
console.log(Name.toUpperCase());
//Convert to lower case
console.log(Name.toLowerCase());
//indexOf a string
console.log(Name.indexOf("S"));
//lastIndexOf a string
console.log(Name.lastIndexOf("S"));
// charAt a index
// console.log(Name.charAt(5));
for(let i=0;i<Name.length;i++){
    console.log(Name.charAt(i));
}
//charCodeAt a index
console.log(Name.charCodeAt(5));
for(let i=0;i<Name.length;i++){
    console.log(Name.charCodeAt(i));
}
//includes a string
console.log(Name.includes("R"));
//substring a string
console.log(Name.substring(0,5));
//split a string
console.log(Name.split(" "));
//replace a string
console.log(Name.replace("Koteswara","Koti"));

