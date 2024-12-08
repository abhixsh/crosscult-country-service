const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const countryRoutes = require('./routes/countryRoutes');
const historyRoutes = require('./routes/historyRoutes');
const traditionsRoutes = require('./routes/traditionsRoutes');
const foodRoutes = require('./routes/foodRoutes');

// Initialize the app
const app = express();

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error: ', err));

// Routes
app.use('/country', countryRoutes);
app.use('/history', historyRoutes);
app.use('/traditions', traditionsRoutes);
app.use('/food', foodRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;
