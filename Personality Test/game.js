const questions = [
    {
        question: "What's your ideal day?",
        options: [
            { text: "Playing sports with friends", activity: "playing sports" },
            { text: "Taking a peaceful walk", activity: "taking walks" },
            { text: "Relaxing and enjoying a cozy moment", activity: "relaxing" }
        ]
    },
    {
        question: "How do you prefer to spend time outdoors?",
        options: [
            { text: "Running or playing games", activity: "playing sports" },
            { text: "Exploring nature slowly", activity: "taking walks" },
            { text: "Sitting under a tree with a book", activity: "relaxing" }
        ]
    },
    {
        question: "What's your vibe in a group of friends?",
        options: [
            { text: "The energetic one", activity: "playing sports" },
            { text: "The quiet observer", activity: "taking walks" },
            { text: "The one who keeps things calm", activity: "relaxing" }
        ]
    }
];

let currentQuestionIndex = 0;
let activityCounts = { "playing sports": 0, "taking walks": 0, "relaxing": 0 };

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = ""; 

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("option-button");

        button.addEventListener("click", () => {
            
            const previouslySelected = document.querySelector(".option-button.selected");
            if (previouslySelected) {
                previouslySelected.classList.remove("selected");
            }
            
            button.classList.add("selected");

            activityCounts[option.activity]++;
            nextBtn.disabled = false;
        });

        optionsContainer.appendChild(button);
    });

    nextBtn.disabled = true; 
}

function showResult() {
    const topActivity = Object.keys(activityCounts).reduce((a, b) =>
        activityCounts[a] > activityCounts[b] ? a : b
    );
    resultText.textContent = `Your perfect Pochacco activity is ${topActivity}!`;
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    activityCounts = { "playing sports": 0, "taking walks": 0, "relaxing": 0 };
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
});

// initalize
showQuestion();