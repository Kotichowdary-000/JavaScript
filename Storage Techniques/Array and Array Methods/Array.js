// // Array is a special variable, which can hold more than one value
// let fruits = ["Banana", "Orange", "Apple", "Mango",];
// let fruits2 = new Array("Banana", "Orange", "Apple", "Mango");
// console.log(fruits);
// //Accessing the elements of an array
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// //Looping through the elements of an array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// //Array Methods
// //toString() method
// console.log(fruits.toString());
// //join() method
// console.log(fruits.join(" - "));
// //pop() method
// fruits.pop();   
// console.log(fruits);
// //push() method
// fruits.push("Kiwi");
// console.log(fruits);
// //shift() method
// fruits.shift();
// console.log(fruits);
// //unshift() method
// fruits.unshift("Lemon");
// console.log(fruits);
// //delete keyword
// delete fruits[0];
// console.log(fruits);
// //concat() method
// let moreFruits = ["Pineapple", "Grapes"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);
// //splice() method
// allFruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(allFruits);
// //slice() method
// let citrus = allFruits.slice(1, 3);
// console.log(citrus);
// //sort() method
// allFruits.sort();
// console.log(allFruits);
// concat() method
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// //reverse() method
// allFruits.reverse();
// console.log(allFruits);
// //Array of numbers
// let numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort(function(a, b){return a - b});
// console.log(numbers);
// numbers.sort(function(a, b){return b - a});
// console.log(numbers);
// //Array of objects  
// let cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ];
// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);
// cars.sort(function(a, b){return b.year - a.year});
// console.log(cars);
// //find() method
// let findResult = numbers.find(function(value){return value > 18});
// console.log(findResult);
// //filter() method
// let filterResult = numbers.filter(function(value){return value > 18});
// console.log(filterResult);

// //map() method
// let mapResult = numbers.map(function(value){return value * 2});
// console.log(mapResult);
// //reduce() method
// let reduceResult = numbers.reduce(function(total, value){return total + value});
// console.log(reduceResult);
// //forEach() method
// numbers.forEach(function(value){console.log(value)});
// //Array.from() method
// let str = "Hello World";
// let arrFromStr = Array.from(str);
// console.log(arrFromStr);
// //Array.isArray() method
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(str));
// //Array.of() method
// let arrOf = Array.of(1, 2, 3, 4, 5);
// console.log(arrOf);
// //fill() method
// arrOf.fill(0);
// console.log(arrOf);
// //copyWithin() method
// let copyArr = [1, 2, 3, 4, 5];
// copyArr.copyWithin(0, 3);
// console.log(copyArr);
// //flat() method
// let nestedArr = [1, 2, [3, 4], [5, 6]];
// let flatArr = nestedArr.flat();
// console.log(flatArr);
// //flatMap() method
// let flatMapArr = nestedArr.flatMap(x => x);
// console.log(flatMapArr);    
// //keys() method


///// sorting without inbuilt function//////////
// let arr=[5,3,8,4,2];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];   
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);
// slice



