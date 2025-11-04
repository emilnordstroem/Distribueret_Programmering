import express from 'express'
import morgan from 'morgan'

import router from './serverController.js'

const app = express()
const port = 8080

// Tells express to use Pug rendering
app.set('view engine', 'pug')
// locate Pug renderings
app.set('views', './view')

app.use(express.static('view'))
app.use(morgan('short'))

app.get('/', router)

app.get('/view/:filename', router)

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`)
})