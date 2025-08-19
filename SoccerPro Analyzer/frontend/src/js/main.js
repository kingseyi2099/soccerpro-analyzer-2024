// frontend/src/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    console.log("SoccerPro Analyzer is ready!");

    // Add event listeners for user interactions
    setupEventListeners();
});

function setupEventListeners() {
    // Example: Add event listener for form submission
    const statForm = document.getElementById('statForm');
    if (statForm) {
        statForm.addEventListener('submit', handleStatFormSubmit);
    }
}

function handleStatFormSubmit(event) {
    event.preventDefault();
    // Gather form data and send to API
    const formData = new FormData(event.target);
    const stats = Object.fromEntries(formData.entries());

    // Call API to save stats
    savePlayerStats(stats);
}

function savePlayerStats(stats) {
    fetch('/api/player/stats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(stats),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Stats saved:', data);
        // Update UI or notify user
    })
    .catch(error => {
        console.error('Error saving stats:', error);
    });
}