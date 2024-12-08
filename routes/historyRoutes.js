const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

// CRUD Routes for History
router.post('/', historyController.createHistory);
router.get('/', historyController.getAllHistories);
router.get('/:id', historyController.getHistoryById);
router.put('/:id', historyController.updateHistory);
router.delete('/:id', historyController.deleteHistory);

module.exports = router;
