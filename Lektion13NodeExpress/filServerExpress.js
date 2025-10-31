import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()
const port = 8080

const filerMappe = path.join('NodeExpressFiler', 'filer')

app.use('/filer', express.static(filerMappe))

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

app.get('/:filnavn', (request, response) => {
    try {
        const filnavn = request.params.filnavn
        const html = genererBillede(filnavn)
        response.send(html)
    } catch (error) {
        console.error(error.message)
        response.send('Resource Selection Error')
    }
})

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`)
})