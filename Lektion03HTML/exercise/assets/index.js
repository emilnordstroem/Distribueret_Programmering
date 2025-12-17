const numbers = [1, 2, 3, 4, 5];

function createUnorderedListElement(numbers) {
    const unorderedListElement = document.createElement('ul')

    numbers.forEach(number => {
        const numberListElement = document.createElement('li')
        numberListElement.textContent = number
        unorderedListElement.appendChild(numberListElement)
    })

    return unorderedListElement
}
const unorderedListElement = createUnorderedListElement(numbers)


function createDivElement(){
    const divElement = document.createElement('div')
    divElement.id = 'output'
    return divElement
}
const divElement = createDivElement()
divElement.appendChild(unorderedListElement)


const users = [
  { name: 'Alice', email: 'alice@example.com', age: 17 },
  { name: 'Bob', email: 'alice@example.com', age: 22 },
  { name: 'Charlie', email: 'charlie@example.com', age: 15 },
  { name: 'Diana', email: 'diana@example.com', age: 25 }
];

function createUserNameDivElement(user){
    const userNameDivElement = document.createElement('div')
    const nameParagraph = document.createElement('p')
    nameParagraph.textContent = user.name
    userNameDivElement.appendChild(nameParagraph)
    return userNameDivElement
}
users.forEach(user => {
    const userNameDivElement = createUserNameDivElement(user)
    divElement.appendChild(userNameDivElement)
})

document.body.appendChild(divElement)

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 29 },
  { id: 3, name: 'Phone', category: 'Electronics', price: 699 },
  { id: 4, name: 'Pants', category: 'Clothing', price: 49 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 399 }
];

function createProductCardDivElement (product) {
    const productCardDivElement = document.createElement('div')

    const productNameLabel = document.createElement('label')
    productNameLabel.textContent = product.name
    productCardDivElement.appendChild(productNameLabel)

    const productPriceLabel = document.createElement('label')
    productPriceLabel.textContent = ` - $${product.price}`
    productCardDivElement.appendChild(productPriceLabel)

    return productCardDivElement
}
products.forEach(product => {
    const productCardDivElement = createProductCardDivElement(product)
    document.body.appendChild(productCardDivElement)
})

function createUserCardDivElement (user) {
    const userCardDivElement = document.createElement('div')

    const userNameLabel = document.createElement('label')
    userNameLabel.textContent = user.name
    userCardDivElement.appendChild(userNameLabel)

    const ageLabel = document.createElement('label')
    ageLabel.textContent = user.age
    userCardDivElement.appendChild(ageLabel)

    return userCardDivElement
}
users.filter(user => user.age >= 18).forEach(user => {
    const userCardDivElement = createUserCardDivElement(user)
    document.body.appendChild(userCardDivElement)
})


function createProductBadge(product){
    const productBadgeDiv = document.createElement('div')
    productBadgeDiv.classList.add('productBadgeDiv')

    const productNameLabel = document.createElement('label')
    productNameLabel.textContent = product.name
    productBadgeDiv.appendChild(productNameLabel)

    const productPriceLabel = document.createElement('label')
    productPriceLabel.textContent = product.price
    productBadgeDiv.appendChild(productPriceLabel)

    return productBadgeDiv
}
products.forEach(product => {
    const productBadge = createProductBadge(product)

    const saleParagraphElement = document.createElement('p')
    saleParagraphElement.textContent = 'sale'

    if (product.price < 700) {
        productBadge.appendChild(saleParagraphElement)
    }

    document.body.appendChild(productBadge)
})


const tasks = [
  { id: 1, text: 'Buy groceries', completed: true },
  { id: 2, text: 'Walk the dog', completed: false },
  { id: 3, text: 'Finish homework', completed: true },
  { id: 4, text: 'Call mom', completed: false }
];

function createTasksList (tasks) {
    const listOfTasks = document.createElement('ul')

    tasks.forEach(task => {
        const taskListElement = document.createElement('li')
        
        const taskDescriptionElement = document.createElement('p')
        taskDescriptionElement.textContent = task.text
        taskListElement.appendChild(taskDescriptionElement)

        if (task.completed) {
            taskDescriptionElement.classList.add('completedTask')
        } else {
            taskDescriptionElement.classList.add('incompletedTask')
        }

        listOfTasks.appendChild(taskListElement)
    })

    return listOfTasks
}
const listOfTasks = createTasksList(tasks)
document.body.appendChild(listOfTasks)


const students = [
  { name: 'John', grade: 85 },
  { name: 'Sarah', grade: 45 },
  { name: 'Mike', grade: 92 },
  { name: 'Emma', grade: 58 }
];

function createStudentGradeCard(student){
    const studentGradeCard = document.createElement('div')

    const studentNameLabel = document.createElement('label')
    studentNameLabel.textContent = student.name
    studentGradeCard.appendChild(studentNameLabel)

    const studentGradeLabel = document.createElement('label')
    studentGradeLabel.textContent = student.grade
    studentGradeCard.appendChild(studentGradeLabel)

    if (student.grade >= 60) {
        studentGradeCard.classList.add('passing')
    } else {
        studentGradeCard.classList.add('failing')
    }

    return studentGradeCard
}
students.forEach(student => {
    const studentGradeCard = createStudentGradeCard(student)
    document.body.appendChild(studentGradeCard)
})


function createUserOverviewTable (users) {
    const userOverviewTable = document.createElement('table')
    
    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')
    for (const property in users[0]) {
        const tableHeader = createTableHeader(property)
        headerRow.appendChild(tableHeader)
    }
    thead.appendChild(headerRow)

    const tbody = document.createElement('tbody')
    users.forEach(user => {
        const userOverviewTableRow = createUserOverviewTableRow(user)
        tbody.appendChild(userOverviewTableRow)
    })

    userOverviewTable.appendChild(thead)
    userOverviewTable.appendChild(tbody)

    return userOverviewTable
}

function createTableHeader (label) {
    const tableHeader = document.createElement('th')
    tableHeader.textContent = label
    return tableHeader
}

function createUserOverviewTableRow (user) {
    const userOverviewTableRow = document.createElement('tr')

    for (const property in user) {
        const userOverviewTableData = document.createElement('td')
        userOverviewTableData.textContent = user[property]
        userOverviewTableRow.appendChild(userOverviewTableData)
    }

    return userOverviewTableRow
}

const userOverviewTable = createUserOverviewTable(users)
document.body.appendChild(userOverviewTable)


function createCategoryDivElement (category, products) {
    const categoryDivElement = document.createElement('div')

    const categoryHeaderElement = document.createElement('h3')
    categoryHeaderElement.textContent = category
    categoryDivElement.appendChild(categoryHeaderElement)

    const productList = createProductList(products)
    categoryDivElement.appendChild(productList)

    return categoryDivElement
}

function createProductList (products) {
    const productList = document.createElement('ul')

    products.forEach(product => {
        const productListElement = document.createElement('li')
        productListElement.textContent = `${product.name} - $${product.price}`
        productList.appendChild(productListElement)
    })

    return productList
}

const productsByCategories = products.reduce((accumulator, product) => {
    const category = product.category
    if (!accumulator[category]) {
        accumulator[category] = []
    } 
    
    accumulator[category].push(product)

    return accumulator
}, {})

for (const category in productsByCategories) {
    const products = productsByCategories[category]
    const categoryDivElement = createCategoryDivElement(category, products)
    document.body.appendChild(categoryDivElement)
}


const inventory = [
  { id: 1, name: 'Widget', quantity: 5 },
  { id: 2, name: 'Gadget', quantity: 3 },
  { id: 3, name: 'Doohickey', quantity: 8 }
];

function createItemDivElement (item) {
    const itemDivElement = document.createElement('div')
    itemDivElement.classList.add('itemDiv')

    const itemLabel = document.createElement('label')
    itemLabel.textContent = `Item: ${item.name} Quantity:`
    itemDivElement.appendChild(itemLabel)

    const itemQuantityLabel = document.createElement('label')
    itemQuantityLabel.id = `quantityForItemId${item.id}`
    itemQuantityLabel.textContent = item.quantity
    itemDivElement.appendChild(itemQuantityLabel)

    const incrementQuantityButton = document.createElement('button')
    incrementQuantityButton.textContent = '+'
    incrementQuantityButton.addEventListener('click', () => incrementQuantity(item.id))
    itemDivElement.appendChild(incrementQuantityButton)

    const subtractQuantityButton = document.createElement('button')
    subtractQuantityButton.textContent = '-'
    subtractQuantityButton.addEventListener('click', () => subtractQuantity(item.id))
    itemDivElement.appendChild(subtractQuantityButton)

    return itemDivElement
}

inventory.forEach(item => {
    const itemDivElement = createItemDivElement(item)
    document.body.appendChild(itemDivElement)
})

function incrementQuantity (itemId) {
    const quantityLabel = document.getElementById(`quantityForItemId${itemId}`)
    if (!quantityLabel) {
        return
    }
    quantityLabel.textContent = parseInt(quantityLabel.textContent) + 1
}

function subtractQuantity (itemId) {
    const quantityLabel = document.getElementById(`quantityForItemId${itemId}`)
    if (!quantityLabel) {
        return
    }
    quantityLabel.textContent = parseInt(quantityLabel.textContent) - 1
}