const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: { type: String, required: true },
    image: { type: Schema.Types.ObjectId, ref: 'fs.files' },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Country', countrySchema);
