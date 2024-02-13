const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

let selectedQuiz = null;

function startQuiz(quizQuestions) {
    selectedQuiz = quizQuestions;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = selectedQuiz[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectOption(optionIndex) {
    const currentQuestion = selectedQuiz[currentQuestionIndex];
    const correctOptionIndex = currentQuestion.correctOption;

    if (optionIndex === correctOptionIndex) {
        score++;
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerHTML = `<p>Quiz Completed! Your score: ${score}/${selectedQuiz.length}</p>`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
}

