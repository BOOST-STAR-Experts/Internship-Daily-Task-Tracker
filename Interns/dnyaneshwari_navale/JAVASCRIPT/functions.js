// named function
console.log("Named Function : ")
function getData1({name,age}){
    console.log(`Name: ${name}, Age: ${age}`);

}
getData1({name:"Raju", age:30});

function isEven1(num) {
    return num % 2 == 0;
}
console.log(isEven1(2));

function isOdd1(num) {
    return num % 2 != 0;
}
console.log(isOdd1(2));

function fibonacci1(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}
console.log(fibonacci1(5));

function square1(n) {
    let arr = [];
    for(let i=0; i<=n; i++){
        arr[i] = i*i;
    }
    return arr;
}
console.log(square1(5));
console.log();

// arrow function 
console.log("Arrow Function : ")
const getData = ({name,age}) =>{
    console.log(`Name: ${name}, Age: ${age}`);
};
getData({name:"Ram", age:20});

const isEven = num => num % 2 == 0;
console.log(isEven(2));

const isOdd = num => num % 2 != 0;
console.log(isOdd(2));

const fibonacci = n => {
    let arr = [0,1];
    for(let i = 2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr;
}
console.log(fibonacci(5));

const square = n =>{
    let arr = [];
    for(let i=0; i<=n; i++){
        arr[i] = i*i;
    }
    return arr;
}
console.log(square(5));
console.log();

// immediately invoked function expression IIFE
console.log("immediately invoked function expression :");
(function (){
    let n = 5;
    let arr = [];
    for(let i=0; i<=n; i++){
        arr[i] = i*i*i;
    }
    console.log(arr);
})();
console.log();

// higher order function 
console.log("Higher order function :");

function hof(func, num) {
    return func(num);
}
function cube(num) {
    return num ** 3;
}
const num = 3;
const result = hof(cube, num);

console.log(`Cube of ${num} is ${result}`);

const arr1 = [1, 2, 3, 4, 5];
const even = arr1.filter(num => num % 2 == 0);
console.log(even);

const arr2 = [1, 2, 3, 4, 5];
const odd = arr1.filter(num => num % 2 != 0);
console.log(odd);

const arr3 = [1, 2, 3, 4, 5];
const arrSquare = arr2.map(num => num ** 2);
console.log(arrSquare); 
