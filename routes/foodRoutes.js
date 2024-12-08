const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'squareImage', maxCount: 1 }
]), foodController.createFood);

module.exports = router;
