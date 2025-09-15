const turnLimit = 3;
let turnCount = 0;

function onSumbit () {
    const boardElement = document.getElementById("board");
    boardElement.addEventListener("submit", (event) => {
        event.preventDefault();
        if(updateTurnCounter()) {
            rollRemainingDices();
        }
    });
}

onSumbit();

function updateTurnCounter () {
    if (turnCount >= turnLimit) {
        return false;
    }
    const turnCountLabel = document.getElementById("turn-count");
    turnCount++;
    turnCountLabel.textContent = turnCount;
    return true;
}

function rollRemainingDices () {

}