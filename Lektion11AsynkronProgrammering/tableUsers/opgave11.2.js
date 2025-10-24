// opgave11.2.js

// General User Information
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// Posts from specific user
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url)
    if (respons.status !== 200)
        throw new Error(respons.status)
    return await respons.json()
}

async function fillUserInformationTable () {
    const userInformationTableElement = document.getElementById("userInformationTable")
    const userInformation = await get(userUrl)
    
    for (const user of userInformation) {
        const tableRowElement = document.createElement("tr")
        tableRowElement.className = "selectableUsername"
        
        const tableDataElement = document.createElement("td")

        tableDataElement.textContent = user.username
        tableRowElement.appendChild(tableDataElement)

        userInformationTableElement.appendChild(tableRowElement);
    }   
}

fillUserInformationTable()