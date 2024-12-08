const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    description: { type: String, required: true },
    mainImage: { type: Schema.Types.ObjectId, ref: 'fs.files' },
    squareImage: { type: Schema.Types.ObjectId, ref: 'fs.files' },
});

module.exports = mongoose.model('Food', foodSchema);
