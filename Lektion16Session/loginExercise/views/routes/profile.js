import express from 'express'

const router = express.Router()

router.get('/profile', (request, response) => {
    if (request.session.isUserLoggedIn) {
        response.render(
            'profile',
            {
                username: request.session.username
            }
        )
    } else {
        response.redirect('/')
    }
})

export default router