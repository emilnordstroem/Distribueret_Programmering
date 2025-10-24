// opgave11.1.js

const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/10';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

// Asynchronous implementation
async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) // OK
        throw new Error(response.status);
    return await response.json();
}

function printUsers (url) {
    get(url)
    .then(result => console.log(result))
    .catch(error => console.error("Error has occured", error))
}

printUsers(userUrl);