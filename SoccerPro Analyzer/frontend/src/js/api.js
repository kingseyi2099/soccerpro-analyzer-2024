// frontend/src/js/api.js

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to fetch player stats
async function fetchPlayerStats(playerId) {
    try {
        const response = await fetch(`${API_BASE_URL}/players/${playerId}/stats`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching player stats:', error);
    }
}

// Function to submit match stats
async function submitMatchStats(matchData) {
    try {
        const response = await fetch(`${API_BASE_URL}/matches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error submitting match stats:', error);
    }
}

// Function to fetch match predictions
async function fetchMatchPredictions(matchId) {
    try {
        const response = await fetch(`${API_BASE_URL}/matches/${matchId}/predict`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching match predictions:', error);
    }
}

// Exporting the functions for use in other modules
export { fetchPlayerStats, submitMatchStats, fetchMatchPredictions };