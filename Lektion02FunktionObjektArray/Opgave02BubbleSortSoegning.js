let tekstStraenge = ['Emil', 'Loke', 'Simon', 'Mikkel', 'Simon', 'Jamal'];

function bubbleSort(tekstStraenge) {
    for (let nuvaerendeIndex = 0; nuvaerendeIndex < tekstStraenge.length - 1; nuvaerendeIndex++) {
        for (let iterationsIndeks = 0; iterationsIndeks < tekstStraenge.length - 1 - nuvaerendeIndex; iterationsIndeks++) {
            if (tekstStraenge[iterationsIndeks] > tekstStraenge[iterationsIndeks + 1]) {
                tekstStraenge = swap(tekstStraenge, iterationsIndeks, iterationsIndeks + 1);
            }
        }
    }
    return tekstStraenge;
}

function swap(tekstStraenge, index1, index2) {
    let temp = tekstStraenge[index1];
    tekstStraenge[index1] = tekstStraenge[index2];
    tekstStraenge[index2] = temp;
    return tekstStraenge;
}

const result = bubbleSort(tekstStraenge)
console.log(result);

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