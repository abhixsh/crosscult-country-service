const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.single('image'), countryController.createCountry);

module.exports = router;
