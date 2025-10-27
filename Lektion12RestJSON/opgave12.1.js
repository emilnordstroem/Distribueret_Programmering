// opgave12.1.js

// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
const earthquakeUrl ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

function main () {
    setupEarthquakeTable (
        filters,
        earthquakeDescendingOrder
    )
    onSubmitAction('submitOrderingInputElement', orderingAction)
    onSubmitAction('submitFilteringInputElement', magnitudeFilteringAction)
}

//==========================TABLE================================

async function setupEarthquakeTable (filterings, ordering) {
    let data;
    try {
        data = await get(earthquakeUrl)    
    } catch (error) {
        console.error('Error Occoured in get() method: ', error)
    }
    const earthQuakes = data.features
    let earthQuakesThatMeetCondition = createEarthQuakeArray(
        earthQuakes,
        filterings
    )
    earthQuakesThatMeetCondition = ordering(earthQuakesThatMeetCondition)
    
    fillEarthquakeTable(earthQuakesThatMeetCondition)
}

function createEarthQuakeArray (earthQuakes, filterings) {
    let earthQuakesThatMeetCondition = []
    
    for (const earthQuake of earthQuakes) {
        const earthquakeProperies = earthQuake.properties
        const earthquakeObject = new Earthquake(
            earthquakeProperies.mag, 
            earthquakeProperies.place,
            new Date(earthquakeProperies.time)
        )

        let fulfillsFilterCondition = true;
        for (const filter of filterings) {
            if (!filter(earthquakeObject)) {
                fulfillsFilterCondition = false
                break
            }
        }
        if (!fulfillsFilterCondition) {
            continue
        }

        earthQuakesThatMeetCondition.push(earthquakeObject)
    }
    return earthQuakesThatMeetCondition
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

//================================================================
main()