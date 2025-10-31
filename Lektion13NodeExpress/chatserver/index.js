import express from 'express'

const app = express()

// Middleware
app.use(express.json())

const messages = []

function generateMessageOverviewTable (messages) {
    let html = '<table>'
    for (let message of messages) {
        let { username, chatroom, text } = message
        html += 
        `<tr>
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
    
}

// GET all messages
app.get('/', (require, response) => {
    try {
        const html = generateMessageOverviewTable(messages)
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
        const html = generateMessageOverviewTable(filteredMessages)
        response.send(html)  
    } catch (error) {
        console.error('GET all messages error: ', error.message)
    }
})

// GET all chat rooms
app.get('/chatrooms', (require, response) => {
    try {
        const chatrooms = [... new Set(messages.map(message => message.chatroom))]
        const html = generateChatroomOverviewTable(chatrooms)
        response.send(html)
    } catch (error) {
        console.error('GET all messages error: ', error.message)
    }
})

// POST message to chat room
app.post('/', (require, response) => {
    const newPost = new Post(
        null,
        require.username,
        require.chatroom,
        require.text
    )
    messages.push(newPost)
    const html = generateChatroomOverviewTable(messages)
    response.send(html)
})

// DELETE message with message id
app.delete('/:id', (require, response) => {
    const id = require.params.id
    messages.filter(message => message.id !== id)
    const html = generateMessageOverviewTable(messages)
    response.send(html)
})


const port = 10000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})