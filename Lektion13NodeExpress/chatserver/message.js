
class Message {
    static globalId = 0
    #id
    #postedToRoom
    #postedByUser
    #text

    constructor (postedToRoom, postedByUser, text) {
        globalId++
        this.#id = globalId
        this.#postedToRoom = postedToRoom
        this.#postedByUser = postedByUser
        this.#text = text        
    }

    get id () {
        return this.#id
    }

    get postedToRoom () {
        return this.#postedToRoom
    }

    get postedByUser () {
        return this.#postedByUser
    }

    get text () {
        return this.#text
    }

}
