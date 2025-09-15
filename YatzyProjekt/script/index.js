const diceObjects = [
    {diceNo: 1, diceImg: ".\images\dice-side-one.png"},
    {diceNo: 2, diceImg: ".\images\dice-side-two.png"},
    {diceNo: 3, diceImg: ".\images\dice-side-three.png"},
    {diceNo: 4, diceImg: ".\images\dice-side-four.png"},
    {diceNo: 5, diceImg: ".\images\dice-side-five.png"}
];

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
    for (const dice of dices) {
        if (!hasDiceBeenChosen(dice)) {
            
        }
    }
}

function hasDiceBeenChosen (dice) {
    return dice.checked || dice.disabled == true;
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