
let venstreTalStreng = [1,4,5,3,7,9];
let hoejreTalStreng = [2,6,8,10];

function bubbleSort(liste){
    for (let nuvaendeIndex = 0; nuvaendeIndex < liste.length - 1; nuvaendeIndex++) {
        for (let iterationIndex = 0; iterationIndex < liste.length - 1 - nuvaendeIndex; iterationIndex++) {
            if (liste[iterationIndex] > liste[iterationIndex + 1]) {
                let temp = liste[iterationIndex];
                liste[iterationIndex] = liste[iterationIndex + 1];
                liste[iterationIndex + 1] = temp;
            }
        }
    }
    return liste;
}

venstreTalStreng = bubbleSort(venstreTalStreng);
hoejreTalStreng = bubbleSort(hoejreTalStreng);
console.log(venstreTalStreng + "\n" + hoejreTalStreng);
console.log("=========================");

function totalMergeAlgorithm (leftList, rightList) {
    const mergedList = [];

    let currentLeftListIndex = 0;
    let currentRightListIndex = 0;

    while (currentLeftListIndex < leftList.length && currentRightListIndex < rightList.length) {
        if (leftList[currentLeftListIndex] < rightList[currentRightListIndex]) {
            mergedList.push(leftList[currentLeftListIndex]);
            currentLeftListIndex++;
        } else {
            mergedList.push(rightList[currentRightListIndex]);
            currentRightListIndex++;
        }
    }

    while (currentLeftListIndex < leftList.lenght) {
        mergedList.push(leftList[currentLeftListIndex]);
        currentLeftListIndex++;
    }

    while (currentRightListIndex < rightList.length) {
        mergedList.push(rightList[currentRightListIndex]);
        currentRightListIndex++;
    }

    return mergedList;
}

const resultOfMerge = totalMergeAlgorithm(venstreTalStreng, hoejreTalStreng);
console.log(resultOfMerge);
