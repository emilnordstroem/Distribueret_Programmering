
function setup(){
    fillLabelElement();
    addResetButtonListener();
    addClickEvetnListener();
}

function fillLabelElement () {
    const inputElements = document.querySelectorAll("input");

    for (const inputElement of inputElements) {
        let labelElement;
        switch (inputElement.id) {
            case "tal":
                labelElement = createLabelElement("Tal:");
                addElementBeforeAnotherElement(
                    inputElement.parentElement, 
                    labelElement
                );
                break;
            case "tid":
                labelElement = createLabelElement("Tid");
                addElementBeforeAnotherElement(
                    inputElement.parentElement, 
                    labelElement
                );
                break;
            default: break;
        }
    }
}

function createLabelElement (labelText) {
    const labelElement = document.createElement("label");
    labelElement.textContent = labelText;
    return labelElement;
}

function addElementBeforeAnotherElement(parentElement, elementToAdd){
    const firstChildOfParentElement = parentElement.firstElementChild;
    parentElement.appendChild(firstChildOfParentElement);
    parentElement.appendChild(elementToAdd);
}

function addClickEvetnListener () {
    const elements = document.querySelectorAll("label", "input");
    elements.forEach(element => {
        element.addEventListener(onElementClick);
    });
}

function onElementClick () {
    
}

function addResetButtonListener(){
    const resetButton = document.querySelector("button");
    resetButton.addEventListener("click", resetInputElements);
}

function resetInputElements(){
    const inputElements = document.querySelectorAll("input");
    for (const inputElement of inputElements) {
        inputElement.value = "";
    }
}