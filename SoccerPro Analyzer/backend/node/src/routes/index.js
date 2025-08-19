const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Route to get all players
router.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to add a new player
router.post('/players', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        goals: req.body.goals,
        assists: req.body.assists,
        passes: req.body.passes,
        tackles: req.body.tackles,
        saves: req.body.saves,
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get match predictions
router.get('/predictions', (req, res) => {
    // Placeholder for prediction logic
    res.json({ message: 'Prediction logic will be implemented here.' });
});

module.exports = router;