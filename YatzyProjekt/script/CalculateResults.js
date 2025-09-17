
export class ScoreCardResultHandler {

    constructor (scoreCards) {
        this.scoreCards = scoreCards;
    }


    calculateAndUpdateResult () {
        const primitiveSum = this.calculateSum();
        const bonus = this.calculateBonus(primitiveSum);
        const advancedSum = this.calculateAdvanced(); 

        for (const scoreCard of this.scoreCards) {
            switch (scoreCard.id) {
                case "sum":
                    scoreCard.value = primitiveSum;
                    break;
                case "bonus":
                    scoreCard.value = bonus;
                    break;
                case "total":
                    scoreCard.value = (primitiveSum + bonus + advancedSum);
                    break;
                default: break;
            }
        }
    }

    calculateSum () {
        let sum = 0;

        for (const scoreCard of this.scoreCards) {
            if (!scoreCard.classList.contains("lockedScoreCard")) {
                continue;
            }
            switch (scoreCard.id) {
                case "rolled-ones":
                case "rolled-twos":
                case "rolled-threes":
                case "rolled-fours":
                case "rolled-fives":
                case "rolled-sixes":
                    sum += parseInt(scoreCard.value);
                    break;
                default: break;
            }
        }

        return sum;
    }

    calculateBonus (sumOfPrimitives) {
        return sumOfPrimitives >= 63 ? 50 : 0;
    }

    calculateAdvanced () {
        let sum = 0;

        for (const scoreCard of this.scoreCards) {
            if (!scoreCard.classList.contains("lockedScoreCard")) {
                continue;
            }
            switch (scoreCard.id) {
                case "one-pair":
                case "three-same":
                case "four-same":
                case "yatzy":
                case "chance":
                case "small-straight":
                case "large-straight":
                case "full-house":
                    sum += parseInt(scoreCard.value);
                    break;
                default: break;
            }
        }

        return sum;
    }

}
