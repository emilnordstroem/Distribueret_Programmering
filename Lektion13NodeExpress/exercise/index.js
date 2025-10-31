import express from 'express'

const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

const port = 10000
const app = express()

app.use(express.static('assets')) // filer i mappe assets fanges - tager assets from roden

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function generateEarthquakeTable(earthquakes) {
    let html = '<table>';
    for (let quake of earthquakes) {
        let { time, place, mag } = quake.properties;
        html += '<tr><td>' + mag +
            '</td><td>' + place +
            '</td><td>' + new Date(time).toLocaleString() +
            '</td></tr>\n';
    }
    html += '</table><br><div></div>';
    return html;
}

function selectEarthquakes(earthquakes, minMagnitude){
    return earthquakes.features
    .filter(quake => quake.properties.mag >= minMagnitude)
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);
}

app.get('/:minMagnitude', async (request, response) => {
    const data = await get(earthquakeUrl)
    const minMagnitude = request.params.minMagnitude
    const filteredEarthQuakes = selectEarthquakes(data, minMagnitude)
    const html = generateEarthquakeTable(filteredEarthQuakes)
    response.send(html)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})