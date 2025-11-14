
const numbersOverviewTable = document.getElementById('numbersOverviewTable')
const numberRows = numbersOverviewTable.querySelectorAll('.numberTableRow')

numberRows.forEach(numberRow => {
    const number = numberRow.firstChild.textContent
    const addNumberButton = numberRow.querySelector('.addNumberButton')

    addNumberButton.addEventListener('click', async () => {
        await post('/', number)
        location.reload()
    })
})

async function post (url, number) {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({ number: number}),
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.log('Point of failure in async post function (addValue.js)')
    }
}

