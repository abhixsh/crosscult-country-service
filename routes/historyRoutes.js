const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'squareImage', maxCount: 1 }
]), historyController.createHistory);

module.exports = router;
