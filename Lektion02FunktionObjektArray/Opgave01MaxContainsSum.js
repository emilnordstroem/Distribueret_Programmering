const sampleArray = [1, 2, 3, 4, 5];

function max(numberArray) {
    if (numberArray == null || numberArray.length <= 0) {
        return null;
    }
    let largestNumber;
    
    for (const number in numberArray) {
        if (largestNumber == null) {
            largestNumber = number
        } else if (number > largestNumber)  {
            largestNumber = number;
        }
    }

    return largestNumber; 
}

function constains(elementArray, element) {
    if (elementArray == null || elementArray.length <= 0 || element == null) {
        return false;
    }

    for (const currentElement in elementArray) {
        if (currentElement === element) {
            return true;
        }
    }

    return false;
}

function sum(array) {
    if (array == null) {
        return null;
    } else if (array.length <= 0) {
        return 0;
    }

    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}

console.log(max(sampleArray));
console.log(constains(sampleArray, 0));
console.log(sum(sampleArray));
