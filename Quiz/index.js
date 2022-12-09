// the questions

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


// The score tracker

let totalScore = 0;


// creating the start button function starting_game() and creating the question cards

function starting_game() {
    let question_sectionNode = document.getElementsByClassName("question_section")[0];
    question_sectionNode.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        //creating the card
        let questionCard = document.createElement("div");
        questionCard.classList.add("question_card");

        //creating the card content
        let questionTitle = document.createElement("h3");
        let questionType = document.createElement("p")
        let questionDifficulty = document.createElement("p")
        let questionText = document.createElement("p")
        let questionOptionContainer = document.createElement("div")
        
        //modifying card content
        questionTitle.innerText = `Question number: ${i+1}`;
        questionType.innerText =  `Type: ${questions[i].type}`;
        questionDifficulty.innerText = `Difficulty: ${questions[i].difficulty}`;
        questionText.innerText = questions[i].question;
        questionOptionContainer.classList.add("options_container");
        
        //creating the choices
        let arrayOfChoices = questions[i].incorrect_answers;
        let correctAnswer = questions[i].correct_answer;
        arrayOfChoices.push(questions[i].correct_answer);
        arrayOfChoices.sort(() => 0.5 - Math.random());
        //console.log(arrayOfChoices);
        //turning them into clickable options
        for (let j = 0; j < arrayOfChoices.length; j++) {
            //creating the buttons, Answer and continue button
            let option_button = document.createElement("button");
            let correctAnswerResponse = document.createElement("div");
            let wrongAnswerResponse = document.createElement("div");
            let continueButton = document.createElement("button");
            
            // Modifying Answer to be able to append them to EventListener
            correctAnswerResponse.innerText = "Correct!";
            correctAnswerResponse.classList.add("right_answer");
            wrongAnswerResponse.innerText = "Wrong!"
            wrongAnswerResponse.classList.add("wrong_answer");

            //Modifying continue button to append it to an EventListener
            continueButton.classList.add("continue_button");
            continueButton.innerText = "Continue";

            //Modifying the buttons
            option_button.classList.add("option_button");
            option_button.innerText = arrayOfChoices[j];

            option_button.addEventListener('click', (event) => { 
                if (event.target.innerText === correctAnswer) {
                    totalScore += 1;
                    questionOptionContainer.innerHTML = "";
                    questionOptionContainer.appendChild(correctAnswerResponse);
                    questionOptionContainer.appendChild(continueButton);
                } else {
                    questionOptionContainer.innerHTML = "";
                    questionOptionContainer.appendChild(wrongAnswerResponse);
                    questionOptionContainer.appendChild(continueButton);
                }
            })

            continueButton.addEventListener('click', () => {
                question_sectionNode.removeChild(questionCard);
            })

            questionOptionContainer.appendChild(option_button);
        }

        //append cards to questionCard div
        questionCard.appendChild(questionTitle);
        questionCard.appendChild(questionType);
        questionCard.appendChild(questionDifficulty);
        questionCard.appendChild(questionText);
        questionCard.appendChild(questionOptionContainer);

        //console.log(questionCard);

        //append questionCard to question_section div
        question_sectionNode.appendChild(questionCard);
        
    }
    
}



// creating the score popup
function ckecking_score() {
    if (totalScore < 6) {
        alert(`Your score is ${totalScore}. I am sorry, you lost.`);
    } else {
        alert(`Your score is ${totalScore}. You won the game!`);
    }
}


// EXTRA changing the cards on click

// EXTRA creating the solution cards


