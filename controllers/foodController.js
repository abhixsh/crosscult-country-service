const Food = require('../models/foodModel');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const fs = require('fs');
const mongooseConnection = mongoose.connection;

let gfs;
mongooseConnection.once('open', () => {
    gfs = Grid(mongooseConnection.db, mongoose.mongo);
    gfs.collection('fs');
});

exports.createFood = async (req, res) => {
    const { description } = req.body;

    const newFood = new Food({
        description,
        mainImage: req.files.mainImage[0].id,
        squareImage: req.files.squareImage[0].id,
    });

    try {
        const food = await newFood.save();
        res.status(201).json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
