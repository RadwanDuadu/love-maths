
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let Buttons = document.getElementsByTagName("button");

    for(let button of Buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    // default gameType
    runGame("addition");
   
        
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if(gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let correctAnswer = calculateCorrectAnswer();

    if(userAnswer === correctAnswer[0]) {
        alert("Correct, You got it right!");
        incrementScore();
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer[0]}`);
        incrementWrongAnswer();
    }
    // Clear the answer box
    // and generate new question
    document.getElementById("answer-box").value = "";
    runGame(correctAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if(operator === "x") {
        return [operand1 * operand2, "multiply"];
    }else {
        alert("Unimplement operator: ${operator}");
        throw "Unimplement operator: ${operator}. Aborting!";
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    console.log(oldScore);
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("Incorrect").innerText);
    document.getElementById("Incorrect").innerText = ++oldScore;
    console.log(oldScore);
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").innerHTML = operand1;
    document.getElementById("operand2").innerHTML = operand2;

    document.getElementById("operator").innerHTML = "+";


}

function displaySubtractQuestion(operand1, operand2) {

}
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
function displayDivisionQuestion(operand1, operand2) {


}