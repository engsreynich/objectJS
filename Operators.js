// let y = 10;
// console.log(`The value of Y : ${y}`);

// y += 3;
// console.log(`The value of Y after using addition assignment: ${y}`);

// y -= 5;
// console.log(`The value of Y after using substraction assignment: ${y}`);

// y *= 5;
// console.log(`The value of Y after using multiplition assignment: ${y}`);

// y /= 1;
// console.log(`The value of Y after using division assignment: ${y}`);

// y %= 2;
// console.log(`The value of Y after using remainser assignment: ${y}`);

// y *= 4;
// console.log(`The value of Y after using exponentation assignment: ${y}`);

//comparision operator

// let num1 = 10;
// let num2 = 20;

// let result = num1 == num2;
// console.log(`The result of equal to assignment : ${result}`); // false

// let input1 = prompt("Enter variable A: ");
// let input2 = prompt("Enter variable B: ");
// //let compare = parseInt(input1) > parseInt(input2);
// if (input1 > input2) {
//   alert("The value A is greater than value B");
// } else {
//   alert("The value B is greater tha value A");
// }

///logical
// let n1 = 10;
// let n2 = 40;
// let n3 = 10;
// let n4 = 40;

// let resultOflogicalAND =( n1 < n4) && (n2 == n3);
// console.log(`The result of using  Logical AND : ${resultOflogicalAND}`);

// let resultOflogicalOR = (n1 < n4 )||( n2 == n3);
// console.log(`The result of using  Logical OR : ${resultOflogicalOR}`);

// let resultOflogicalNOT = !(resultOflogicalAND);
// console.log(`The result of using  Logical NOT : ${resultOflogicalNOT}`);

//Ternary Operators  srdeang condition

let result = 30 >= 50 ? 'pass': 'fail'
console.log(result);

const Animal = {
    species : 'mammal',
    name: 'dog',
    legs: 4

};
const resultOfAnimal = Animal.legs == 4 ? Animal.name : 'It is not Animal.';

console.log(`The result of Animal type : ${resultOfAnimal}`);