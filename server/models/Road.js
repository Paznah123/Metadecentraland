const mongoose = require('mongoose');

// ======================================

const roadSchema = new mongoose.Schema({
    position: {
        type: [Number],
        required: true,
        validate: [val => val.length === 3, 'Position must be an array of 3 numbers']
    },
    scale: {
        type: [Number],
        required: true,
        validate: [val => val.length === 3, 'Scale must be an array of 3 numbers']
    },
    rotation: {
        type: [Number],
        required: false,
        default: [0, 0, 0],
        validate: [val => val.length === 3, 'Rotation must be an array of 3 numbers']
    },
});

// ======================================

module.exports = mongoose.models.Road || mongoose.model('Road', roadSchema)