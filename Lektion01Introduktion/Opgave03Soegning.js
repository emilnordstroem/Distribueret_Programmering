
let tekstStraenge = ['Emil', 'Loke', 'Simon', 'Mikkel', 'Simon', 'Jamal'];

function bubbleSort(tekstStraenge){
    for (let nuvaendeIndex = 0; nuvaendeIndex < tekstStraenge.length - 1; nuvaendeIndex++) {
        for (let iterationIndex = 0; iterationIndex < tekstStraenge.length - 1 - nuvaendeIndex; iterationIndex++) {
            if (tekstStraenge[iterationIndex] > tekstStraenge[iterationIndex + 1]) {
                let temp = tekstStraenge[iterationIndex];
                tekstStraenge[iterationIndex] = tekstStraenge[iterationIndex + 1];
                tekstStraenge[iterationIndex + 1] = temp;
            }
        }
    }
    return tekstStraenge;
}

const sorteretTekstStraeng = bubbleSort(tekstStraenge);

function search(sorteretListe, target){
    if (target == null) {
        return null;
    }
    return binarySearch(sorteretListe, target, 0, sorteretListe.length - 1);
}

function binarySearch(sorteretListe, target, left, right){
    if (left > right) {
        return -1;
    }

    const middle = parseInt((left + right) / 2);
    if (sorteretListe[middle] === target) {
        return middle;
    } else if (sorteretListe[middle] > target) {
        return binarySearch(sorteretListe, target, left, middle - 1);
    } else {
        return binarySearch(sorteretListe, target, middle + 1, right);
    }

}

const foundAtIndex = search(sorteretTekstStraeng, "Emil");
console.log(foundAtIndex);

