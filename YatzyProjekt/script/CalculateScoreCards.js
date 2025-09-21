
export class ScoreCardHandler {

    constructor(diceHandler) {
        this.diceHandler = diceHandler;
        this.numberOfSelectedScoreCards = 0;
    }

    hasAllScoreCardsBeenSelected () {
        return this.numberOfSelectedScoreCards === 15;
    }

    increaseNumberOfSelectedScoreCards () {
        this.numberOfSelectedScoreCards++;
        console.log(this.numberOfSelectedScoreCards);
    }

    resetNumberOfSelectedScoreCards () {
        this.numberOfSelectedScoreCards = 0;
    }

    resetAllUnlockedScoreCards(){
        const scoreCards = document.querySelectorAll("#dice-score-section input"); 
        for (const scoreCard of scoreCards) {
            if (!this.scoreCardIsLocked(scoreCard)) {
                scoreCard.value = 0;
            }
        }
    }

    resetAllScoreCards(){
        const scoreCards = document.querySelectorAll("#dice-score-section input"); 
        for (const scoreCard of scoreCards) {
            scoreCard.value = 0;
            scoreCard.classList.remove("lockedScoreCard");
        }
    }

    scoreCardIsLocked(scoreCard){
        return scoreCard.classList.contains("lockedScoreCard")
    }

    primitiveRolledScore(index) {
        return  this.diceHandler.dicesRolled[index].count * (index + 1);;
    }

    multipleOccurrances (numberOfOccurrances) {
        for (let index = this.diceHandler.dicesRolled.length - 1; index >= 0; index--) {
            if (this.diceHandler.dicesRolled[index].count === numberOfOccurrances) {
                if (numberOfOccurrances === 5) {
                    return 50;
                }
                return this.diceHandler.dicesRolled[index].diceNo * numberOfOccurrances;
            }
        }
        return 0;
    }

    twoPairs() {
        let numberOfPairs = 0;
        let sumOfPairs = 0;
        let index = this.diceHandler.dicesRolled.length - 1;

        while (index >= 0 && numberOfPairs < 2) {
            if (this.diceHandler.dicesRolled[index].count === 2) {
                numberOfPairs++;
                sumOfPairs += this.diceHandler.dicesRolled[index].diceNo * 2;
            }
            index--;
        }

        if (numberOfPairs === 2) {
            return sumOfPairs;
        } else {
            return 0;
        }
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
        let hasThreeSame = false;
        let hasPair = false; 
        let threeOfAKindValue = 0;
        let pairValue = 0;
        
        for (let index = this.diceHandler.dicesRolled.length - 1; index >= 0; index--) {
            if (this.diceHandler.dicesRolled[index].count === 3) {
                hasThreeSame = true;
                threeOfAKindValue = this.diceHandler.dicesRolled[index].diceNo * 3;
                break;
            }
        }
        
        for (let index = this.diceHandler.dicesRolled.length - 1; index >= 0; index--) {
            if (this.diceHandler.dicesRolled[index].count === 2) {
                hasPair = true;
                pairValue = this.diceHandler.dicesRolled[index].diceNo * 2;
                break;
            }
        }
        
        if (hasThreeSame && hasPair) {
            return threeOfAKindValue + pairValue;
        }
        
        return 0;
    }
}
