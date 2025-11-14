import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import itemsRouter from './views/routes/itemsList.js'

const app = express();
const port = 10000;

app.use(
    session({
        secret: 'dummySession',
        resave: false,
        saveUninitialized: false,
    })
);

app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', (request, response, next) => {
    if (request.session.groceryList) {
        request.session.groceryList = []
    }
    next
})

app.get('/', itemsRouter)


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});