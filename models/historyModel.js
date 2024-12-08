const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    description: { type: String, required: true },
    mainImage: { type: Schema.Types.ObjectId, ref: 'fs.files' },
    squareImage: { type: Schema.Types.ObjectId, ref: 'fs.files' },
});

module.exports = mongoose.model('History', historySchema);
