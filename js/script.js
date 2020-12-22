// questions for chris's quiz
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

// questions for nataly's quiz
const natalyQuestions = [
    {
        question: "What is Nataly's favorite Taylor Swift Album?",
        choices: ["Lover", "Folklore", "Red", "Reputation"],
        answer: "Reputation"
    },

    {
        question: "What is Nataly's favorite anime?",
        choices: ["Attack On Titan", "Promised Neverland", "My Hero Academia", "Haikyu!!"],
        answer: "Attack On Titan"
    },

    {
        question: "What is Nataly's favorite TV show?",
        choices: ["Gossip Girl", "Law and Order SVU", "Forensic Files", "Riverdale"],
        answer: "Law and Order SVU"
    },

    {
        question: "What is a place Nataly has always wanted to visit?",
        choices: ["Egypt", "Greece", "Italy", "Tokyo"],
        answer: "Greece"
    },

    {
        question: "What is Nataly's biggest goal as a witness?",
        choices: ["School of Evangelizers", "Bethelite", "Special Pioneer", "LDC"],
        answer: "School of Evangelizers",
    },

    {
        question: "What is Nataly's favorite Hunger Game's movie?",
        choices: ["Catching Fire", "Mockingjay Pt 1", "Mockingjay Pt 2", "The Hunger Games"],
        answer: "Catching Fire"
    },

    {
        question: "How old was Nataly when she got baptized?",
        choices: ["10", "12", "9", "8"],
        answer: "9"
    },

    {
        question: "What is Nataly's favorite number?",
        choices: ["90", "13", "7", "15"],
        answer: "15"
    },

    {
        question: "What is Nataly's favorite season?",
        choices: ["Spring", "Fall", "Summer", "Winter"],
        answer: "Fall"
    },

    {
        question: "What is Nataly's go to Starbucks drink?",
        choices: ["Matcha Green Tea", "Cold Brew", "Strawberry Acai", "White Chocolate Mocha"],
        answer: "Strawberry Acai"
    }
];

// questions for melissa's quiz
const melissaQuestions = [
    {
        question: "What is Melissa's favorite dog breed?", 
        choices: ["Weiner Dog", "German Shepherd", "Dobermann", "Husky" ], 
        answer: "Dobermann"
    }, 
    {
        question: "How tall is Melissa?", 
        choices: ["5'5", "5'8", "5'7", "5'6"], 
        answer: "5'7"
    },
    {
        question: "What is Melissa's favorite Bath and Body Works candle scent?", 
        choices: ["Watermelon Lemonade", "Fresh Balsam", "Eucalyptus Rain", "Black Tie"], 
        answer: "Fresh Balsam"
    }, 
    {
        question: "Where would Melissa live, if she could?", 
        choices: ["Ireland", "Greenland", "Canada", "France"], 
        answer: "Canada"
    }, 
    {
        question: "What is Melissa's dumb fear?", 
        choices: ["Getting hand stuck in the garbage disposal", "Being alone in the dark", "Crashing into a deer", "Choking on a popcorn kernel"], 
        answer: "Being alone in the dark"
    }, 
    {
        question: "What is Melissa's favorite band?", 
        choices: ["Cage the Elephant", "The 1975", "Wallows", "Coldplay" ], 
        answer: "The 1975"
    }, 
    {
        question: "What is Melissa's favorite animal?", 
        choices: ["Anteater", "Red Panda", "Panda", "Black Bear"], 
        answer: "Red Panda"
    }, 
    {
        question: "If Melissa could choose to be one superhero, who would she be?", 
        choices: ["The Wasp", "SpiderMan", "Doctor Strange", "Scarlett Witch"], 
        answer: "Scarlett Witch"
    }, 
    {
        question: "What is Melissa's preffered item of jewelry?", 
        choices: ["Necklaces", "Earrings", "Rings", "Ankle Bracelets"], 
        answer: "Earrings"
    }, 
    {
        question: "Who was Melissa's first concert?", 
        choices: ["The 1975", "Coldplay", "One Direction", "Taylor Swift"],
        answer: "One Direction" 
    }
];


const startBtn = document.getElementById("start");
const rules = document.getElementById("rules");
const titleWarning = document.getElementById("warning");

// timer variables
const seconds = document.createElement("p");
seconds.className = "timer";
let count = 120;

// score variable
let score = 0;

const currentScore = document.createElement("p");
currentScore.className = "timer";

// display question

let questionDisplay = document.createElement("p");
questionDisplay.className = "question-text col-12";
let currentQuestion = 0;

// show final score
const scoreDiv = document.getElementById("scoreContainer");

// play again ??
const playAgainBtn = document.createElement("button");
playAgainBtn.className = "btn btn-lg btn-outline-danger";
playAgainBtn.textContent = "Play Again";





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

            currentScore.textContent = `Your score : ${score}`;
            titleWarning.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        chrisQuiz();
    });

    natalyBtn.addEventListener("click", function () {
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Time left: " + count;
            titleWarning.appendChild(seconds);

            currentScore.textContent = `Your score : ${score}`;
            titleWarning.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        natalyQuiz();
    });

    mikeyBtn.addEventListener("click", function () {
        console.log("hey this is mikey");
    });

    melissaBtn.addEventListener("click", function () {
        console.log("hey this is melissa");
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Time left: " + count;
            titleWarning.appendChild(seconds);

            currentScore.textContent = `Your score : ${score}`;
            titleWarning.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        melissaQuiz();
    })
};

// chris quiz
chrisQuiz = function () {
    rules.innerHTML = '';

    let question = chrisQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "choices-class btn btn-lg btn-outline-dark m-2 col-6";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", chrisCheckAnswer);
    };
}

function chrisCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === chrisQuestions[currentQuestion].answer) {
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

// nataly quiz
function natalyQuiz() {
    rules.innerHTML = '';

    let question = natalyQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "choices-class btn btn-lg btn-outline-dark m-2 col-6";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", natalyCheckAnswer);
    };
}

function natalyCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === natalyQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }

    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;

    if (currentQuestion < natalyQuestions.length) {
        natalyQuiz();
    }

    else {
        console.log("the game has ended!");
        endQuiz();
    }
}

// melissa quiz
function melissaQuiz() {
    rules.innerHTML = '';

    let question = melissaQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "choices-class btn btn-lg btn-outline-dark m-2 col-6";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", melissaCheckAnswer);
    };
}

function melissaCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === melissaQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }

    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;

    if (currentQuestion < melissaQuestions.length) {
        melissaQuiz();
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
    score -= 5;
    if (score < 0) {
        score = 0;
    }
}

function endQuiz(timer) {
    clearInterval(timer);

    // timer
    seconds.className = "display-none";
    seconds.className = "display-none";
    // questions
    rules.className = 'display-none';
    // score 
    titleWarning.className = "display-none";

    // final score showing

    const totalScore = document.createElement("h2");
    totalScore.className = "scary-text";
    totalScore.textContent = `Your final score is : ${score} / 100`;

    scoreDiv.append(totalScore, playAgainBtn);
}

playAgainBtn.addEventListener("click", function () {
    scoreDiv.className = "display-none";
    rules.className = "display";
    chooseQuiz();
})


startBtn.addEventListener("click", function () {
    chooseQuiz();
});
