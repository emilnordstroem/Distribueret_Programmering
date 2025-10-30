import { app } from './server.js'

const port = 10000

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getAllMessages () {
    const messages = await fetch('/messages')

}

async function getAllMessagesFromChatRoom (chatRoom) {
    const messages = await fetch('/messages/' + chatRoom)
}

async function getAllMessages () {
    const messages = await fetch('/messages')
}


app.listen(port => {
    console.log(`http://localhost:${port}`)
})