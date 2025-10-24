// opgave12.1.js
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
const earthquakeUrl ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

function main () {
    fillEarthquakeTable (earthquakeUrl)
}

async function fillEarthquakeTable (url) {
    const earthquakeOverviewTableElement = document.getElementById("earthquakesOverviewTable")
    const data = await get(url).catch(error => console.error('Error Occoured in get() method: ', error))
    const recordedEarthQuakes = data.features

    for (const recordedEarthQuake of recordedEarthQuakes) {
        const earthquakeProperties = recordedEarthQuake.properties

        if (!doesRecordedEarthquakeMeetCondition(earthquakeProperties)) {
            continue;
        }

        const tableRowElement = document.createElement("tr")

        const tableDataMagnitudeElement = document.createElement("td")
        tableDataMagnitudeElement.textContent = earthquakeProperties.mag
        tableRowElement.appendChild(tableDataMagnitudeElement);

        const tableDataPlaceElement = document.createElement("td")
        tableDataPlaceElement.textContent = earthquakeProperties.place
        tableRowElement.appendChild(tableDataPlaceElement);

        const tableDataTimeElement = document.createElement("td")
        const earthquakeDate = new Date(earthquakeProperties.time)
        tableDataTimeElement.textContent = earthquakeDate.toString()
        tableRowElement.appendChild(tableDataTimeElement);

        earthquakeOverviewTableElement.appendChild(tableRowElement)
    }

}

function doesRecordedEarthquakeMeetCondition (earthquakeProperies) {
    const earthquakeTime = earthquakeProperies.time
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000) // this is seven days from now in milliseconds

    const earthquakeMagnitude = earthquakeProperies.mag
    const magnitudeCondition = 5

    return (earthquakeTime >= sevenDaysAgo && Date.now()) 
        && earthquakeMagnitude >= magnitudeCondition
}

main()
