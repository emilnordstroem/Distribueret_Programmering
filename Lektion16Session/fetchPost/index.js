import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'

const app = express()
const port = 10000

app.use(
    session({
        secret: 'dummySession',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: false
        }
    })
)

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('assets'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const list = [1,2,3,4,5,6,7,8,9,10]

app.get('/', (request, response) => {
    if (!request.session.sum) {
        request.session.sum = 0
    }
    response.render('index', {
        title: 'FetchPostExercise',
        list: list,
        sum: request.session.sum
    })
})

app.post('/', (request, response) => {
    const { number } = request.body
    const newSum = parseInt(request.session.sum) + parseInt(number)
    request.session.sum = newSum

    response.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});