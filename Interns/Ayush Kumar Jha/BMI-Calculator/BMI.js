function calculateBMI(weight, height) {
    return weight / (height * height);
}

function determineBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


const weight = 58; 
const height = 1.60; 

const bmi = calculateBMI(weight, height);

const bmiCategory = determineBMICategory(bmi);

console.log("Your Body Mass Index is:", bmi, "and");
console.log("You are", bmiCategory + ".");
