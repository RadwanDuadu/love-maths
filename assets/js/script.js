

document.addEventListener("DOMContentLoaded", function() {
    let Buttons = document.getElementsByTagName("button");

    for(let button of Buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert("You clicked a button with data-type: " + gameType);
            }
        });
    }

    runGame("addition");
        
});


function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 * operand2, "Addition"];
    } else {
        alert("Unimplement operator: ${operator}");
        throw "Unimplement operator: ${operator}. Aborting!";
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;

    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {


}