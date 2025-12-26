

const fetchUsers = () => new Promise(resolve => setTimeout(() => resolve(['user1', 'user2']), 1000));
const fetchPosts = () => new Promise(resolve => setTimeout(() => resolve(['post1', 'post2']), 1500));
const fetchComments = () => new Promise(resolve => setTimeout(() => resolve(['comment1']), 800));

Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
.then(results => console.log(results))
.catch(error => console.log(error))

const api1 = () => new Promise((resolve) => setTimeout(() => resolve('Success 1'), 500));
const api2 = () => new Promise((_, reject) => setTimeout(() => reject('Failed!'), 700));
const api3 = () => new Promise((resolve) => setTimeout(() => resolve('Success 2'), 600));

Promise.allSettled([api1(), api2(), api3()])
.then(results => {
    const counterObject = results.reduce((accumulator, result) => {
        if (result.status === 'fulfilled') {
            accumulator.fulfilled += 1
        } else {
            accumulator.rejected += 1
        }
        return accumulator
    }, {fulfilled: 0, rejected: 0})
    console.log(counterObject);
})

const server1 = () => new Promise((_, reject) => setTimeout(() => reject('Server 1 down'), 1000));
const server2 = () => new Promise((_, reject) => setTimeout(() => reject('Server 2 down'), 500));
const server3 = () => new Promise((resolve) => setTimeout(() => resolve('Data from server 3'), 800));

Promise.any([server1(), server2(), server3()])
.then(result => console.log(result))

const source1 = () => new Promise((resolve) => setTimeout(() => resolve('Data A'), 2000));
const source2 = () => new Promise((_, reject) => setTimeout(() => reject('Failed'), 1000));
const source3 = () => new Promise((resolve) => setTimeout(() => resolve('Data B'), 500));

let promiseArray = [source1(), source2(), source3()]

Promise.any(promiseArray)
.then(result => console.log(result))

Promise.allSettled(promiseArray)
.then(results => results.forEach(result => console.log(result)))

function delay (milliseconds) {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            return resolve(`Resolved after ${milliseconds} milliseconds`)
        }, milliseconds)
    })
}
delay(1000)
.then(result => console.log(result))
.catch(error => console.log(error))

function coinFlip (guess) {
    return new Promise((resolve, reject) => {
        let coinFlipResult = Math.floor(Math.random() * 2)
        if (guess === 'heads' && coinFlipResult === 0) {
            return resolve('It was heads!!')
        } else if (guess === 'tails' && coinFlipResult === 1) {
            return resolve('It was tails!!')
        } else {
            return reject('Wrong guess')
        }
    })
}
coinFlip('tails')
.then(result => console.log(result))
.catch(result => console.log(result))

const oneSecondPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve('One second promise'), 1000))
const twoSecondPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve('Two second promise'), 2000))
const threeSecondPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve('Three second promise'), 3000))

promiseArray = [oneSecondPromise(), twoSecondPromise(), threeSecondPromise()]
Promise.all(promiseArray)
.then(results => results.forEach(result => console.log(result)))

function randomTimer (name) {
    return new Promise((resolve, reject) => {
        const randomMillisecondsTimer = Math.floor(Math.random() * 2000)
        setTimeout(() => resolve(`${name} resolved after ${randomMillisecondsTimer} milliseconds`), randomMillisecondsTimer)
    })
}
promiseArray = [randomTimer('A'), randomTimer('B'), randomTimer('C')]
Promise.any(promiseArray).then(result => console.log(result))

function unreliableAPI (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hitOrMiss = Math.random()
            if (hitOrMiss < 0.5) {
                reject(`${id} was Reliable`)
            } else {
                resolve(`${id} was Unreliable`)
            }
        }, 1000)
    })
}
promiseArray = [unreliableAPI(1), unreliableAPI(2), unreliableAPI(3), unreliableAPI(4)]

Promise.allSettled(promiseArray)
.then(results => results.forEach(result => console.log(result)))