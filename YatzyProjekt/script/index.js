
// Upper Section : Dice Roll and Turn overview
const diceObjects = [
    {diceNo: 1, diceImg: "images/dice-side-one.png"},
    {diceNo: 2, diceImg: "images/dice-side-two.png"},
    {diceNo: 3, diceImg: "images/dice-side-three.png"},
    {diceNo: 4, diceImg: "images/dice-side-four.png"},
    {diceNo: 5, diceImg: "images/dice-side-five.png"},
    {diceNo: 6, diceImg: "images/dice-side-six.png"}
];

const dicesRolled = [
    {diceNo: 1, count: 0},
    {diceNo: 2, count: 0},
    {diceNo: 3, count: 0},
    {diceNo: 4, count: 0},
    {diceNo: 5, count: 0},
    {diceNo: 6, count: 0}
];

const turnLimit = 3;
let turnCount = 0;

function onSumbit () {
    const submitElement = document.getElementById("roll-dice-button");
    submitElement.addEventListener("click", (event) => {
        event.preventDefault();
        if(turnCount < turnLimit) {
            resetDicesRolled();
            updateTurnCounterLabel();
            rollRemainingDices();
            enableRemainingDiceCheckboxes();
            updateScoreCards();
        } else {
            disableAllDiceCheckboxes();
            toggleSubmitButton();
        }
    });
}

onSumbit();

function resetDicesRolled () {
    for (const dice of dicesRolled) {
        dice.count = 0;
    }
}

function updateTurnCounterLabel () {
    turnCount++;
    const turnCountLabel = document.getElementById("turn-count");
    turnCountLabel.textContent = turnCount;
}

function rollRemainingDices () {
    const dices = document.querySelectorAll("#dices > input");
    for (const dice of dices) {
        if (!hasDiceBeenChosen(dice)) {
            const rolledDiceIndex = Math.floor(Math.random() * diceObjects.length);
            dicesRolled[rolledDiceIndex].count++;
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

// Lower section : Score board and overview
function updateScoreCards () {
    const scoreCards = document.querySelectorAll("#dice-score-section input");
    let initialScore = 0;
    for (const scoreCard of scoreCards) {
        switch (scoreCard.id) {
            case "rolled-ones": 
                initialScore = howManyPrimitiveWereRolled(0);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "rolled-twos": 
                initialScore = howManyPrimitiveWereRolled(1);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "rolled-threes": 
                initialScore = howManyPrimitiveWereRolled(2);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "rolled-fours": 
                initialScore = howManyPrimitiveWereRolled(3);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "rolled-fives": 
                initialScore = howManyPrimitiveWereRolled(4);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "rolled-sixes": 
                initialScore = howManyPrimitiveWereRolled(5);
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "one-pair": 
                initialScore = largestOnePair();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "two-paires": 
                initialScore = largestTwoPair();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "three-same": 
                initialScore = threeSame();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "four-same": 
                initialScore = fourSame();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "full-house": 
                initialScore = fullHouse();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "small-straight":
                initialScore = smallStraight();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "large-straight":
                initialScore = largeStraight();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "chance":
                initialScore = chance();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            case "yatzy":
                initialScore = yatzy();
                addValueToScoreCard(scoreCard, initialScore);
                break;
            default: break;
        }
    }
}

function howManyPrimitiveWereRolled (index) {
    return dicesRolled[index].count * (index + 1);
}

function largestOnePair () {
    let pairSum = 0;
    for (let index = dicesRolled.length - 1; index >= 0; index--) {
        if (dicesRolled[index].count >= 2) {
            pairSum = (index + 1) * 2;
            break;
        }
    }
    return pairSum;
}

function largestTwoPair () {
    let pairCount = 0;
    let pairSum = 0;
    for (let index = dicesRolled.length - 1; index >= 0; index--) {
        if (dicesRolled[index].count >= 2) {
            pairCount++;
            pairSum += (index + 1) * 2;
        }
        if (pairCount === 2) {
            break;
        }
    }
    if (pairCount === 2) {
        return pairSum;
    }
    return 0;
}

function threeSame () {
    let sum = 0;
    for (let index = dicesRolled.length - 1; index >= 0; index--) {
        if (dicesRolled[index].count >= 3) {
            sum = (index + 1) * 3;
            break;
        }
    }
    return sum;
}

function fourSame () {
    let sum = 0;
    for (let index = dicesRolled.length - 1; index >= 0; index--) {
        if (dicesRolled[index].count >= 4) {
            sum = (index + 1) * 4;
            break;
        }
    }
    return sum;
}

function fullHouse () {
    let hasThreeSame = false;
    let hasTwoSame = true;

    let sum = 0;
    for (const dice of dicesRolled) {
        if (dice.count === 3) {
            sum += dice.diceNo * 3;
            hasThreeSame = true;
        } else if (dice.count === 2) {
            sum += dice.diceNo * 2;
            hasTwoSame = true;
        }
    }

    if (hasThreeSame && hasTwoSame) {
        return sum;
    }
    return 0;
}

function smallStraight () {
    
}

function largeStraight () {
    
}

function chance () {
    let sum = 0;
    for (const dice of dicesRolled) {
        sum += (dice.diceNo * dice.count);
    }
    return sum;
}

function yatzy() {
    for (let index = dicesRolled.length - 1; index >= 0; index--) {
        if (dicesRolled[index] === diceObjects.length) {
            return dicesRolled[index].diceNo * 5
        }
    }
    return 0;
}

function addValueToScoreCard (scoreCard, value) {
    scoreCard.value = value;
}

