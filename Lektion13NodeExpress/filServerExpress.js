// filServerExpress.js
const express = require('express')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const port = 8080

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="/filer/' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

// Indsæt filer asynkront
app.get('/', async (request, response) => {
    try {
        const filesPath = path.join(__dirname, 'NodeExpressFiler', 'filer') // path to files
        const filenames = await fs.readdir(filesPath) // get array of files
        const html = genererLinks(filenames)
        response.status(200).send(html)
    } catch (error) {
        console.error(error.message);
        response.status(500).send('Loading Error')
    } 
})

// Rote til filer
app.get('/filer/:filnavn', async (request, response) => {
    try {
        const filesPath = path.join(
            __dirname, 
            'NodeExpressFiler', 
            'filer', 
            request.params.filnavn
        )
        const fileData = await fs.readFile(filesPath)
        response.status(200).send(fileData)
    } catch (error) {
        console.error(error.message);
        response.status(404).send('Resource Selection Error')
    } 
})

app.listen(port)
console.log(`Lytter på port ${port}...`);