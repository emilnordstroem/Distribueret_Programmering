import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import homeRouter from './views/routes/homeRouter.js'
import indkoebskurvRouter from './views/routes/indkoebskurvRouter.js'

const app = express();
const port = 10000;

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
);

app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static('/assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', homeRouter)
app.post('/indkoebskurv/:id', indkoebskurvRouter)
app.get('/indkoebskurv/:id/:antal', indkoebskurvRouter)


app.get('/logout', (request, response) => {
    request.session.destroy
    response.redirect('/')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});