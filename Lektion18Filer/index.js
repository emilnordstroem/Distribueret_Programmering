import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import fs from 'fs/promises'

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
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const title = 'Filesystem'

app.get('/', async (request, response) => {
    const data = await fs.readdir('assets/PUBLIC')
    response.render('index', {
        title: title,
        files: data
    })
})

app.get('/:folder/', async (request, response) => {
    const folder = request.params.folder
    const data = await fs.readdir(`assets/PUBLIC/${folder}/`)
    response.render('index', {
        title: title,
        files: data
    })
})

app.get('/:folder/:file', async (request, response) => {
    const { folder, file } = request.params
    const data = await fs.readFile(`assets/PUBLIC/${folder}/${file}`, 'utf-8')

    response.render('contentView', {
        title: title,
        textContent: data
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});