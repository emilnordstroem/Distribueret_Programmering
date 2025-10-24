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

    let earthQuakesThatMeetCondition = []

    for (const recordedEarthQuake of recordedEarthQuakes) {
        const earthquakeProperies = recordedEarthQuake.properties

        const earthquakeObject = {
            "mag": earthquakeProperies.mag,
            "place": earthquakeProperies.place,
            "time": new Date(earthquakeProperies.time)
        }

        if (!doesRecordedEarthquakeMeetCondition(earthquakeObject)) {
            continue;
        }
        earthQuakesThatMeetCondition.push(earthquakeObject)
    }

    earthQuakesThatMeetCondition.sort(
        (earthquake1, earthquake2) => earthquake2.mag - earthquake1.mag
    )

    for (const earthquake of earthQuakesThatMeetCondition) {
        const tableRowElement = document.createElement("tr")

        const tableDataMagnitudeElement = document.createElement("td")
        tableDataMagnitudeElement.textContent = earthquake.mag
        tableRowElement.appendChild(tableDataMagnitudeElement);

        const tableDataPlaceElement = document.createElement("td")
        tableDataPlaceElement.textContent = earthquake.place
        tableRowElement.appendChild(tableDataPlaceElement);

        const tableDataTimeElement = document.createElement("td")
        tableDataTimeElement.textContent = earthquake.time
        tableRowElement.appendChild(tableDataTimeElement);

        earthquakeOverviewTableElement.appendChild(tableRowElement)
    }

}

function doesRecordedEarthquakeMeetCondition (earthquakeObject) {
    const earthquakeTime = earthquakeObject.time
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000) // this is seven days from now in milliseconds

    const earthquakeMagnitude = earthquakeObject.mag
    const magnitudeCondition = 5

    return (earthquakeTime >= sevenDaysAgo && earthquakeTime <= Date.now()) 
        && earthquakeMagnitude >= magnitudeCondition
}


main()
