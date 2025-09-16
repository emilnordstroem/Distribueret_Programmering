
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
        return scoreCard.classList.contains("lockedScoreCard")
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