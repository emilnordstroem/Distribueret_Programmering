
// Opgave 9.1

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

personArray.forEach((person) => {
    console.log(person.navn)
})

// Find person med et bestemt mobilnummer
console.log("Find person med et bestemt mobilnummer:")
console.log(
    personArray.filter(person => person.mobilnummer == 12345678)
);

// Find den mindste alder
console.log("Find den mindste alder:");
console.log(
    personArray.map(person => `${person.alder}`,).reduce((a,b) => Math.min(a,b))
);

// Modificer arrayet med personer, så personerne nu får et fortløbende id
console.log("Modificer arrayet med personer, så personerne nu får et fortløbende id:")
console.log(
    personArray.forEach((person, index) => {
        person.id = index++;
    })
);
personArray.forEach((person) => {
    console.log(person)
})


// Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge
console.log("Generer en tekststreng, der indeholder personernes navne - kommasepareret og i sorteret rækkefølge:")
console.log(
    personArray.map(person => `${person.navn}, `).sort().reduce((a,b) => a + b)
);

// Generer et array med navn og mobilnummer på de personer, der er yngre end 30
console.log("Generer et array med navn og mobilnummer på de personer, der er yngre end 30:")
console.log(
    personArray.filter(person => person.alder < 30).map(person => `${person.navn} ${person.mobilnummer}, `)
);

// Opgave 9.3




// Opgave 9.4