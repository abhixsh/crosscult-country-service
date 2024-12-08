const Country = require('../models/countryModel');
const History = require('../models/historyModel');
const Traditions = require('../models/traditionsModel');
const Food = require('../models/foodModel');

// Create a new country
const createCountry = async (req, res) => {
    try {
        const { name, image, description, historyId, traditionsId, foodId } = req.body;
        const country = new Country({
            name,
            image,
            description,
            history: historyId,
            traditions: traditionsId,
            food: foodId
        });
        await country.save();
        res.status(201).json(country);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all countries
const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.find().populate('history traditions food');
        res.status(200).json(countries);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific country by ID
const getCountryById = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id).populate('history traditions food');
        if (!country) return res.status(404).json({ message: 'Country not found' });
        res.status(200).json(country);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a country
const updateCountry = async (req, res) => {
    try {
        const updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCountry) return res.status(404).json({ message: 'Country not found' });
        res.status(200).json(updatedCountry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a country
const deleteCountry = async (req, res) => {
    try {
        const deletedCountry = await Country.findByIdAndDelete(req.params.id);
        if (!deletedCountry) return res.status(404).json({ message: 'Country not found' });
        res.status(200).json({ message: 'Country deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createCountry,
    getAllCountries,
    getCountryById,
    updateCountry,
    deleteCountry
};
