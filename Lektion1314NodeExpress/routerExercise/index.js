import express, { request, response } from 'express' // importer og gemmer express i lokal variabel fra 'express'
import morgan from 'morgan'
import carsRouter from './cars.js'
import bodyParser from 'body-parser'

const app = express()
const port = 8080

app.use(morgan('short'))
/* Kort eksempel:
Middleware fanger request - static middleware ser efter home.html (det gør det).
Sender home.html tilbage til klienten - uden endpoint. 
Kan express ikke finde fil, sendes den videre til endpoints 
*/
app.use(express.static('assets'))

// Dekode post request fra klienten
app.use(bodyParser.urlencoded(
    {extended: true} // tilader specialtegn (" ", =, %, ø, ^* osv)
))
// Dekode omformes til json
app.use(bodyParser.json())
// Cars.js som middleware - mounter router på express app
// Fordeler routes ud i forskellige filer
app.use('/cars', carsRouter)

// endpoint med callback
app.get('/', (request, response) => {
    // ved get request på roden, omruter med response til /home.html
    // fortæller browseren at sende request til /home.html
    response.redirect('/home.html')
})

// her fanges den sidst mulige endpoint - brug middleware til fejl vindue for klienten
// vi kender ikke url'en - derfor undlader vi dette parameter
// fanger alt det som ikke blev fanget af de øvrige endpoints
app.use((request, response, next) => {
    // Tilgå body i status objektet
    response.status(404).send('ukendt url')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})