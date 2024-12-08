const app = require('./app'); // Import the app setup
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Set the port from environment variables, or fallback to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
