import express from 'express'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 8080

const filerMappe = path.join(__dirname, 'NodeExpressFiler', 'filer')

app.use(express.static('NodeExpressFiler/filer'))
app.use((request, response, next) => { // parameter er variabler app sætter
    console.log(`Request: ${request.url}`)
    next() // invoke end point som request skulle til
})

app.get('/', async (request, response) => {
    try {
        const filenames = await fs.readdir(filerMappe)
        const html = genererLinks(filenames)
        response.send(html)
    } catch (error) {
        console.error(error.message)
        response.send('Loading Error')
    }
})

app.get('/filer/:filnavn', (request, response) => {
    try {
        const filnavn = request.params.filnavn
        const filePath = path.join(filerMappe, filnavn)
        const fileExtention = path.extname(filnavn)
        if (fileExtention === '.jpg') {
            const billedeElement = genererBillede(filnavn)
            response.send(billedeElement)
        } else if (fileExtention === '.html') {
            response.sendFile(filePath)
        }
    } catch (error) {
        console.error(error.message)
        response.send('Resource Selection Error')
    }
})

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += `<a href="/${filnavn}">${filnavn}</a><br>\n`
    }
    return html;
}

function genererBillede(filnavn) {
    return `<h1>${filnavn}</h1><img src="/filer/${filnavn}" alt="${filnavn}" />`
}

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`)
})