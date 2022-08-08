const Park = require('../models/Park');
const Tree = require('../models/Tree');
const Road = require('../models/Road');
const Land = require('../models/Land');
const User = require('../models/User');

// ============================================================

const fetchLands = async (req, res) => { // fetch all building and environment data from db

    try {
        const lands = await Land.find();
        const parks = await Park.find();
        const trees = await Tree.find();
        const roads = await Road.find();
        
        res.json({ lands, parks, trees, roads }); // send all data to client
    } catch (err) {
        res.status(400).json({ message: 'Could not fetch data' });
    }
};

// ============================================================

const fetchLandData = async (req, res) => {
   try {
      const { id } = req.params;
      const land = await Land.findOne({ _id: id }); // find land
      const owner = land.ownerId ? await User.findOne({ _id: land.ownerId }): ''; // find owner's name
      
      res.json({ land, owner }); // send land data to client
   } catch (err) {
      res.status(400).json({ message: 'Could not fetch data' });
   }
};

// ============================================================

const editLand = async (req, res) => {
   try {
      const { id } = req.params;
      const { isForSale, price, game } = req.body;

      const land = await Land.findOne({ _id: id }); // find land

      // updated land data
      land.isForSale = isForSale === 'Yes' ? true : false;
      land.price = price;
      land.game = game !== 'No game' ? game : '';
      
      await land.save(); // save land

      res.json({ message: 'Land updated', land }); // send updated land data to client
   } catch (err) {
      res.status(400).json({ message: 'Could not edit land' });
   }
};

// ============================================================

module.exports = { fetchLands, fetchLandData, editLand };