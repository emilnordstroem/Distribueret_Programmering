const express = require('express')

const userUrl = 'https://jsonplaceholder.typicode.com/users';
const port = 8080

const app = express()

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function genererTabel(users) {
    let html = '<table>';
    for (user of users) {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

app.get('/', async (request, response) => {
    try {
        const userData = await get(userUrl)
        const html = genererTabel(userData)
        response.status(200).send(html)
    } catch (error) {
        console.error('Loading Error', error.message);
        response.status(400).send('Loading Error')
    }
})

app.listen(port)
console.log(`http://localhost:${port}`);
