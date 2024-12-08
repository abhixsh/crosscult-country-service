const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const historyRoutes = require('./routes/historyRoutes');
const traditionsRoutes = require('./routes/traditionsRoutes');
const foodRoutes = require('./routes/foodRoutes');

// Initialize the app
const app = express();

require('dotenv').config();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MongoDB Connection with enhanced error handling
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error('MongoDB URI is not defined in the environment variables.');
    process.exit(1); // Exit the process if MongoDB URI is not set
}

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error: ', err);
        process.exit(1); // Exit the process if connection fails
    });

// Routes
app.use('/history', historyRoutes);
app.use('/traditions', traditionsRoutes);
app.use('/food', foodRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});


module.exports = app;
