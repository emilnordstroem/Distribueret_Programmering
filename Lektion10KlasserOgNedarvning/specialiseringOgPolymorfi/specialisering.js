
// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    equals(person) {
        return this.navn == person.navn;
    }
    static compareTo(person1, person2) {
        if (person1.navn == person2.navn) {
            return 0;
        } else if (person1.navn < person2.navn) {
            return -1;
        } else {
            return 1;
        }
    }
    toString() { return this.navn; }
}

class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    equals(studerende){
        return this.navn == studerende.navn 
            && this.id == studerende.id;
    }
    toString() { return super.toString() + ": " + this.id; };
}

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

const skabningerPaaUniversitet = [
    person,
    new Studerende("Emil"),
    new Person("Henriette"),
    new Studerende("Maria"),
    studerende,
    new Studerende("Emma"),
    new Person("Allan"),
    new Kat("Mulle"),
    new Kat("Lilje")
];

skabningerPaaUniversitet.sort(Person.compareTo);

skabningerPaaUniversitet.forEach(skabning => console.log(skabning.navn));

