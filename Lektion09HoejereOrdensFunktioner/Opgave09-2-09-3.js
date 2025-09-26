function Person (navn, alder, mobilnummer) {
    this.navn = navn,
    this.alder = alder,
    this.mobilnummer = mobilnummer
}


let personArray = [
    new Person("Johanne", 20, 12345678),
    new Person("Emil", 22, 87654321),
    new Person("Jesper", 25, 23456781),
    new Person("Casper", 19, 34567812),
    new Person("Mikkeline", 26, 76543218),
    new Person("Jonas", 31, 65432187)
]

// Opgave 9.2

function compareSort(compareFunc){
    return function (array) {
        return array.slice().sort(compareFunc);
    }
}

function compareLength(person1, person2){
    return compare(person1.navn.length, person2.navn.length);
}

function compareIgnoresCase(person1, person2){
    return compare(person1.navn.toLowerCase(), person2.navn.toLowerCase());
}

const lengthSort = compareSort(compareLength);
const ignoresCaseSort = compareSort(compareIgnoresCase);

console.log(lengthSort(personArray));
console.log(ignoresCaseSort(personArray));