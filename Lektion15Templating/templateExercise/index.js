import express from 'express' // importer og gemmer express i lokal variabel fra 'express'
import morgan from 'morgan'
import carsRouter from './cars.js'
import bodyParser from 'body-parser'

const app = express()
const port = 10000

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('assets'))

app.use(bodyParser.urlencoded(
    {extended: true}
))
app.use(bodyParser.json())


app.use('/cars', carsRouter)

app.get('/', (request, response) => {
    response.redirect('/home.html')
})


app.use((request, response, next) => {
    response.status(404).send('ukendt url')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})