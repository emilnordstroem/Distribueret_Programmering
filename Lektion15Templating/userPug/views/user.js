import express from 'express'

const router = express.Router()

const users = []

class User {
    constructor(name, age, gender, image) {
        this.name = name
        this.age = age
        this.gender = gender
        this.image = image
    }
}

function createUser (name, age, gender) {
    let image
    if (age <= 20) {
        image = './images/baby.jpg'
    } else if (age <= 30) {
        image = './images/twenties.jpg'
    } else {
        image = './images/old.jpg'
    }
    
    const newUser = new User(name, age, gender, image)
    
    users.push(newUser)
}

router.get('/', (request, response) => {
    response.render('index', {
        users: users
    })
})

router.post('/createuser', (request, response) => {
    const {name, age, gender} = request.body
    createUser(name, age, gender)
    response.render('index', {
        users: users
    })
})

export default router