const diceObjects = [
    {diceNo: 1, diceImg: "images/dice-side-one.png"},
    {diceNo: 2, diceImg: "images/dice-side-two.png"},
    {diceNo: 3, diceImg: "images/dice-side-three.png"},
    {diceNo: 4, diceImg: "images/dice-side-four.png"},
    {diceNo: 5, diceImg: "images/dice-side-five.png"},
    {diceNo: 6, diceImg: "images/dice-side-six.png"}
];

const turnLimit = 3;
let turnCount = 0;

function onSumbit () {
    const boardElement = document.getElementById("board");
    boardElement.addEventListener("submit", (event) => {
        event.preventDefault();
        if(turnCount <= turnLimit) {
            updateTurnCounter();
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
    const turnCountLabel = document.getElementById("turn-count");
    turnCountLabel.textContent = turnCount;
    turnCount++;
}

function rollRemainingDices () {
    const dices = document.querySelectorAll("#dices > input");
    for (const dice of dices) {
        if (!hasDiceBeenChosen(dice)) {
            const rolledDiceIndex = Math.floor(Math.random() * diceObjects.length);
            dice.style.backgroundImage = `url(${diceObjects[rolledDiceIndex].diceImg})`;
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