const mongoose = require('mongoose');

// ======================================

const treeSchema = new mongoose.Schema({
    position: {
        type: [Number],
        required: true,
        validate: [val => val.length === 3, 'Position must be an array of 3 numbers']
    },
});

// ======================================

module.exports = mongoose.models.Tree || mongoose.model('Tree', treeSchema)