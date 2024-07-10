// Generate a random number between 1 and 20
let randomNumber = Math.floor(Math.random() * 20) + 1;

// Variable to keep track of remaining attempts
let attempts = 5;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Check if the input is a valid number between 1 and 20
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        showMessage('Please enter a number between 1 and 20.');
        return;
    }

    if (hardMode) {
        // If hard mode is on, allow only one guess
        disableInput();
        if (userGuess === randomNumber) {
            showMessage('CORRECT! HOW DID YOU PULL THIS OFF?!', 'green');
        } else {
            showMessage(`Wrong guess. Correct answer: ${randomNumber}`, 'red');
        }
    } else {
        // If not hard mode, follow the existing logic
        attempts--;
        if (userGuess === randomNumber) {
            showMessage('CORRECT! HOW DID YOU PULL THIS OFF?!', 'green');
            disableInput();
        } else {
            const message = userGuess < randomNumber ? 'Higher!' : 'Lower!';
            showMessage(message, 'orange');

            if (attempts === 0) {
                showMessage('TRY AGAIN :(', 'red');
                disableInput();
            }
        }
    }

    // Clear the input field
    document.getElementById('userGuess').value = '';

    // Set focus back to the input field
    document.getElementById('userGuess').focus();
}

// Function to display messages to the user
function showMessage(text, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.style.color = color || 'white';
}

// Function to disable input fields and button
function disableInput() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}

// Hard mode toggle variable
let hardMode = false;

// Function to toggle hard mode
function toggleHardMode() {
    hardMode = document.getElementById('hardModeSwitch').checked;
    if (hardMode) {
        showMessage('Hard Mode: ON');
    } else {
        showMessage('Hard Mode: OFF');
    }
}

// Function to reset the game state
function resetGame() {
    // Reset random number and attempts
    randomNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 5;

    // Clear the message
    showMessage('');

    // Enable input field and button
    document.getElementById('userGuess').disabled = false;
    document.querySelector('button').disabled = false;

    // Clear the input field
    document.getElementById('userGuess').value = '';

    // Set focus back to the input field
    document.getElementById('userGuess').focus();
}
