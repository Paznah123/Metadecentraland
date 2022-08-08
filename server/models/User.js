const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// ======================================

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    tokens: {
        type: Number,
        default: 1000
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

// ======================================

userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) next();
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
};

// ======================================

module.exports = mongoose.models.User || mongoose.model('User', userSchema)