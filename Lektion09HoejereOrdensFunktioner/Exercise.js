
let numbers = [1, 2, 3, 4, 5]
console.log(
    numbers.map(number => number * 2)
)

let users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
];
console.log(
    users.filter(objekt => objekt.age >= 18)
)

numbers = [10, 20, 30, 40]
console.log(
    numbers.reduce((accumulator, number) => accumulator + number)
)

numbers = [1, 3, 7, 8, 9, 10]
console.log(
    numbers.find(number => number % 2 === 0)
)

let products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 }
];
console.log(
    products.map(objekt => objekt.name)
)
console.log(
    products.filter(objekt => objekt.price < 700).map(objekt => objekt.name)
)

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(
    words.reduce((accumulator, word) => {
        accumulator[word] = (accumulator[word] || 0) + 1 // IF ACCUMULATOR EXISTS INCREMENT BY 1
        return accumulator
    }, {})
)

users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const targetId = 2;
console.log(
    users.find(objekt => objekt.id === targetId)
)

const scores = [85, 92, 78, 95, 88];
console.log(
    scores.reduce((accumulator, score) => accumulator + score) / scores.length
)

products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Pants', category: 'Clothing' }
];
console.log(
    products.reduce((accumulator, product) => {
        if (!accumulator[product.category]) {
            accumulator[product.category] = [product]
        } else {
            accumulator[product.category].push(product)
        }
        return accumulator
    }, {})
)

const nested = [[1, 2], [3, 4], [5, 6]];
console.log(
    nested.reduce((accumulator, array) => {
        accumulator.push(...array)
        return accumulator
    }, [])
)

users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];
console.log(
    users.reduce((accumulator, objekt) => {
        if (!accumulator[objekt.id]) {
            accumulator[objekt.id] = objekt
        }
        return accumulator
    }, {})
)

const cart = [
  { name: 'Item 1', price: 20, quantity: 2 },
  { name: 'Item 2', price: 15, quantity: 1 },
  { name: 'Item 3', price: 30, quantity: 3 }
];
const taxRate = 0.08;
console.log(
    cart.reduce((accumulator, objekt) => accumulator + (objekt.price + objekt.quantity), 0) * (1 + taxRate)
)

numbers = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(
    numbers.reduce((accumulator, number) => {
        if (!accumulator.includes(number)) {
            accumulator.push(number)
        }
        return accumulator
    }, [])
)

users = [
  { name: 'alice', age: 19 },
  { name: 'bob', age: 25 },
  { name: 'charlie', age: 30 },
  { name: 'diana', age: 20 }
];
console.log(
    users.filter(user => user.age > 21).map(user => user.name.toUpperCase())
)

products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Monitor', price: 1200 },
  { name: 'Keyboard', price: 150 }
];
console.log(
    products.reduce((accumulator, produkt) => {
        return produkt.price > accumulator.price ? produkt : accumulator
    })
)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
    numbers.reduce((accumulator, number) => {
        if (number % 2 === 0) {
            accumulator.evens.push(number)
        } else {
            accumulator.odds.push(number)
        }
        return accumulator
    }, { evens: [], odds: [] })
)

const inventory = [
  { name: 'Widget', price: 10, quantity: 50 },
  { name: 'Gadget', price: 25, quantity: 30 },
  { name: 'Doohickey', price: 5, quantity: 100 }
];
console.log(
    inventory.reduce((accumulator, item) => accumulator + (item.quantity * item.price), 0)
)
