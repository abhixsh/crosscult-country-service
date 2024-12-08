const mongoose = require('mongoose');
const Country = require('../models/countryModel');
const Grid = require('gridfs-stream');
const fs = require('fs');
const path = require('path');
const mongooseConnection = mongoose.connection;

let gfs;
mongooseConnection.once('open', () => {
    gfs = Grid(mongooseConnection.db, mongoose.mongo);
    gfs.collection('fs');
});

exports.createCountry = async (req, res) => {
    const { name, description } = req.body;

    const newCountry = new Country({
        name,
        description,
        image: req.file.id,
    });

    try {
        const country = await newCountry.save();
        res.status(201).json(country);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
