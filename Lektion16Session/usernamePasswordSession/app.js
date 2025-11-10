import express from 'express'
import session from 'express-session'

const app = express()
app.set('view engine', 'pug')

//MIDDLEWARE AFDELINGEN
app.use(session({
    secret: '73CC5693-7985-46B8-87DA-800DED1CBF36',
    saveUninitialized: true,
    resave: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

function checkAccess(request, response, next) {
    console.log("Forsøg på adgang til siden: " + request.url);
    // forsøg på at se /secret siden UDEN at være logget ind
    if (request.url === '/secret' && !request.session.isLoggedIn){
        response.redirect('/')
    } else {
        // du er logget ind :) OK du får adgang
        next()
    }
}
app.use(checkAccess)

app.get('/', (request, response)=>{
    response.render('frontpage', {knownUser: request.session.isLoggedIn})
})

app.get('/logout', (request,response)=>{
    request.session.destroy()
    response.redirect('/')
})

app.post('/login', (request, response)=>{
    const username = request.body.username
    const password = request.body.password
    if (checkUserCredientials(username, password)) {
        request.session.isLoggedIn = true
        response.redirect('/secret')
    } else {
        response.render('error', {data: {username:username, password: password}})
    }
})

app.get('/secret', (request,response)=>{
    response.render('secret', {knownUser: request.session.isLoggedIn})
})

app.listen(8000, ()=>{console.log('Jungletrummerne lyder - nu starter festen')})

function checkUserCredientials(username, password){
    let credientials = false
    if (username == 'Jeppe K' && password == 'panje') {
        credientials = true
    } 
    return credientials
}