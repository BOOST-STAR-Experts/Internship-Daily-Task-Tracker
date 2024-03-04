const quiz=[{
    question: "Which of the following year is a leap year?",
    opt1: "2023",
    opt2: "2001",
    opt3: "1999",
    opt4: "2004",
    answer:"2004"
},
{
    question: "Who wrote the National Anthem - Jana Gana Mana?",
    opt1: "Subhash Chandra Bose",
    opt2: "Rabindranath Tagore",
    opt3: "Bankim Chandra Chatterjee",
    opt4: "Dr. B.R.Ambedkar",
    answer:"Rabindranath Tagore"
},
{
    question: "Who is current President of India?",
    opt1: "A.P.J Abdul Kalam",
    opt2: "Ram Nath Kovind",
    opt3: "Droupai Murmu",
    opt4: "Pranab Mukherjee",
    answer:"Droupai Murmu"
},
{
    question: "Where is India's Silicon Valley located?",
    opt1: "Chennai",
    opt2: "Bhopal",
    opt3: "Mumbai",
    opt4: "Bangalore",
    answer:"Bangalore"
},
{
    question: "What is full form of BSF?",
    opt1: "Border Security Force",
    opt2: "Bharat Security Force",
    opt3: "Better Safety Force",
    opt4: "Bangladesh Safety Force",
    answer:"Border Security Force"
}]
const option_a=document.getElementById("text_option_a");
const option_b=document.getElementById("text_option_b");
const option_c=document.getElementById("text_option_c");
const option_d=document.getElementById("text_option_d");
const answerElement=document.querySelectorAll(".answer");
const question=document.getElementById("question");
console.log(question);
console.log(option_a);
console.log(quiz[1].question);

const submit=document.getElementById("submit");
let currentQuestion=0;
let score=0;
console.log(submit);
question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].opt1;
option_b.textContent=quiz[currentQuestion].opt2;
option_c.textContent=quiz[currentQuestion].opt3;
option_d.textContent=quiz[currentQuestion].opt4;

console.log(answerElement);

submit.addEventListener("click",() => {
    const checkedAns=document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);
    if(checkedAns === null){
        alert("Please select an answer");
    }
    else
    {
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].opt1;
            option_b.textContent = quiz[currentQuestion].opt2;
            option_c.textContent = quiz[currentQuestion].opt3;
            option_d.textContent = quiz[currentQuestion].opt4;
            checkedAns.checked = false;
            console.log(option_a.textContent)
        }
        else
        {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
})
