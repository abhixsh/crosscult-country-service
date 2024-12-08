const express = require('express');
const router = express.Router();
const traditionsController = require('../controllers/traditionsController');

// CRUD Routes for Traditions
router.post('/', traditionsController.createTradition);
router.get('/', traditionsController.getAllTraditions);
router.get('/:id', traditionsController.getTraditionById);
router.put('/:id', traditionsController.updateTradition);
router.delete('/:id', traditionsController.deleteTradition);

module.exports = router;
