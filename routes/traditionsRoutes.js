const express = require('express');
const router = express.Router();
const traditionsController = require('../controllers/traditionsController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'squareImage', maxCount: 1 }
]), traditionsController.createTraditions);

module.exports = router;
