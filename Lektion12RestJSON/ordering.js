
function orderingAction (element) {
    const currentOrderingState = element.textContent
    if (currentOrderingState === 'asc') {
        element.textContent = 'desc'
        setupEarthquakeTable(
            filters,
            earthquakeAscendingOrder
        )
    } else if (currentOrderingState === 'desc') {
        element.textContent = 'asc'
        setupEarthquakeTable(
            filters,
            earthquakeDescendingOrder
        )
    }
}

function earthquakeAscendingOrder (earthquakes) {
    earthquakes.sort(
        (earthquake1, earthquake2) => earthquake1.magnitude - earthquake2.magnitude
    )
    return earthquakes
}

function earthquakeDescendingOrder (earthquakes) {
    earthquakes.sort(
        (earthquake1, earthquake2) => earthquake2.magnitude - earthquake1.magnitude
    )
    return earthquakes
}