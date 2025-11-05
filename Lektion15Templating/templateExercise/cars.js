import express from 'express'

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
        response.render('index', {
            title: 'Velkommen til min blog', 
            models: audiModels 
        })
        /*
        response.json(
            {
                brand: 'Audi',
                models: audiModels
            }
        ) 
        */       
    } else {
        response.json('Vi viser kun Audi modeller')
    }
})

router.post('/addmodel', (request, response) => {
    const model = request.params.model
    audiModels.push(model)
    response.redirect('index', {
        title: 'Velkommen til min blog', 
        models: audiModels 
    })
})

export default router