
const personNames = ['Emil', 'Simon', 'Sara', 'Sammi', 'Mikkel'];
const personArray = createPersonsForPersonArray();

function Person(name, email, tlf) {
    this.name = name,
    this.email = email,
    this.tlf = tlf
};

function createPersonsForPersonArray(){
    const personArray = [];
    for (const name of personNames) {
        const person = new Person(
            name,
            'example@example.org',
            12345678
        );
        personArray.push(person);
    }
    return personArray;
}


//CRUD : Create, Read, Update, Delete
personArray[5] = new Person(
    'Martin', 
    'example@example.org', 
    12345678
);
console.log('Create:' + personArray[5].name);

console.log('Read:' + personArray[1].name);

personArray[1] = personArray[5];
console.log('Update:' + personArray[1].name);

delete personArray[1].name;
console.log('Delete:' + personArray[1].name);