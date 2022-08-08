const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUserDetails } = require('../controllers/user');

// ======================================

router.route('/register').post(registerUser); // register
router.route('/login').post(loginUser); // login
router.route('/:id').get(getUserDetails); // get user details

// ======================================

module.exports = router