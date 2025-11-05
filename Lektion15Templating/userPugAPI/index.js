import express from 'express'
import userRouter from './views/user.js'


const port = 10000
const app = express()

app.set('view engine', 'pug')
app.use(express.static('assets'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRouter)

app.listen(port, () => console.log(`http://localhost:${port}`))