
export class Varelinje {
    #antal
    #betegnelse
    #samletPris

    constructor (antal, betegnelse, varePris) {
        this.#antal = antal
        this.#betegnelse = betegnelse
        this.#samletPris = this.#antal * varePris
    }

    get antal () {
        return this.#antal
    }
    
    get betegnelse () {
        return this.#betegnelse
    }

    get samletPris () {
        return this.#samletPris
    }

    toJSON() {
        return {
            antal: this.#antal,
            betegnelse: this.#betegnelse,
            samletPris: this.#samletPris,
        }
    }

    static fromJSON(obj) {
        return new Varelinje(
            obj.antal, 
            obj.betegnelse,
            obj.samletPris
        )
    }

}
