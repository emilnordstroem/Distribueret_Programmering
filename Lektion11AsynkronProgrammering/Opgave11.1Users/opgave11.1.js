// opgave11.1.js

// const userUrl = 'https://jsonplaceholder.typicode.com/users';
const userUrl = 'https://jsonplaceholder.typicode.com/users/10';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

// Asynchronous version
function printUsers (url) {
    get(url)
    .then(data => console.log(data))
    .catch(error => console.error("Error", error))
}

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) // OK
        throw new Error(response.status);
    return await response.json();
}

printUsers(userUrl);