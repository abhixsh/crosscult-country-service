const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
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

const History = mongoose.model('History', historySchema);
module.exports = History;
