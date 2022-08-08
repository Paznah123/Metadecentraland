const User = require('../models/User');

// ============================================================

const registerUser = async (req, res) => {
    try {
        
        const { fullName, email, password } = req.body; // get request params
        const userExists = await User.findOne({ email }); // check if user exists
        
        if (userExists) { // if found user in db
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        const user = new User({ fullName, email, password }); // create new user
    
        await user.save() // save user to db
                .then(() => {
                    res.status(201).json({ // send response data to client
                        _id: user._id,
                        fullName
                    });
                });
    } catch (err) {
        res.status(400).json({ message: 'User could not be created' });
    }
};

// ============================================================ 

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; // get request params

        const user = await User.findOne({ email }); // check if user exists
    
        if (user && await user.matchPassword(password)) { // if found user in db and password matches
            res.json({ // send response data to client
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            });
        } else 
            res.status(400).json({ message: 'Invalid password or email!' }); 
    } catch(err) {
        res.status(500).json({ message: "Can't authenticate user" });
    }
};

// ============================================================

const getUserDetails = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }); // check if user exists

        if (user) { // if found user in db
            res.json({ // send response data to client
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                tokens: user.tokens
            });
        } else
            res.json({ message: 'User not found' }); // notify client that use was not found
    } catch (err) {
        res.status(500).json({ message: "Couldn't get user details" });
    }
};

// ============================================================

module.exports = { registerUser, loginUser, getUserDetails };