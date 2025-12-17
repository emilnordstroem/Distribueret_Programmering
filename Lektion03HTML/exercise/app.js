import express from 'express'

const app = express()

app.use(express.static('assets'))

app.get('/', (request, response) => {
    response.send('index.html')
})

const port = 10000
app.listen(port, console.log(`http://localhost:${port}`))