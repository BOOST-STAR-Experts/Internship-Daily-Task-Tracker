let a = 20;
let b = 10;
// arithmetic

let add = a+b;
console.log(add);

let sub = a-b;
console.log(sub);

let mul = a*b;
console.log(mul);

let div = a/b;
console.log(div);

let expo = a**b;
console.log(expo);

let rem = a%b;
console.log(rem);

let I = a++;
console.log(I);
b++;
let I2 = b;
console.log(b);

let a1 = 30;
let b1 = 40;

let D = a1--;
console.log(D);
b1--;
let D2 = b1;
console.log(b1);

// assignment 
console.log("a = " + a);
a += 10;
console.log(a);

a -= 10;
console.log(a);

a *= 10;
console.log(a);

a /= 10;
console.log(a);

a **= 10;
console.log(a);

a %= 10;
console.log(a);

// comparison

let m = "10";
let n = 10;

console.log(m==n);
console.log(m===n);
console.log(m!=n);
console.log(m!==n);

 m = "20";
 n = 10;
console.log(m>n);
console.log(m<n);
console.log(m>=n);
console.log(m<=n);

// logical 

let x = 10;
let y = 5;

console.log(x<20 && y>1);
console.log(x<5 && y>1);

console.log(x<20 || y>1);
console.log(x<5 || y>1);

console.log(!(x==y));
console.log(!(x!=y));

// ternary 

let age = 20;
var allowed = (age < 18) ? "NO" : "YES";
console.log(allowed);

// Bitwise

let u = 8;    // 1000
let v = 10;   // 1010
let w = 2;    // 0101
let p = -5;

console.log(u & v);     // 1000 & 1010 => 1000
console.log(u | v);     // 1000 | 1010 => 1010
console.log(u ^ v);     // 1000 ^ 1010 => 0010  bits same:0 diff: 1
console.log(~ w);       // ~ 0000 0010 => 1111 1101
console.log(u << w);    // 1000 << 2 => 32  
console.log(u >> w);   // 1000 >>> 2 => 2
console.log(u >>> w);    // 1000 >> 2 => 2  








// console.log(u << w);    // 1000 << 2 => 32 : n zero bits shift in from right 
// console.log(p >> w);   // 1000 >>> 2 => -3 : (+)rightmost n bits shifted off and n no of 0 bits shifted in from left.  (-)rightmost n bits shifted off and n no of 1 bits shifted in from left.preserves the negative sign.
// console.log(u >>> w);    // 1000 >> 2 => 2  : rightmost n bits shifted off and n no of 0 bits shifted in from left.

// // // console.log(v <<< u); error