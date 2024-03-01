
function checkType(value) {
    switch (typeof value) {
        case "number":
            console.log(value + " is a number.");
            break;
        case "string":
            console.log("'" + value + "' is a string.");
            break;
        case "boolean":
            console.log(value + " is a boolean.");
            break;
        case "object":
            console.log("It is an object.");
            break;
        default:
            console.log("The type of the value is not recognized.");
            break;
    }
}

checkType(10); 
checkType("Hello"); 
checkType(true); 
checkType({ firstName:"John", lastName:"Doe", age:50, eyeColor:"blue" });
checkType(null); 
checkType(undefined);
checkType();
 


























































// function characterClassification(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log("'" + char + "' is a vowel.");
//             break;
            
//         default:
//             if (char.match(/[a-zA-Z]/)) {
//                 console.log("'" + char + "' is a consonant.");
//             } 
//             break;
//     }
// }

// const str = "Hello World!";
// for (let i = 0; i < str.length; i++) {
//     if(str[i]== ' ')continue;
//     characterClassification(str[i]);
// }
