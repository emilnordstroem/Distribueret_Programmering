
function earthquakeAscendingOrder (earthquakes) {
    earthquakes.sort(
        (earthquake1, earthquake2) => earthquake2.magnitude - earthquake1.magnitude
    )
    return earthquakes
}

function earthquakeDescendingOrder (earthquakes) {
    earthquakes.sort(
        (earthquake1, earthquake2) => earthquake1.magnitude - earthquake2.magnitude
    )
    return earthquakes
}