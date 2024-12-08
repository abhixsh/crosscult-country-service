const Food = require('../models/foodModel');

// Create a new food
const createFood = async (req, res) => {
    try {
        const { description, mainImage, squareImage } = req.body;
        const food = new Food({ description, mainImage, squareImage });
        await food.save();
        res.status(201).json(food);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all foods
const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific food by ID
const getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json(food);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a food
const updateFood = async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFood) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json(updatedFood);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a food
const deleteFood = async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json({ message: 'Food deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createFood,
    getAllFoods,
    getFoodById,
    updateFood,
    deleteFood
};
