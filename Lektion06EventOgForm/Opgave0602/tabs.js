
function setup () {
    addSpanClickEventListener();
}

function addSpanClickEventListener () {
    const spanElements = document.querySelectorAll("span");
    spanElements.forEach(spanElement => {
        spanElement.addEventListener("click", onSpanElementClick);
    });
}

function onSpanElementClick (event) {
    const elementClicked = event.currentTarget;
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = elementClicked.textContent;
    elementClicked.replaceWith(paragraphElement);
}
