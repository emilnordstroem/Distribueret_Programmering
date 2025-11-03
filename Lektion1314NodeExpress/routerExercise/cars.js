import express, { response } from 'express'

// delmængde af express - fange endpoints
// bruger eksisterende server
const router = express.Router()

const audiModels = ['A4', 'A6', 'A7', 'A8']

router.get('/', (request, response) => {
    response.json(
        {
            brands: ['BWM', 'Porsche', 'Mercedes', 'Audi']
        }
    )
})

router.get('/:brand/models', (request, response) => {
    const brand = request.params.brand
    if (brand.toLocaleLowerCase() == 'audi') {
        response.json(
            {
                brand: 'Audi',
                models: audiModels
            }
        )        
    } else {
        response.json('Vi viser kun Audi modeller')
    }
})

router.post('/addmodel', (request, response) => {
    const model = request.params.model
    audiModels.push(model)
    response.send('Tak for indsendelsen!')
})

// adgang til cars router i index.js
export default router