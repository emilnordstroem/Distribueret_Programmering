class Earthquake {
    #magnitude
    #place
    #date

    constructor (magnitude, place, date) {
        this.#magnitude = magnitude
        this.#place = place
        this.#date = date
    }

    get magnitude () {
        return this.#magnitude
    }

    get place () {
        return this.#place
    }

    get date () {
        return this.#date
    }
}