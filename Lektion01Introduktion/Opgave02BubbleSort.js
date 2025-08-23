
let tekstStraenge = ['Emil', 'Loke', 'Simon', 'Mikkel', 'Simon', 'Jamal'];

function bubbleSort(tekstStraenge) {
    for (let nuvaerendeIndex = 0; nuvaerendeIndex < tekstStraenge.length - 1; nuvaerendeIndex++) {
        for (let iterationsIndeks = 0; iterationsIndeks < tekstStraenge.length - 1 - nuvaerendeIndex; iterationsIndeks++) {
            if (tekstStraenge[iterationsIndeks] > tekstStraenge[iterationsIndeks + 1]) {
                let temp = tekstStraenge[iterationsIndeks];
                tekstStraenge[iterationsIndeks] = tekstStraenge[iterationsIndeks + 1];
                tekstStraenge[iterationsIndeks + 1] = temp;
            }
        }
    }
    return tekstStraenge;
}

const result = bubbleSort(tekstStraenge)
console.log(result);