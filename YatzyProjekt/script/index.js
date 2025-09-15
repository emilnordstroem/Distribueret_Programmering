let turnCount = 0;

function onSumbit () {
    const boardElement = document.getElementById("board");
    boardElement.addEventListener("submit", (event) => {
        event.preventDefault();
        updateTurnCounter();
    });
}

onSumbit();

function updateTurnCounter () {
    if (turnCount >= 3) {
        return;
    }
    const turnCountLabel = document.getElementById("turn-count");
    turnCount++;
    turnCountLabel.textContent = turnCount;
}