import { GameMechanics } from "./GameMechanics.js";

// Upper Section : Dice Roll and Turn overview
const diceObjects = [
    {diceNo: 1, diceImg: "images/dice-side-one.png"},
    {diceNo: 2, diceImg: "images/dice-side-two.png"},
    {diceNo: 3, diceImg: "images/dice-side-three.png"},
    {diceNo: 4, diceImg: "images/dice-side-four.png"},
    {diceNo: 5, diceImg: "images/dice-side-five.png"},
    {diceNo: 6, diceImg: "images/dice-side-six.png"}
];

const gameMechanics = new GameMechanics(diceObjects, 3);

function onSumbit () {
    const submitElement = document.getElementById("roll-dice-button");
    submitElement.addEventListener("click", (event) => {
        event.preventDefault();
        if(gameMechanics.handleTurn()) {
            gameMechanics.handleDiceThrow();
            gameMechanics.updateScoreCard();
        } else {
            gameMechanics.resetting();
        }
    });
}

onSumbit();

function handleDiceSelection () {
    const dicesSpanElement = document.querySelector("#roll-dice-section #dices");
    dicesSpanElement.addEventListener ("click", event => {
        const clickedDice = event.target;
        if (clickedDice.tagName === "INPUT" 
            && !clickedDice.classList.contains("lockedDice")) {
            toggleSelectDice(clickedDice);
        }
    });
}

function toggleSelectDice (dice) {
    dice.classList.toggle("selected");
}

handleDiceSelection ();

function handleScoreCardSelection() {
    const scoreCardContainer = document.querySelector("#dice-score-section");

    scoreCardContainer.addEventListener("click", (event) => {
        const scoreCard = event.target;
        if (scoreCard.tagName === "INPUT" && !scoreCard.classList.contains("nonClickable")) {
            gameMechanics.scoreCardHasBeenChosen();
            lockSelectedScoreCard(scoreCard);
        }
    });
}

function lockSelectedScoreCard(scoreCard) {
    scoreCard.classList.add("lockedScoreCard");
}

handleScoreCardSelection();