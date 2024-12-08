const History = require('../models/historyModel');

// Create a new history
const createHistory = async (req, res) => {
    try {
        const { description, mainImage, squareImage } = req.body;
        const history = new History({ description, mainImage, squareImage });
        await history.save();
        res.status(201).json(history);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all histories
const getAllHistories = async (req, res) => {
    try {
        const histories = await History.find();
        res.status(200).json(histories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific history by ID
const getHistoryById = async (req, res) => {
    try {
        const history = await History.findById(req.params.id);
        if (!history) return res.status(404).json({ message: 'History not found' });
        res.status(200).json(history);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a history
const updateHistory = async (req, res) => {
    try {
        const updatedHistory = await History.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHistory) return res.status(404).json({ message: 'History not found' });
        res.status(200).json(updatedHistory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a history
const deleteHistory = async (req, res) => {
    try {
        const deletedHistory = await History.findByIdAndDelete(req.params.id);
        if (!deletedHistory) return res.status(404).json({ message: 'History not found' });
        res.status(200).json({ message: 'History deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createHistory,
    getAllHistories,
    getHistoryById,
    updateHistory,
    deleteHistory
};
