import express from 'express'
import earthquakeRouter from './views/earthquake.js'

const port = 10000
const app = express()

app.set('view engine', 'pug')

app.use(express.static('assets'))

app.get('/', earthquakeRouter)

app.get('/:minMagnitude', earthquakeRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})