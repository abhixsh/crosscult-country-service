const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/countries', countryController.getCountries);
router.get('/country/:id', countryController.getCountryById);
router.post('/country', countryController.createCountry);
router.put('/country/:id', countryController.updateCountry);
router.delete('/country/:id', countryController.deleteCountry);

module.exports = router;
