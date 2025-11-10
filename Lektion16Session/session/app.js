// app.js
const express = require('express');
const app = express();
const session = require('express-session');
const hbs = require('hbs');

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/filer'));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, resave: true }));

app.post('/login', (request, response) => {
    const { navn, password } = request.body;
    if (password === '111' && navn) {
        request.session.navn = navn;
        response.status(201).send(['login ok!']);
    } else {
        response.sendStatus(401);
    }
});

app.get('/session', (request, response) => {
    const navn = request.session.navn;
    if (navn) {
        response.render('velkommen', { navn });
    } else {
        response.redirect('/ingenAdgang.html');
    }
});

app.get('/logout', (request, response) => {
    request.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            response.redirect('/');
        }
    });
});

app.listen(8080);

console.log('Lytter på port 8080 ...');