import express from 'express'
import session from 'express-session'
import morgan from 'morgan'

import signupRouter from './views/routes/signup.js'
import profileRouter from './views/routes/profile.js'

const port = 10000
const app = express()

app.use(express.static('assets'))
app.set('view engine', 'pug')
app.use(session(
    {
        secret: 'secret',
		resave: true,
		saveUninitialized: true,
    }
))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(morgan('short'))

function checkAuthentication (request, response, next) {
    if (request.url === '/profile') {
        if (!request.session.isUserLoggedIn) {
            response.redirect('/')
        } 
    }
    next()
}
app.use(checkAuthentication)

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/profile', profileRouter)

app.post('/signup', signupRouter)

app.get('/logout', (request, response) => {
    request.session.destroy()
    response.redirect('/')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})