import { ScoreCardResultHandler } from "./CalculateResults.js";
import { ScoreCardHandler } from "./CalculateScoreCards.js";
import { DiceHandler } from "./Dices.js";
import { TurnHandler } from "./Turn.js";

export class GameMechanics {
    
    constructor (diceObjects, turnLimit) {
        this.diceHandler = new DiceHandler(diceObjects);
        this.turnHandler = new TurnHandler(turnLimit);
        this.scoreCardHandler = new ScoreCardHandler(this.diceHandler);
        this.scoreCardSelected = false; 
    }
    
    handleTurn () {
        if (this.turnHandler.hasNextTurn()) {
            this.turnHandler.updateTurnCounter();
            this.turnHandler.updateTurnCounterLabel();
            return true;
        }
        return false;
    } 

    beenSelectedScoreCard () {
        return this.scoreCardSelected;
    }

    resetting () {
        this.turnHandler.resetTurnCount();
        this.turnHandler.updateTurnCounterLabel();
        this.diceHandler.resetDiceState();
        this.diceHandler.resetDicesRolled();
        this.diceHandler.resetDiceBackgrounds()
        this.scoreCardHandler.resetAllUnlockedScoreCards();
    }

    fullReset () {
        this.turnHandler.resetTurnCount();
        this.turnHandler.updateTurnCounterLabel();
        this.diceHandler.resetDiceState();
        this.diceHandler.resetDicesRolled();
        this.diceHandler.resetDiceBackgrounds();
        this.scoreCardHandler.resetAllScoreCards();
        this.scoreCardHandler.resetNumberOfSelectedScoreCards();
        this.scoreCardHandler.resetScore();
    }

    handleDiceThrow () {
        this.diceHandler.lockSelectedDices();
        this.diceHandler.rollDices();
    }

    updateScoreCard () {
        const scoreCards = document.querySelectorAll("#dice-score-section input"); 
        let indexForPrimitives = 0;
        let occurrencesForEquals = 2;
        
        for (const scoreCard of scoreCards) {
            if (scoreCard.classList.contains("lockedScoreCard")){
                continue;
            }
            switch (scoreCard.id) {
                case "rolled-ones":
                case "rolled-twos":
                case "rolled-threes":
                case "rolled-fours":
                case "rolled-fives":
                case "rolled-sixes":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.primitiveRolledScore(indexForPrimitives));
                    indexForPrimitives++;
                    break;
                case "one-pair":
                case "three-same":
                case "four-same":
                case "yatzy":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.multipleOccurrances(occurrencesForEquals));
                    occurrencesForEquals++;
                    break;
                case "two-paires":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.twoPairs());
                    break;
                case "chance":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.chance());
                    break;
                case "small-straight":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.smallStraight());
                    break;
                case "large-straight":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.largeStraight());
                    break;
                case "full-house":
                    addValueToScoreCard(scoreCard, this.scoreCardHandler.fullHouse());
                    break;
                default: break;
            }
        }

        function addValueToScoreCard (scoreCard, value) {
            scoreCard.value = value;
        }
    }

    scoreCardHasBeenChosen () {
        this.turnHandler.resetTurnCount();
        this.turnHandler.updateTurnCounterLabel();
        this.diceHandler.resetDiceState();
        this.diceHandler.resetDicesRolled();
        this.diceHandler.resetDiceBackgrounds();
        this.scoreCardHandler.increaseNumberOfSelectedScoreCards();
        this.scoreCardHandler.resetAllUnlockedScoreCards();
    }

    showResult () {
        const scoreCards = document.querySelectorAll("#dice-score-section input"); 
        const resultHandler = new ScoreCardResultHandler(scoreCards);
        resultHandler.calculateAndUpdateResult();
    }

}
