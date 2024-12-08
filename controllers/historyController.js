const History = require('../models/historyModel');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const fs = require('fs');
const mongooseConnection = mongoose.connection;

let gfs;
mongooseConnection.once('open', () => {
    gfs = Grid(mongooseConnection.db, mongoose.mongo);
    gfs.collection('fs');
});

exports.createHistory = async (req, res) => {
    const { description } = req.body;

    const newHistory = new History({
        description,
        mainImage: req.files.mainImage[0].id,
        squareImage: req.files.squareImage[0].id,
    });

    try {
        const history = await newHistory.save();
        res.status(201).json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
