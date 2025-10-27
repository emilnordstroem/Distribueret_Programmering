// opgave12.1.js

// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
const earthquakeUrl ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

function main () {
    setupEarthquakeTable (
        doesEarthquakeMeetMagnitudeAndDateCondition,
        earthquakeAscendingOrder
    )
    onSubmitAction('submitOrderingInputElement', sortingAction)
}

//==========================OBJECT===============================
class Earthquake {
    #magnitude
    #place
    #date

    constructor (magnitude, place, date) {
        this.#magnitude = magnitude
        this.#place = place
        this.#date = date
    }

    get magnitude () {
        return this.#magnitude
    }

    get place () {
        return this.#place
    }

    get date () {
        return this.#date
    }
}

//==========================TABLE================================

async function setupEarthquakeTable (doesEarthquakeMeetCondition, ordering) {
    let data;
    try {
        data = await get(earthquakeUrl)    
    } catch (error) {
        console.error('Error Occoured in get() method: ', error)
    }

    const recordedEarthQuakes = data.features
    let earthQuakesThatMeetCondition = createEarthQuakeArray(
        recordedEarthQuakes,
        doesEarthquakeMeetCondition
    )

    earthQuakesThatMeetCondition = ordering(earthQuakesThatMeetCondition)
    
    fillEarthquakeTable(earthQuakesThatMeetCondition)
}

function createEarthQuakeArray (recordedEarthQuakes, doesRecordedEarthquakeMeetCondition) {
    let earthQuakesThatMeetCondition = []
    
    for (const recordedEarthQuake of recordedEarthQuakes) {
        const earthquakeProperies = recordedEarthQuake.properties

        const earthquake = new Earthquake(
            earthquakeProperies.mag, 
            earthquakeProperies.place,
            new Date(earthquakeProperies.time)
        )

        if (!doesRecordedEarthquakeMeetCondition(earthquake)) {
            continue;
        }
        earthQuakesThatMeetCondition.push(earthquake)
    }
    return earthQuakesThatMeetCondition
}

function doesEarthquakeMeetMagnitudeAndDateCondition (earthquake) {
    const earthquakeTime = earthquake.date
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000) // this is seven days from now in milliseconds

    const earthquakeMagnitude = earthquake.magnitude
    const magnitudeCondition = 5

    return (earthquakeTime >= sevenDaysAgo && earthquakeTime <= Date.now()) 
        && earthquakeMagnitude >= magnitudeCondition
}

function fillEarthquakeTable (earthquakes) {
    const earthquakeOverviewTableElement = document.getElementById("earthquakesOverviewTable")
    earthquakeOverviewTableElement.innerHTML = '';

    for (const earthquake of earthquakes) {
        const tableRowElement = document.createElement("tr")

        const tableDataMagnitudeElement = document.createElement("td")
        tableDataMagnitudeElement.textContent = earthquake.magnitude
        tableRowElement.appendChild(tableDataMagnitudeElement);

        const tableDataPlaceElement = document.createElement("td")
        tableDataPlaceElement.textContent = earthquake.place
        tableRowElement.appendChild(tableDataPlaceElement);

        const tableDataTimeElement = document.createElement("td")
        tableDataTimeElement.textContent = earthquake.date
        tableRowElement.appendChild(tableDataTimeElement);

        earthquakeOverviewTableElement.appendChild(tableRowElement)
    }
}

//===========================ON ACTION============================

function onSubmitAction (elementId, action) {
    const element = document.getElementById(elementId)
    element.addEventListener('click', (event) => {
        event.preventDefault()
        action(element)
    })
}

function sortingAction (element) {
    const currentOrderingState = element.textContent
    if (currentOrderingState === 'asc') {
        element.textContent = 'desc'
        setupEarthquakeTable(
            doesEarthquakeMeetMagnitudeAndDateCondition,
            earthquakeDescendingOrder
        )
    } else if (currentOrderingState === 'desc') {
        element.textContent = 'asc'
        setupEarthquakeTable(
            doesEarthquakeMeetMagnitudeAndDateCondition,
            earthquakeAscendingOrder
        )
    }
}


main()