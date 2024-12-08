const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country_name: { type: String, required: true },
    country_img: { type: String, required: true },
    country_desc: { type: String, required: true },
    history_main_img: { type: String },
    history_small_img: { type: String },
    history_desc: { type: String },
    traditions_main_img: { type: String },
    traditions_small_img: { type: String },
    traditions_desc: { type: String },
    food_main_img: { type: String },
    food_small_img: { type: String },
    food_desc: { type: String }
});

module.exports = mongoose.model('Country', countrySchema);
