

document.addEventListener("DOMContentLoaded", function() {
    let Buttons = document.getElementsByTagName("button");

    for(let button of Buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert("You clicked a button with data-type: " + gameType);
            }
        });
    }

    runGame("Addition");
        
});


function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "Addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

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

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "Addition"];
    } else {
        alert("Unimplement operator: ${operator}");
        throw "Unimplement operator: ${operator}. Aborting!";
    }

}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    console.log(oldScore);
}

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

function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {


}