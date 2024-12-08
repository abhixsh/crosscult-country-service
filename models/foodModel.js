const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    mainImage: {
        type: String, 
        required: true
    },
    squareImage: {
        type: String, 
        required: true
    }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
