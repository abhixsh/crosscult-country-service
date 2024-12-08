const Traditions = require('../models/traditionsModel');

// Create a new tradition
const createTradition = async (req, res) => {
    try {
        const { description, mainImage, squareImage } = req.body;
        const tradition = new Traditions({ description, mainImage, squareImage });
        await tradition.save();
        res.status(201).json(tradition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all traditions
const getAllTraditions = async (req, res) => {
    try {
        const traditions = await Traditions.find();
        res.status(200).json(traditions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific tradition by ID
const getTraditionById = async (req, res) => {
    try {
        const tradition = await Traditions.findById(req.params.id);
        if (!tradition) return res.status(404).json({ message: 'Tradition not found' });
        res.status(200).json(tradition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a tradition
const updateTradition = async (req, res) => {
    try {
        const updatedTradition = await Traditions.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTradition) return res.status(404).json({ message: 'Tradition not found' });
        res.status(200).json(updatedTradition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a tradition
const deleteTradition = async (req, res) => {
    try {
        const deletedTradition = await Traditions.findByIdAndDelete(req.params.id);
        if (!deletedTradition) return res.status(404).json({ message: 'Tradition not found' });
        res.status(200).json({ message: 'Tradition deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createTradition,
    getAllTraditions,
    getTraditionById,
    updateTradition,
    deleteTradition
};
