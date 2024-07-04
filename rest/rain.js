// Add this function to handle the Enter key press event in the input field
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById('input');
        const text = inputField.value;
        inputField.value = '';
        createFallingText(text);
    }
}

// Function to create and animate the falling text
function createFallingText(text) {
    for (let i = 0; i < 50; i++) { // Create 100 instances of the text
        const textElement = document.createElement('div');
        textElement.textContent = text;
        textElement.className = 'falling-text'; // Add CSS class for animation
        textElement.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
        textElement.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random falling duration
        textElement.addEventListener('animationend', () => {
            textElement.remove(); // Remove element after animation ends
        });
        document.body.appendChild(textElement);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", handleKeyPress);
});
