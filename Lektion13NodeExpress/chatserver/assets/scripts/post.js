

class Post {
    static globalIdentification = 0

    constructor (id, username, chatroom, text) {
        if (id == null) {
            this.id = Post.globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
        this.chatroom = chatroom
        this.text = text
    }

}

