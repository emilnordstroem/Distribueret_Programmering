
export class DiceHandler {

    constructor (diceObjects) {
        this.diceObjects = diceObjects;
        this.dicesRolled = [
            {diceNo: 1, count: 0},
            {diceNo: 2, count: 0},
            {diceNo: 3, count: 0},
            {diceNo: 4, count: 0},
            {diceNo: 5, count: 0},
            {diceNo: 6, count: 0}
        ];
        this.currentDiceValues = [null, null, null, null, null];
    }

    lockSelectedDices () {
        const dices = document.querySelectorAll("#dices > input");
        for (const dice of dices) {
            if (this.isDiceSelected(dice)) {
                this.lockDice(dice);
            }
        }
    }

    isDiceSelected (dice) {
        return dice.classList.contains("selected");
    }

    lockDice (dice) {
        dice.classList.add("lockedDice");
    }

    unlockDice (dice) {
        dice.classList.remove("lockedDice");
    }

    rollDices () {
        const dices = document.querySelectorAll("#dices > input");
        for (let index = 0; index < dices.length; index++) {
            const dice = dices[index];
            if (!this.isDiceLocked(dice)) {
                // Subtract if dice was rolled before
                if (this.currentDiceValues[index] !== null) {
                    this.dicesRolled[this.currentDiceValues[index]].count--;
                }
                
                const rolledDiceIndex = Math.floor(Math.random() * this.diceObjects.length);
                this.dicesRolled[rolledDiceIndex].count++;
                this.currentDiceValues[index] = rolledDiceIndex;
                
                this.setDiceBackground(
                    dice,
                    this.diceObjects[rolledDiceIndex].diceImg
                );
            }
        }
    }

    isDiceLocked (dice) {
        return dice.classList.contains("lockedDice");
    }

    setDiceBackground (dice, url) {
        dice.style.backgroundImage = `url(${url})`;
    }

    // Resetting
    resetDiceState () {
        const dices = document.querySelectorAll("#dices > input");
        for (const dice of dices) {
            if (this.isDiceLocked(dice)) {
                this.unlockDice(dice);
                dice.classList.remove("selected");
            }
        }
    }

    resetDicesRolled () {
        for (const dice of this.dicesRolled) {
            dice.count = 0;
        }
        this.currentDiceValues = [null, null, null, null, null];
    }

    resetDiceBackgrounds() {
        const dices = document.querySelectorAll("#dices > input");
        for (const dice of dices) {
            dice.style.backgroundImage = "none";
        }
    }
}