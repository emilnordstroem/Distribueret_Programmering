// Tilføj kode for opgave 5.1 - 5.5 her!

function pageSetup(){
    makeAllParagraphsRed();
    makeFirstParagraphAfterHeadingBrown();
    makeSecondListElementGray();
    makeFirstParagraphAfterHeadingSubheading();
    giveEachHeadingElementAnID();
    giveFirstHeadingElementALink();
}

// Opgave 5.1
function makeAllParagraphsRed () {
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.className = "red";
    });
}

// Opgave 5.2
function makeFirstParagraphAfterHeadingBrown () {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(headingElement => {
        const nextElement = headingElement.nextElementSibling;
        nextElement.style.color = "brown";
    });
}

// Opgave 5.3
function makeSecondListElementGray () {
    const listElements = document.querySelectorAll("ul li");
    let counter = 1;
    for(const listElement of listElements){
        if(counter % 2 === 0){
            listElement.style.background = "gray";
        }
        counter++;
    }
}

// Opgave 5.4
function makeFirstParagraphAfterHeadingSubheading () {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(headingElement => {
        const newHeadingElement = document.createElement("h2");
        const textOfOldElement = headingElement.nextElementSibling.textContent;

        newHeadingElement.textContent = textOfOldElement;
        
        headingElement.nextElementSibling.replaceWith(newHeadingElement);
    });
}

// Opgave 5.5
function giveEachHeadingElementAnID () {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(headingElement => {
        headingElement.className = "heading";
    });
}

function giveFirstHeadingElementALink () {
    // get first element with matching tag
    const firstHeadingElement = document.querySelector("h1, h2, h3, h4, h5, h6");
    
    // construct anchor element
    const newAnchorElement = document.createElement("a");
    newAnchorElement.setAttribute("href", "https://eaaa.instructure.com/");
    newAnchorElement.setAttribute("target", "_blank");
    
    // set text content
    const newAncherTextContent = firstHeadingElement.textContent;
    newAnchorElement.textContent = newAncherTextContent;

    // remove heading content
    firstHeadingElement.textContent = "";

    // append anchor element
    firstHeadingElement.appendChild(newAnchorElement);
}