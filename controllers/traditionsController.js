const Traditions = require('../models/traditionsModel');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const fs = require('fs');
const mongooseConnection = mongoose.connection;

let gfs;
mongooseConnection.once('open', () => {
    gfs = Grid(mongooseConnection.db, mongoose.mongo);
    gfs.collection('fs');
});

exports.createTraditions = async (req, res) => {
    const { description } = req.body;

    const newTradition = new Traditions({
        description,
        mainImage: req.files.mainImage[0].id,
        squareImage: req.files.squareImage[0].id,
    });

    try {
        const tradition = await newTradition.save();
        res.status(201).json(tradition);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
