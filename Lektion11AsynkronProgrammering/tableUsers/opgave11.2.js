// opgave11.2.js

function main(){
    fillUserInformationTable()
}

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
        tableRowElement.className = "selectableUser"
        
        const usernameTableDataElement = document.createElement("td")

        usernameTableDataElement.textContent = user.username
        tableRowElement.appendChild(usernameTableDataElement)

        const userIdTableDataElement = document.createElement("td")
        userIdTableDataElement.textContent = user.id
        tableRowElement.appendChild(userIdTableDataElement)

        tableRowElement.addEventListener("click", async () => {
            const userPosts = await get(postUrl + user.id)
            fillUserPostsTable(user.username, userPosts)
        })

        userInformationTableElement.appendChild(tableRowElement)
    }
}


function fillUserPostsTable (username, userPosts) {
    const postedByUserLabel = document.getElementById("postedByUserLabel")
    postedByUserLabel.textContent = `Posts by ${username}`

    for (const userPost of userPosts) {
        const tableRowElement = document.createElement("tr")        
        const postTitleTableDataElement = document.createElement("td")
        const postBodyTableDataElement = document.createElement("td")

        postTitleTableDataElement.textContent = userPost.title
        tableRowElement.appendChild(postTitleTableDataElement)

        postBodyTableDataElement.textContent = userPost.body
        tableRowElement.appendChild(postBodyTableDataElement)

        postedByUserLabel.appendChild(tableRowElement)
    }
}

main()