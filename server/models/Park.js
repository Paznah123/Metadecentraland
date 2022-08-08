const mongoose = require('mongoose');

// ======================================

const parkSchema = new mongoose.Schema({
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
});

// ======================================

module.exports = mongoose.models.Park || mongoose.model('Park', parkSchema)