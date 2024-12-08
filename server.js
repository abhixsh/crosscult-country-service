const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const countryRoutes = require('./routes/countryRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Swagger Setup
const swaggerOptions = {
    swaggerDefinition: require('./swagger.json'),
    apis: ['./routes/countryRoutes.js']
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api', countryRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

// Root route to display backend URL and Swagger URL
app.get('/', (req, res) => {
    res.send(`
        Backend is running on port ${PORT}<br>
        Swagger documentation is available at <a href="http://localhost:${PORT}/api-docs" target="_blank">http://localhost:${PORT}/api-docs</a>
    `);
});
