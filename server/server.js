require('dotenv').config();

const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const landsRoutes = require('./routes/lands');

const initDB = require('./init/initDB');

const port = process.env.PORT || 5000;

// ====================================== db connection 

const app = express();

mongoose.connect(process.env.DB_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', error => console.log(error));

db.once('open', async () => { 
   console.log('Connected to Database');

    const len = (await db.collection('lands').find({}).toArray()).length;
    
    if (len > 0) 
        return;
   
    await initDB();
});

// ====================================== middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/lands', landsRoutes);

// ====================================== server

app.listen(port, () => console.log(`Server listening on port ${port}`));
