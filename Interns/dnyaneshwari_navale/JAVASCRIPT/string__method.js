var str = "Test_String";

// toString
var a = 10;
console.log("Original: " + typeof(a));
console.log("Use of toString: " + typeof(a.toString()));

// string length
var length = str.length;
console.log("Length: "+ length);
// console.log(length);

// string charAt
var char = str.charAt(1);
console.log("charAt: " + char);
// console.log(char);

// indexof
var str1 = "find index of string from given string";
var index = str1.indexOf("string");
console.log("IndexOf: " + index);

// lastindexof
var last = str1.lastIndexOf("string");
console.log("LastindexOf: " + last);

// string slice  slice(start, end)
var slc = str.slice(3);
console.log("slice: " + slc);
// console.log(slc);

var slc = str.slice(3,7);
// console.log(slc);

var slc = str.slice(-3,7);
console.log("slice -index: " + slc);
// console.log(slc);

// string substring   substring(start, end)
var Substring = str.substring(3,7);
console.log("substring: " + Substring);
// console.log(Substring);

var Substring = str.substring(-3,7);
console.log("substring -index: " + Substring);
// console.log(Substring);

// string str   substr(start, length)
var Substr = str.substr(2,5);
console.log("substr: " + Substr);
// console.log(Substr);

// string lowercase
var lower = str.toLowerCase();
console.log("Lowercase: " + lower);

// string lowercase
var upper = str.toUpperCase();
console.log("Uppercase: " + upper);

// string concat
var concatenation = str.concat(" + ","Updated-string");
console.log("concatenation: " + concatenation);
// console.log("test" + "string");

// string trim
var str2 = "         string trimed";
var trim = str2.trim();
console.log("Trim: " + trim);

// string replace
var replacestr = str.replace("Test_String","Replace_string");
console.log( "Replace: " + replacestr);