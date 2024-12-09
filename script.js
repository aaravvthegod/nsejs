// Play sound on button click
function playSound() {
  var audio = new Audio('assets/click-sound.mp3');
  audio.play();
}
// Function to go back to the previous page
function goBack() {
  window.history.back();
}

// Quiz-related functions
let score = 0;

// Function to submit the quiz and calculate the score
function submitQuiz() {
  let totalQuestions = 3; // Change this number if more questions are added
  let correctAnswers = 0;

  // Question 1 answer check
  let question1 = document.querySelector('input[name="question1"]:checked');
  if (question1 && question1.value === "1") {
    correctAnswers++;
  }

  // Question 2 answer check
  let question2 = document.querySelector('input[name="question2"]:checked');
  if (question2 && question2.value === "H2O") {
    correctAnswers++;
  }

  // Question 3 answer check
  let question3 = document.querySelector('input[name="question3"]:checked');
  if (question3 && question3.value === "Solar") {
    correctAnswers++;
  }

  score = correctAnswers;
  alert(`Quiz submitted! You got ${score} out of ${totalQuestions} correct.`);
}

// Ask Page Form Submission
document.getElementById("question-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let question = document.getElementById("question").value;

  if (name && question) {
    alert("Your question has been submitted!");
    // You can add further logic here to send the question to a server or database
    document.getElementById("question-form").reset(); // Reset form after submission
  } else {
    alert("Please fill in both fields before submitting.");
  }
});

// Get all checklist items and the progress bar
const checklistItems = document.querySelectorAll('.checklist-checkbox');
const progressBar = document.getElementById('progress-bar');

// Function to save the current state of the checklist to local storage
function saveChecklistState() {
    const checklistState = Array.from(checklistItems).map(item => item.checked);
    localStorage.setItem('checklistState', JSON.stringify(checklistState));
}

// Function to load the checklist state from local storage
function loadChecklistState() {
    const savedState = JSON.parse(localStorage.getItem('checklistState'));
    if (savedState) {
        checklistItems.forEach((item, index) => {
            item.checked = savedState[index];
        });
    }
}

// Function to update the progress bar
function updateProgressBar() {
    let completed = 0;
    checklistItems.forEach(item => {
        if (item.checked) {
            completed++;
        }
    });

    const total = checklistItems.length;
    const progress = (completed / total) * 100;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
        progressBar.classList.add('fill');
    } else {
        progressBar.classList.remove('fill');
    }

    // Save progress and checklist state
    saveChecklistState();
}

// Add event listeners to checkboxes
checklistItems.forEach(item => {
    item.addEventListener('change', updateProgressBar);
});

// Load the checklist state and update the progress bar on page load
window.onload = function () {
    loadChecklistState();
    updateProgressBar();
};
const progressPercentageText = document.getElementById('progress-percentage');

// Function to update the progress bar and percentage text
function updateProgressBar() {
    let completed = 0;
    checklistItems.forEach(item => {
        if (item.checked) {
            completed++;
        }
    });

    const total = checklistItems.length;
    const progress = (completed / total) * 100;
    progressBar.style.width = `${progress}%`;

    // Update percentage text
    progressPercentageText.textContent = `${Math.round(progress)}%`;

    if (progress === 100) {
        progressBar.classList.add('fill');
    } else {
        progressBar.classList.remove('fill');
    }

    // Save progress and checklist state
    saveChecklistState();
}
