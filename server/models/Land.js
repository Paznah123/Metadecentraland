const mongoose = require('mongoose');

// ======================================

const landSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    position: {
        type: [Number],
        required: true,
        validate: [val => val.length === 3, 'Position must be an array of 3 numbers']
    },
    rotationX: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isForSale: {
        type: Boolean,
        default: true
    },
    game: {
        type: String,
        default: ''
    },
});

// ======================================

module.exports = mongoose.models.Land || mongoose.model('Land', landSchema)