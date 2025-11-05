import express from 'express'

const router = express.Router()

const usersUrl = 'https://randomuser.me/api/?nat=dk&results=100'

async function getUsers (url) {
    const response = await fetch(url)
    const data = await response.json()
    const users = data.results
    return users
}

function isNationalityValid (nationality) {
    switch (nationality) {
        case 'gb' :
        case 'dk' :
        case 'de' :
        case 'fr' :
            return true
        default:
            break
    }
    return false
}

function isQuantityValid (quantity) {
    return 0 <= quantity && quantity <= 100
}

function userFiltering (users, nationality, quantity) {
    return users.filter(
        currentUser => currentUser.nat.toLowerCase() == nationality.toLowerCase()
    ).slice(
        0, quantity
    )
}

router.get('/', async (request, response) => {
    const users = await getUsers(usersUrl)
    response.render('index', {
        title: "UsersOverview",
        users: users
    })
})

router.post('/selection', async (request, response) => {
    const { nationality, quantity } = request.body

    if (!isQuantityValid(quantity) || !isNationalityValid(nationality.toLowerCase())) {
        return response.redirect('/')
    }

    let users = await getUsers(usersUrl)
    users = userFiltering(
        users, 
        nationality, 
        parseInt(quantity)
    )

    response.render('index', {
        title: "UsersOverview",
        users: users
    })
    
})


export default router