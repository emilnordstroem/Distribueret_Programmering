import express from 'express'
import userRouter from './views/user.js'

const app = express()
const port = 10000

app.set('view engine', 'pug')
app.use(express.static('assets'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', userRouter)

app.post('/createuser', userRouter)

app.listen(port, () => console.log(`http://localhost:${port}`))