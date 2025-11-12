
export class Vare {
    static globalId = 1
    #id
    #betegnelse
    #pris

    constructor (id, betegnelse, pris) {
        if (!id) {
            this.#id = Vare.globalId++
        } else {
            this.#id = id
        }
        this.#betegnelse = betegnelse
        this.#pris = pris
    }

    get id () {
        return this.#id
    }

    get betegnelse () {
        return this.#betegnelse
    }

    get pris () {
        return this.#pris
    }

    set betegnelse (betegnelse) {
        this.#betegnelse = betegnelse
    } 

    set pris (pris) {
        this.#pris = pris
    } 

    toJSON() {
        return {
            id: this.#id,
            betegnelse: this.#betegnelse,
            pris: this.#pris,
        }
    }

    static fromJSON(obj) {
        return new Vare(
            obj.id, 
            obj.betegnelse,
            obj.pris
        )
    }

}
