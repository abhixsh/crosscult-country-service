const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    history: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History'
    },
    traditions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Traditions'
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
