

const itemOverViewTable = document.getElementById('itemOverviewTable')
const itemOverviewTableRows = itemOverViewTable.querySelectorAll('itemOverviewRow')

itemOverviewTableRows.forEach((itemRow) => {

    const itemIdTableData = itemRow.firstChild()
    const addItemToListButton = itemRow.querySelector('addItemToListButton')

    addItemToListButton.addEventListener('click', async () => {
        const amountInputElement = itemRow.querySelector('numberOfItems')
        const amountSelected = parseInt(amountInputElement.value)

        const result = await post ('/addItemToList/:id', {
            id: itemIdTableData,
            amount: amountSelected
        }) 

        if (result) {
            
        }

    })

})


async function post (url, object) {
    try {
        const response = await fetch(url, {
            id: object.id,
            amount: object.amount
        })
        if (!response.ok) {
            throw new error()
        }
        return response.json()    
    } catch (error) {
        console.log('post error')   
    }
}


