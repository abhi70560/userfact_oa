const gameGrid = document.getElementById("game-grid");
const currentWord = document.getElementById("current-word");

// Define a list of words for the game
const words = ["HTML", "CSS", "JAVASCRIPT", "TETRIS", "DEVELOPER", "GITHUB"];

let currentWordIndex = 0;
let currentWordText = words[currentWordIndex];
let currentWordPosition = 0;

// Create the initial game grid
function createGameGrid() {
    gameGrid.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gameGrid.appendChild(cell);
    }
}

// Update the current word display
function updateCurrentWord() {
    currentWord.innerText = currentWordText;
}

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    if (e.key === currentWordText[currentWordPosition]) {
        currentWordPosition++;
        const cells = document.querySelectorAll(".cell");
        cells[currentWordPosition - 1].classList.add("filled");

        if (currentWordPosition === currentWordText.length) {
            currentWordPosition = 0;
            currentWordIndex++;
            if (currentWordIndex === words.length) {
                currentWordIndex = 0;
            }
            currentWordText = words[currentWordIndex];
            createGameGrid();
        }

        updateCurrentWord();
    }
});

// Initialize the game
createGameGrid();
updateCurrentWord();
