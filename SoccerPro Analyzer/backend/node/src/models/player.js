const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    passes: {
        type: Number,
        default: 0
    },
    tackles: {
        type: Number,
        default: 0
    },
    saves: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;