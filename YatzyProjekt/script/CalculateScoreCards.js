
export class ScoreCardHandler {

    constructor(diceHandler) {
        this.diceHandler = diceHandler;
    }

    resetAllUnlockedScoreCards(){
        const scoreCards = document.querySelectorAll("#dice-score-section input"); 
        for (const scoreCard of scoreCards) {
            if (!this.scoreCardIsLocked(scoreCard)) {
                scoreCard.value = 0;
            }
        }
    }

    scoreCardIsLocked(scoreCard){
        return scoreCard.classList.contains("locked")
    }

    primitiveRolledScore(index) {
        return this.diceHandler.dicesRolled[index].count * (index + 1);
    }

    multipleOccurrances (numberOfOccurrances) {
        for (let index = this.diceHandler.dicesRolled.length - 1; index >= 0; index--) {
            if (this.diceHandler.dicesRolled[index].count === numberOfOccurrances) {
                return this.diceHandler.dicesRolled[index].diceNo * numberOfOccurrances;
            }
        }
        return 0;
    }

    chance () {
        let sum = 0;
        for (const dice of this.diceHandler.dicesRolled) {
            sum += (parseInt(dice.diceNo) * dice.count);
        }
        return sum;
    }
    
    smallStraight() {
        for (let index = 0; index < 5; index++) {
            if (this.diceHandler.dicesRolled[index].count === 0) {
                return 0;
            }
        }
        if (this.diceHandler.dicesRolled[5].count > 0) {
            return 0;
        }
        return 15;
    }

    largeStraight() {
        if (this.diceHandler.dicesRolled[0].count > 0) {
            return 0;
        }
        for (let index = 1; index < 6; index++) {
            if (this.diceHandler.dicesRolled[index].count === 0) {
                return 0;
            }
        }
        return 20;
    }

    fullHouse () {
        let sumOfThreeSame = this.multipleOccurrances(3);
        let sumOfTwoSame = this.multipleOccurrances(2);
        if (sumOfThreeSame !== 0 && sumOfTwoSame !== 0) {
            return sumOfThreeSame + sumOfTwoSame;
        } 
        return 0;
    }

}

/*
function largestOnePair (dices) {
    let pairSum = 0;
    for (let index = dices.length - 1; index >= 0; index--) {
        if (dices[index].count >= 2) {
            pairSum = (index + 1) * 2;
            break;
        }
    }
    return pairSum;
}

function largestTwoPair (dices) {
    let pairCount = 0;
    let pairSum = 0;
    for (let index = dices.length - 1; index >= 0; index--) {
        if (dices[index].count >= 2) {
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

function threeSame (dices) {
    let sum = 0;
    for (let index = dices.length - 1; index >= 0; index--) {
        if (dices[index].count >= 3) {
            sum = (index + 1) * 3;
            break;
        }
    }
    return sum;
}

function fourSame (dices) {
    let sum = 0;
    for (let index = dices.length - 1; index >= 0; index--) {
        if (dices[index].count >= 4) {
            sum = (index + 1) * 4;
            break;
        }
    }
    return sum;
}

function fullHouse (dices) {
    let hasThreeSame = false;
    let hasTwoSame = true;

    let sum = 0;
    for (const dice of dices) {
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

function chance (dices) {
    let sum = 0;
    for (const dice of dices) {
        sum += (dice.diceNo * dice.count);
    }
    return sum;
}

function yatzy(dices) {
    for (let index = dices.length - 1; index >= 0; index--) {
        if (dices[index] === 5) {
            return dices[index].diceNo * 5
        }
    }
    return 0;
}
*/