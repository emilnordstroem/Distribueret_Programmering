
const vareItems = document.querySelectorAll('.vareItemRow')

vareItems.forEach((vareRaekke) => {
    const vareIdInputElement = vareRaekke.querySelector('.vareIdCell')
    console.log(vareIdInputElement)
    const antalVareInputElement = vareRaekke.querySelector('.antalVareInput')
    console.log(antalVareInputElement)

    const tilfoejInteraktionFelt = vareRaekke.querySelector('.tilfoejVareInteraktion')
    const tilfoejVareKnap = tilfoejInteraktionFelt.querySelector('.tilfoejVareKnap')
    tilfoejVareKnap.addEventListener('click', async () => {
        const vareId = vareIdInputElement.textContent
        const antalVare = parseInt(antalVareInputElement.value)
        console.log(vareId + " " + antalVare)

        await post(`/indkoebskurv/${vareId}`, { antalVare: antalVare });
        location.reload()
    })
})

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    })
    if (!respons.ok) {
        throw new Error(respons.status)
    }
}
