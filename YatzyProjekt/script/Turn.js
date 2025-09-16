
export class TurnHandler {

    constructor (turnLimit) {
        this.turnLimit = turnLimit;
        this.turnCount = 0;
    }

    isFirstTurn(){
        return this.turnCount == 0;
    }

    hasNextTurn () {
        return this.turnCount < this.turnLimit;
    }

    updateTurnCounter () {
        this.turnCount++;
    }

    updateTurnCounterLabel () {
        const turnCountLabel = document.getElementById("turn-count");
        turnCountLabel.textContent = this.turnCount;
    }

    resetTurnCount(){
        this.turnCount = 0;
    }

    hasChosenScoreCard(){
        return this.hasChosenScoreCard;
    }

}
