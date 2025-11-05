import express from 'express'

const router = express.Router()

const title = 'Earthquake'
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

async function get(url) {
    const respons = await fetch(url)
    if (respons.status !== 200) // OK
        throw new Error(respons.status)
    return await respons.json()
}

function selectEarthquakes(earthquakes, minMagnitude){
    return earthquakes.features
    .filter(quake => quake.properties.mag >= minMagnitude)
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag)
}

router.get('/', async (request, response) => {
    const data = await get(earthquakeUrl)
    const filteredEarthQuakes = selectEarthquakes(data, 0)
    response.render('index', {
        title: title,
        earthquakes: filteredEarthQuakes
    })
})

router.get('/:minMagnitude', async (request, response) => {
    const data = await get(earthquakeUrl)
    const minMagnitude = parseInt(request.params.minMagnitude)
    const filteredEarthQuakes = selectEarthquakes(data, minMagnitude)
    response.render('index', {
        title: title,
        earthquakes: filteredEarthQuakes
    })
})


export default router