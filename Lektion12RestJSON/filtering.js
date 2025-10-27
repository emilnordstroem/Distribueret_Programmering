let fromDateCondition = new Date();
    fromDateCondition.setDate(fromDateCondition.getDate() - 7)
let fromMagnitudeCondition = 5

let filters = [
    doesEarthquakeMeetDateCondition(fromDateCondition),
    doesEarthquakeMeetMagnitudeCondition(fromMagnitudeCondition)
]

function doesEarthquakeMeetDateCondition (fromDateCondition) {
    return function (earthquake) {
        const earthquakeDate = earthquake.date
        const currentDate = new Date()
        return earthquakeDate >= fromDateCondition 
            && earthquakeDate <= currentDate
    }
}

function doesEarthquakeMeetMagnitudeCondition (fromMagnitudeCondition) {
    return function(earthquake) {
        return earthquake.magnitude >= fromMagnitudeCondition
    }
}

//===========================ON ACTION============================

function magnitudeFilteringAction () {
    const fromMagnitudeElement = document.getElementById('fromMagnitudeInputElement')
    fromMagnitudeCondition = parseFloat(fromMagnitudeElement.value)

    const fromDateElement = document.getElementById('fromDateInputElement')
    fromDateCondition = new Date(fromDateElement.value)

    filters = [
        doesEarthquakeMeetDateCondition(fromDateCondition),
        doesEarthquakeMeetMagnitudeCondition(fromMagnitudeCondition)
    ]

    setupEarthquakeTable(
        filters,
        earthquakeDescendingOrder
    )
}