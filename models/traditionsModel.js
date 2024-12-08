const mongoose = require('mongoose');

const traditionsSchema = new mongoose.Schema({
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

const Traditions = mongoose.model('Traditions', traditionsSchema);
module.exports = Traditions;
