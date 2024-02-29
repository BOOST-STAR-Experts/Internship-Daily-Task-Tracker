const output = document.getElementById("output");

function calculateBMI(height, weight){
    return BMI = weight / (height * height);
}

function findcategory(BMI){
    if(BMI < 18.5) return "Underweight";
    else if(BMI >= 18.6 && BMI <= 24.9) return "Healthy";
    else if(BMI >= 25 && BMI <= 25.9) return "Overweight";
    else if(BMI >= 30) return "Obese";
}

async function showOutput(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const BMI = calculateBMI(height, weight);
    const category = await findcategory(BMI);
    output.innerHTML = `
    <p>Your Body Mass Index is: ${BMI} and You are ${category}.</p>`
}