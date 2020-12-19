const chrisQuestions = [
    {
        question: "What is Chris's favorite dog breed?",
        choices: ["Beagle", "Golden Retriever", "Pug", "German Shepherd"],
        answer: "Golden Retriever"
    },

    {
        question: "What was Chris's favorite subject in school?",
        choices: ["English", "Science", "Math", "PE"],
        answer: "Math"
    },

    {
        question: "What is Chris's favorite sport?",
        choices: ["Soccer", "Volleyball", "Cheerleading", "Basketball"],
        answer: "Basketball"
    },

    {
        question: "What is Chris's favorite place to eat?",
        choices: ["In n Out", "Popeyes", "Taco Bell", "Chick fil A"],
        answer: "In n Out"
    },

    {
        question: "What is Chris's signature dance move?",
        choices: ["Stanky Leg", "The Whoa", "The Wave", "The Algebra"],
        answer: "The Algebra",
    },

    {
        question: "What is Chris's go to drink at restaurants?",
        choices: ["Sprite", "Ice tea with no ice", "Water", "Coke"],
        answer: "Ice tea with no ice"
    },

    {
        question: "How did Chris get his name?",
        choices: ["Dad named him after dead relative", "Mom saw name in a baby-names book", "Randy really liked Whinnie the Pooh", "Close friend suggested it"],
        answer: "Randy really liked Whinnie the Pooh"
    },

    {
        question: "Does his last name have a 'ñ' in it?",
        choices: ["Yes", "No", "Legally, no", "Legally yes but Chris never uses it"],
        answer: "Legally, no"
    },

    {
        question: "What is Chris's favorite color?",
        choices: ["Red", "Orange", "Pink", "Green"],
        answer: "Green"
    },

    {
        question: "What is Chris's favorite flower?",
        choices: ["Tulips", "Daisies", "Roses", "Sunflowers"],
        answer: "Sunflowers"
    }
];

const startBtn = document.getElementById("start");
const rules = document.getElementById("rules");
const titleWarning = document.getElementById("warning");

// timer variables
const seconds = document.createElement("p");
seconds.className = "timer";
let count = 60;

// score variable
let score = 0;

const currentScore = document.createElement("p");
currentScore.className = "timer";




// display question

let questionDisplay = document.createElement("p");
questionDisplay.className = "question-text";
let currentQuestion = 0;




function chooseQuiz() {
    console.log("hey this is still working");
    startBtn.className = "display-none";
    rules.innerHTML = "";

    const chooseWho = document.createElement("p");
    chooseWho.textContent = "Who would you like to be quizzed on?"
    chooseWho.className = "header-text";

    const chrisBtn = document.createElement("button");
    const natalyBtn = document.createElement("button");
    const mikeyBtn = document.createElement("button");
    const melissaBtn = document.createElement("button");

    chrisBtn.textContent = "Chris";
    natalyBtn.textContent = "Nataly";
    mikeyBtn.textContent = "Mikey";
    melissaBtn.textContent = "Melissa";

    chrisBtn.className = "btn btn-lg btn-outline-success m-4 choose-who-text";
    natalyBtn.className = "btn btn-lg btn-outline-info m-4 choose-who-text";
    mikeyBtn.className = "btn btn-lg btn-outline-primary m-4 choose-who-text";
    melissaBtn.className = "btn btn-lg btn-outline-warning m-4 choose-who-text";

    rules.append(chooseWho, chrisBtn, natalyBtn, mikeyBtn, melissaBtn);

    chrisBtn.addEventListener("click", function () {
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Time left: " + count;
            titleWarning.appendChild(seconds);
            if (count < 0) {
                clearInterval(timer);
                console.log("the game has ended");
            }
            chrisQuiz();
        }, 1000);
        
    });

    natalyBtn.addEventListener("click", function () {
        console.log("hey this is nataly");
    });

    mikeyBtn.addEventListener("click", function () {
        console.log("hey this is mikey");
    });

    melissaBtn.addEventListener("click", function () {
        console.log("hey this is melissa");
    })
};

chrisQuiz = function() {
    rules.innerHTML = '';
   
    currentScore.textContent = `Your score : ${score}`;
    titleWarning.appendChild(currentScore);

    let question = chrisQuestions[currentQuestion];
    questionDisplay.textContent = question.question;

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {

        let answersBtn = document.createElement("button");
        answersBtn.className = "choices-class btn btn-lg btn-outline-dark m-2";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", chrisCheckAnswer);
    };
}

function chrisCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });
    if (event.target.textContent === chrisQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }
    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;
    if (currentQuestion < chrisQuestions.length) {
        chrisQuiz();
    }
    else {
        console.log("the game has ended!");
        endQuiz();
    }
}

// time penalty
function appendTime() {
    count -= 10;
    if (count < 0) {
        count = 0;
    }
}

// add to score if question answered correctly
function addPoints() {
    score += 10;
}

function removePoints() {
    score -= 10;
    if (score < 0) {
        score = 0;
    }
}

function endQuiz() {
    console.log("this is where the score would go");
}


startBtn.addEventListener("click", function () {
    chooseQuiz();
});
