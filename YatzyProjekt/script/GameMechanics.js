import { ScoreCardHandler } from "./CalculateScoreCards.js";
import { DiceHandler } from "./Dices.js";
import { TurnHandler } from "./Turn.js";

export class GameMechanics {
    
    constructor (diceObjects, turnLimit) {
        this.diceHandler = new DiceHandler(diceObjects);
        this.turnHandler = new TurnHandler(turnLimit);
        this.scoreCardHandler = new ScoreCardHandler(this.diceHandler);
    }
    
    handleTurn () {
        if (this.turnHandler.hasNextTurn()) {
            this.turnHandler.updateTurnCounter();
            this.turnHandler.updateTurnCounterLabel();
            return true;
        }
        return false;
    } 

    resetting(){
        this.turnHandler.resetTurnCount();
        this.turnHandler.updateTurnCounterLabel();
        this.diceHandler.resetDiceState();
        this.diceHandler.resetDicesRolled();
        this.diceHandler.resetDiceBackgrounds()
        this.scoreCardHandler.resetAllUnlockedScoreCards();
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
            switch (scoreCard.id) { 
                case "rolled-ones": 
                case "rolled-twos": 
                case "rolled-threes":  
                case "rolled-fours": 
                case "rolled-fives": 
                case "rolled-sixes": 
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        indexForPrimitives++;
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard, 
                        this.scoreCardHandler.primitiveRolledScore(
                            indexForPrimitives
                        )
                    ); 
                    indexForPrimitives++;
                    break; 
                case "one-pair":  
                case "three-same": 
                case "four-same": 
                case "yatzy": 
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        occurrencesForEquals++;
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard, 
                        this.scoreCardHandler.multipleOccurrances(occurrencesForEquals)
                    ); 
                    occurrencesForEquals++;
                    break;
                case "chance":
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard,
                        this.scoreCardHandler.chance()
                    ); 
                    break; 
                case "small-straight": 
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard, 
                        this.scoreCardHandler.smallStraight()
                    ); 
                case "large-straight": 
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard, 
                        this.scoreCardHandler.largeStraight()
                    ); 
                    break;
                case "full-house": 
                    if (scoreCard.classList.contains("lockedScoreCard")) {
                        break;
                    }
                    addValueToScoreCard(
                        scoreCard, 
                        this.scoreCardHandler.fullHouse()
                    ); 
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
        this.diceHandler.resetDiceBackgrounds()
        this.scoreCardHandler.resetAllUnlockedScoreCards();
    }

}
