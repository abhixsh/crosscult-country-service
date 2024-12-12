const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Don't forget to import CORS
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const countryRoutes = require('./routes/countryRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// CORS Configuration - Make sure it's placed before any route or middleware that needs to handle requests
app.use(cors({
  origin: 'http://localhost:5173', // Your React frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/countries')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Swagger Setup
const swaggerOptions = {
  swaggerDefinition: require('./swagger.json'),
  apis: ['./routes/countryRoutes.js'], // Define paths to your routes for Swagger docs
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api', countryRoutes);

// Root route to display backend URL and Swagger URL
app.get('/', (req, res) => {
  res.send(`
    Backend is running on port ${process.env.PORT || 3000}<br>
    Swagger documentation is available at <a href="http://localhost:${process.env.PORT || 3000}/api-docs" target="_blank">http://localhost:${process.env.PORT || 3000}/api-docs</a>
  `);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
