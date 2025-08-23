

function printAllPrimeNumbers(untilNumber){
    if (untilNumber < 2) {
        return null;
    }

    let currentNumber = 2;

    while (currentNumber <= untilNumber) {
        if (isPrime(currentNumber)) {
            console.log(currentNumber);
        }
        currentNumber++;
    }

}

function isPrime(number) {
    if (number < 2) {
        return true;
    }

    let baseNumber = 2;
        
        while (baseNumber <= Math.sqrt(number)) {
            if (number % baseNumber === 0) {
                return false;
            }
            baseNumber++;
        }

    return true;
}


const primeNumbersUntil = 29;
console.log(printAllPrimeNumbers(primeNumbersUntil));

