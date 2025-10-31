import express from 'express'
import Message from './message.js';

const port = 10000
const app = express()

// middleware
app.use(express.urlencoded({ extended: true })); // parses HTML form submissions
app.use(express.json())
app.use(express.static('./assets'))

const messages = []

function generateMessageOverviewPage (messages) {
    return generateMessageInputField() + generateMessageOverviewTable(messages)
}

function generateChatroomOverviewPage (chatrooms) {
    return generateMessageInputField() + generateChatroomOverviewTable(chatrooms)
}

function generateMessageOverviewTable (messages) {
    let html = '<table>'

    for (let message of messages) {
        let { id, username, chatroom, text } = message
        html += 
        `<tr>
            <td>
                ${id}
            </td>
            <td>
                ${username}
            </td>
            <td>
                ${chatroom}
            </td>
            <td>
                ${text}
            </td>
        </tr>\n`
    }
    html += '</table><br><div></div>'
    return html;
}

function generateChatroomOverviewTable (chatrooms) {
    let html = '<table>'
    for (let chatroom of chatrooms) {
        html += 
        `<tr>
            <td>
                ${chatroom}
            </td>
        </tr>\n`
    }
    html += '</table><br><div></div>'
    return html;
}

function generateMessageInputField () {
    let html = 
        `<form action="http://localhost:${port}" method="POST">
            <label for="username">Username</label>
            <input name="username" required>

            <label for="chatroom">Chat room</label>
            <input name="chatroom" required>

            <label for="text">Message</label>
            <input name="text" required>

            <input type="submit" value="Send">
        </form>`
    return html
}

// GET all messages
app.get('/', (require, response) => {
    try {
        let html = generateMessageOverviewPage(messages)
        response.send(html)  
    } catch (error) {
        console.error('GET all messages error: ', error.message)
    }
})

// GET all messages from specific chat room
app.get('/:chatroom', (require, response) => {
    try {
        const chatroom = require.params.chatroom
        const filteredMessages = messages.filter(message => message.chatroom == chatroom)
        const html = generateMessageOverviewPage(filteredMessages)
        response.send(html)  
    } catch (error) {
        console.error('GET all messages error: ', error.message)
    }
})

// GET all chat rooms
app.get('/chatrooms', (require, response) => {
    try {
        const chatrooms = [... new Set(messages.map(message => message.chatroom))]
        const html = generateChatroomOverviewPage(chatrooms)
        response.send(html)
    } catch (error) {
        console.error('GET all messages error: ', error.message)
    }
})

// POST message to chat room
app.post('/', (req, res) => {
    try {
        const {username, chatroom, text} = req.body
        const newMessage = new Message(
            null,
            username,
            chatroom,
            text
        )
        messages.push(newMessage)

        const html = generateMessageOverviewPage(messages)
        res.send(html)
    } catch (error) {
        console.error('POST message error: ', error.message)
    }
})

// DELETE message with message id
app.delete('/:id', (require, response) => {
    const id = require.params.id
    messages.filter(message => message.id !== id)
    const html = generateMessageOverviewPage(messages)
    response.send(html)
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})