import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import fs from 'fs/promises'
import path from 'path'
const storyTextFilePath = path.join(process.cwd(), 'assets', 'public', 'story.txt');

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

app.get('/', async (request, response) => {
    const importedStoryText = await fs.readFile(storyTextFilePath, 'utf-8')
    response.render('index', {
        story: importedStoryText
    })
})

app.post('/updateStory', async (request, response) => {
    try {
        const { storyText } = request.body
        await fs.writeFile(storyTextFilePath, storyText, 'utf-8')
        const importedStoryText = await fs.readFile(storyTextFilePath, 'utf-8')
        response.send({ storyText : importedStoryText })
    } catch (error) {
        console.error(error)
        response.status(500).json({error: "failed to update story"})
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});