

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
        
});


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {
}

function displayAdditionQuestion() { 
}

function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {


}