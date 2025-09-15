const turnLimit = 3;
let turnCount = 0;

function onSumbit () {
    const boardElement = document.getElementById("board");
    boardElement.addEventListener("submit", (event) => {
        event.preventDefault();
        if(updateTurnCounter()) {
            rollRemainingDices();
            enableRemainingDiceCheckboxes();
        } else {
            disableAllDiceCheckboxes();
            toggleSubmitButton();
        }
    });
}

onSumbit();

function updateTurnCounter () {
    turnCount++;
    const turnCountLabel = document.getElementById("turn-count");
    turnCountLabel.textContent = turnCount;
    if (turnCount == turnLimit) {
        return false;
    }
    return true;
}

function rollRemainingDices () {
    const dices = document.querySelectorAll("#dices > input");
}

function enableRemainingDiceCheckboxes () {
    const dices = document.querySelectorAll("#dices > input");
    for (const dice of dices) {
        if (!dice.checked) {
            dice.disabled = false;
        } else {
            dice.disabled = true;
        }
    }
}

function disableAllDiceCheckboxes () {
    const dices = document.querySelectorAll("#dices > input");
    for (const dice of dices) {
        dice.disabled = true;
    }
}

function toggleSubmitButton () {
    const sumbitButton = document.getElementById("roll-dice-button");
    if (sumbitButton.disabled == false) {
        sumbitButton.disabled = true;
    } else {
        sumbitButton.disabled = false;
    }
}