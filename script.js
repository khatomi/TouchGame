// Get references to the color box and game area
const colorBox = document.getElementById('colorBox');
const gameArea = document.getElementById('gameArea');

// Function to generate a random position within the game area
function getRandomPosition() {
    const x = Math.random() * (gameArea.clientWidth - 100);
    const y = Math.random() * (gameArea.clientHeight - 100);
    return { x, y };
}

// Function to change the position and color of the box
function changePosition() {
    const { x, y } = getRandomPosition();
    colorBox.style.transform = `translate(${x}px, ${y}px)`;
    colorBox.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Add click event listener to the color box
colorBox.addEventListener('click', changePosition);

// Set the initial position of the box when the page loads
changePosition();