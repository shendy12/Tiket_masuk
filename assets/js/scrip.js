function getNextParticipantNumber() {
    // Get the current number from localStorage
    let currentNumber = localStorage.getItem('currentParticipantNumber');
    if (!currentNumber) {
        currentNumber = 1; // Start from 1 if no number is stored
    } else {
        currentNumber = parseInt(currentNumber) + 1;
    }
    // Store the new number back to localStorage
    localStorage.setItem('currentParticipantNumber', currentNumber);
    return currentNumber;
}

function generateImage() {
    const name = document.getElementById('name').value;
    const number = getNextParticipantNumber(); // Get the next participant number
    const classOrCitizen = document.getElementById('classOrCitizen').value;
    const canvas = document.getElementById('undianCanvas');
    const context = canvas.getContext('2d');

    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = './assets/images/background.jpg'; // Replace with your image path
    backgroundImage.onload = function() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Set text properties
        context.fillStyle = "#000000";
        context.font = "20px Arial";
        context.textAlign = "center";

        // Draw text on canvas
        context.fillText("Nama: " + name, canvas.width / 2, canvas.height / 2 - 30);
        context.fillText("Kelas/Warga: " + classOrCitizen, canvas.width / 2, canvas.height / 2);
        context.fillText("Nomor Undian: " + number, canvas.width / 2, canvas.height / 2 + 30);

        // Create download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL('image/png');
    }
}

// Add event listener to button click
document.getElementById('undianForm').addEventListener('submit', function (e) {
    e.preventDefault();
    generateImage();
});
