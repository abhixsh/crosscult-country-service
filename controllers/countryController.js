const Country = require('../models/country');

// Get all countries
exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get country by ID
exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id);
        if (!country) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new country
exports.createCountry = async (req, res) => {
    const { country_name, country_img, country_desc, history_main_img, history_small_img, history_desc, traditions_main_img, traditions_small_img, traditions_desc, food_main_img, food_small_img, food_desc, flag_img } = req.body;

    const newCountry = new Country({
        country_name,
        country_img,
        country_desc,
        history_main_img,
        history_small_img,
        history_desc,
        traditions_main_img,
        traditions_small_img,
        traditions_desc,
        food_main_img,
        food_small_img,
        food_desc,
        flag_img
    });

    try {
        const savedCountry = await newCountry.save();
        res.status(201).json(savedCountry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a country
exports.updateCountry = async (req, res) => {
    try {
        const updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCountry) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json(updatedCountry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a country
exports.deleteCountry = async (req, res) => {
    try {
        const deletedCountry = await Country.findByIdAndDelete(req.params.id);
        if (!deletedCountry) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json({ message: 'Country deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
