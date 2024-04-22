// // //square
// // const square = function (number) {
// //     return number * number;
// //   };
  
// //arrow function 
// const square=(number)=> number*number;

// console.log(square(5));
//   console.log(square(4)); // 16

//   //factorial
//   function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   console.log(factorial(4)); //
// //
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }
// console.log(multiply());

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }
// console.log(getScore()); // "Chamakh scored 5"
// //nested function
// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
//   //
//   //function outside(x) {
//     //function inside(y) {
//       //return x + y;
//   //  }
//     //return inside;
//  // }
  
//   //const fnInside = outside(); // Think of it like: give me a function that adds 3 to whatever you give it
//   //console.log(fnInside(5)); // 8
//   console.log(addSquares(2, 3)); // 13
//   console.log(addSquares(3, 4)); // 25
//   console.log(addSquares(4, 5)); // 41

//   //
// //   function outside() {
// //     const x = 9;
// //     function inside() {
// //       return x * 2;
// //     }
// //     return inside();
// //   }
  
// //   console.log(outside());

//   //arrow function
//   const outside=()=>{
//     const x=9;
//     const inside=()=>{
//         return x*2;
//     }
//     return inside();
//   }
//   console.log(outside());

// //
// // function foo(i) {
// //     if (i < 0) {
// //       return;
// //     }
// //     console.log(`begin: ${i}`);
// //     foo(i - 1);
// //     console.log(`end: ${i}`);
// //   }
// //   foo(3);
//   //arrow function
//   let foo=(i)=>{
//     if (i < 0) {
//         return;
//       }
//       console.log(`begin: ${i}`);
//       foo(i - 1);
//       console.log(`end: ${i}`);
//   }
// foo(5);

// //loop
// // function map(f, a) {
// //     const result = new Array(a.length);
// //     for (let i = 0; i < a.length; i++) {
// //       result[i] = f(a[i]);
// //     }
// //     return result;
// //   }
  
// //   const cube = function (x) {
// //     return x * x * x;
// //   };
  
// //   const numbers = [0, 1, 2, 5, 10];
// //   console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
// //arrow function
// const map=(f,a)=>{
//    const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//       result[i] = f(a[i]);
//     }
//     return result;
// }
// const cube=(x)=>x*x*x;
//   const numbers = [0, 1, 2, 5, 10];
//   console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
//   //
// //  function generate (start , end) {
// //     for (let i = start ; i <= end ; i++) {
// //         if (i === 15) {
// //          continue;
// //         }
// //         console.log(i);
// //     }
// // }
// // generate (10 , 20);

// //arrowfunction
// let generate=(start,end)=>{
//     for (let i = start ; i <= end ; i++) {
//                 if (i === 15) {
//                  continue;
//                 }
//                 console.log(i);
//             }
// }
// generate (10 , 20);

// //
// // function generateYears (start, end , exclude = 2022) {
// //     for (let i = start ; i <= end ; i++) {
// //         if (i === exclude) {
// //             continue ;                       // continue means skip this value and continue to next iteration
// //         }
// //         console.log(i);
// //     }
// // }
// // generateYears(2019 , 2024);
// //arrow function
// let generateYears=(start,end,exclude=2020)=>{
//     for (let i = start ; i <= end ; i++) {
//                 if (i === exclude) {
//                     continue ;                       // continue means skip this value and continue to next iteration
//                 }
//                 console.log(i);
//             }
// }
// generateYears(2019 , 2024);

//question1 reverse number
// const reversenumber= (num)=>{
//     num.toString();
// }
// const asma = '12345'
//question2 check input is an array 
// function isArray(input) {
    //     return Array.isArray(input);
    // //   }
    // function reverseNumber(number) {
    //     return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
    //   }
    // console.log(reverseNumber);


// //question1
  function reverseNum(num) {
    num = num + "";
    return num.split("").reverse().join("");
  }
  console.log(Number(reverseNum(852)));

  //question2
//   function isArray(input) {
//     return Array.isArray(input);
//   }
//   console.log(isArray([1, 2, 3])); // Output: true
//   console.log(isArray("hello"));   // Output: false

  //question3
function ArraytoFunction(Array){
return Array.join(" , ");
}
const fruits=["apple","bannana","orange"];
const result=ArraytoFunction(fruits);
console.log(result);

//question4 
//asc
function sortarray_asc(Array){
    return Array.sort();
 }
 //des
function sortarray_des(Array){

   return Array.sort().reverse();
  

}   
 const Array=[5,9,2,7];
console.log(sortarray_asc(Array));
console.log(sortarray_des(Array));

// question5
function even_or_odd(num){
    if (num%2==0){
      console.log(num +`  is even`);
    }
    else{
      console.log(num +`  is odd`);

    }
}
for (let i=0;i<=15;i++)
console.log(even_or_odd(i));
// question6
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  //split space as delimiter
  //map iterate each word 
  //slice  extract the reset of the word
console.log(capitalizeFirstLetter("yasmen zuheer harbi "));