import express from 'express'
import figlet from 'figlet'
import morgan from 'morgan' // log requests

// instans af express
const app = express()
const port = 3000

// middleware
app.use(morgan('short')) // eksisterende npm modul
app.use(express.static('assets')) // filer i mappe assets fanges - tager assets from roden
// deklarere egen middleware funktion
app.use((request, response, next) => { // parameter er variabler app sætter
    console.log(`Request: ${request.url}`)
    next() // invoke end point som request skulle til
})

// endpoints
// app sørger for request (objekt) og response (objekt) parameter
app.get('/', (request, response) => {
    response.send('Hello, World!') // sender og afslutter
})

// /: deklarere variabel
app.get('/:hej', (request, response) => {
    // response.write('Hej igen') // tilgår response objekt og skriver 'Hej igen' i body
    // response.end() // funktion konkludere på response

    // tilgå variabler sat i express gennem params
    const text = request.params.hej
    // Figlet - to parameter og en callback funktion
    figlet.text(text, (error, data) => {
        // Håndtere fejl med det samme
        if (error) throw error
        // Write data og send til klient
        response.write(data)
        response.end()
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})