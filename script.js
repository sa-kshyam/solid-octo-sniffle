const question = [
    {
        question: "Which animal is the largest in the world.",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]

    },
    {
        question: "Which is the smallest continent in the world.",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "North America", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world.",
        answers: [
            { text: "Kalakhari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctic Desert", correct: true },
        ]
    },
    {
        question: "Which is the smallest country in the world.",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Nepal", correct: false },
            { text: "Russia", correct: false },
            { text: "Maldives", correct: false },
        ]
    },
    {
        question: "Where is Mount Everest located?",
        answers: [
            { text: "China", correct: false },
            { text: "India", correct: false },
            { text: "Nepal", correct: true },
            { text: "Bhutan", correct: false },
        ]
    },
    {
        question: "Which planet in our solar system is known for prominent ring system.",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "What is the powerhouse of cell.",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic Reticulum", correct: false },
        ]
    },
    {
        question: "What is the longest river in the world.",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false},
            { text: "Mississipi River", correct: false },
        ]
    },
    {
        question: "Who painted 'Mona lisa'.",
        answers: [
            { text: "Vincent Van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo picasso", correct:  false},
            { text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "Which year did the Titanic sink.",
        answers: [
            { text: "1912 A.D", correct: true },
            { text: "1905 A.D", correct: false },
            { text: "1920 A.D ", correct: false },
            { text: "1912 B.C", correct: false },
        ]
    },
    {
        question: "Which country won the 2022 FIFA men's Football World Cup.",
        answers: [
            { text: "France", correct: false },
            { text: "Germany", correct: false },
            { text: "Brazil", correct: false },
            { text: "Argentina", correct: true },
        ]
    },
    {
          question: "Which counry won the first ever FIFA World Cup in 1930.",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Argentina", correct: false },
            { text: "Uruguay", correct: true },
            { text: "Italy", correct: false },
        ]
    },
    {
          question: "Which language has the most native speakers in the world.",
        answers: [
            { text: "English", correct: false },
            { text: "Hindi ", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin Chinese", correct: true },
        ]
    },
    {
          question: "Which is the closest star to Earth.",
        answers: [
            { text: "Alpha Centauri", correct: false },
            { text: "Proxima Centauri", correct: false },
            { text: "The Sun", correct: true },
            { text: "Sirius", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {

    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");  
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    }); 
} 


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; 
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();
