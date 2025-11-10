import express from 'express'
import controller from '../controller/userController.js'

const router = express.Router()

async function userExists (username, password) {
    const users = controller.readUsers()
    return users.some(currentUser => currentUser.username == username)
}

router.post('/login', (request, response) => {
    const { username, password } = request.body
    if (userExists(username, password)) {
        request.session.username = username
        request.session.isUserLoggedIn = true   
    }    
    response.redirect('/profile')
})

export default router