
const Land = require('../models/Land');
const Park = require('../models/Park');
const Tree = require('../models/Tree');
const Road = require('../models/Road');

const { PARKS, TREES, ROADS, LANDS } = require('./build_data');

// ============================================================

const initDB = async () => { // upload lands data to db
   try {
      await Land.insertMany(LANDS);
      await Park.insertMany(PARKS);
      await Tree.insertMany(TREES);
      await Road.insertMany(ROADS);

      console.log('Finishing uploading lands to database');
   } catch (err) {
      console.log(err);
      console.log('Lands could not be added');
   }
};

// ============================================================

module.exports = initDB;