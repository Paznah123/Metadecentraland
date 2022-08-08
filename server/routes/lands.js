const express = require('express');
const router = express.Router();

const { fetchLands, fetchLandData, editLand } = require('../controllers/lands');

// ======================================

router.route('/').get(fetchLands); // get all lands
router.route('/:id').get(fetchLandData); // get a land
router.route('/:id/edit').post(editLand); // edit a land

// ======================================

module.exports = router