const btn=document.getElementById('calculate');
btn.addEventListener('click',function()
{
let height=document.querySelector('#height').value;
let weight=document.querySelector('#weight').value;

if(height == '' || weight == '')
{
alert('please fill all the fields!');
return;
}

height= height /  100
let BMI=(weight / (height*height));



BMI=BMI.toFixed(2);
document.querySelector('#result').innerHTML=BMI;

let status='';
if(BMI<18.5)
{
    status="under weight below";
    //document.querySelector('.comment').innerHTML = status;
}
if(BMI > 18.6 && BMI < 25)
{
    status="healthy";
    //document.querySelector('.comment').innerHTML = status;
}

if(BMI > 25 && BMI < 30)
{
    status="overweight";
    //document.querySelector('.comment').innerHTML = status;
}  
if(BMI >= 30)
{
    status="Obese";   
   // document.querySelector('.comment').innerHTML = status;
}
document.querySelector('.comment').innerHTML =`Comment: you are <span id="comment1"> ${status}</span>`;

});