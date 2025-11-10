import express from 'express'
import controller from '../controller/userController.js'

const router = express.Router()

async function usernameAlreadyExist (username) {
    const users = await controller.readUsers()
    const foundUser = users.some(currentUser => currentUser.username == username)
    return foundUser
}

router.post('/signup', async (request, response) => {
    const { username, dateOfBirth, password } = request.body
    const exist = await usernameAlreadyExist(username)
    if (!exist) {

        const newUser = controller.createUser(username, dateOfBirth, password)
        const updatedUsersList = await controller.addUserToUsers(newUser)
        await controller.storeUsers(updatedUsersList)
    
        request.session.username = username
        request.session.isUserLoggedIn = true   
    
    }    
    response.redirect('/profile')
})

export default router