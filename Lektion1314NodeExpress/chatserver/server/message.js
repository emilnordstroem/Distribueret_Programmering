
class Message {
    static globalIdentification = 0

    constructor (id, username, chatroom, text) {
        if (id == null) {
            this.id = Message.globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
        this.chatroom = chatroom
        this.text = text
    }

}

export default Message