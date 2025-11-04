import express from 'express'
import fs from 'fs/promises';
import path from 'path';

const router = express.Router()
const viewFolder = './view/image'

router.get('/', async (request, response) => {
    try {
    
        const filenames = await fs.readdir(viewFolder)
        response.render('overskrifter', { filenames: filenames })
    
    } catch (error) {
        console.error(error.message)
        response.send('Loading Error')
    }
})

router.get('/view/:filename', (request, response) => {
    try {
        
        const filename = request.params.filename
        const filePath = path.join(viewFolder, filename)
        const fileExtention = path.extname(filename)

        if (fileExtention === '.pug') {
            response.render('billede', { filename })
        } else if (fileExtention === '.html') {
            response.sendFile(filePath)
        } else {
            response.status(404).send('Unsupported File Path')
        }

    } catch (error) {
        console.error(error.message)
        response.send('Resource Selection Error')
    }
})


export default router