import express from 'express'

const app = express()
// Middleware - enables reading json objects
app.use(express.json())

const messages = []
const chatRooms = []

// GET all Messages
app.get('/messages', (request, response) => {
    try {
        response.status(200).json(messages)
    } catch (error) {
        console.error('Loading All Messages Error:', error.message)
        response.status(400).send('Loading Error')
    }
})

// GET specific Chat Room
app.get('/messages/:chatRoom', (request, response) => {
    try {
        const requestedChatRoom = request.params.chatRoom
        const messagesFromChatRoom = messages.filter(
            message => message.chatRoom === requestedChatRoom
        )
        response.status(200).json(messagesFromChatRoom)
    } catch (error) {
        console.error('Loading Chat Room Error:', error.message)
        response.status(400).send('Loading Error')
    }
})

// GET all Chat Rooms
app.get('/chatRoom', (request, response) => {
    try {
        response.status(200).json(chatRooms)
    } catch (error) {
        console.error('Loading Chat Room Error:', error.message)
        response.status(400).send('Loading Error')
    }
})

// DELETE specific message based on id
app.get('/message/:id', (request, response) => {
    try {
        const requestedMessageId = request.params.id
        const messageMatchingId = messages.filter(
            message => message.id === requestedMessageId
        )
        response.status(200).json(messageMatchingId)
    } catch (error) {
        console.error('Loading Chat Room Error:', error.message)
        response.status(400).send('Loading Error')
    }
})