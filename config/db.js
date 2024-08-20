const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDb = async () => {
    try {
        // Connect to MongoDB using the connection string from the environment variable
        await mongoose.connect(process.env.MONGO_URL);
            console.log(`Connected To Database: ${mongoose.connection.host}`);
    } catch (error) {
        console.log('DB Error:', error);
       
    }
};

// Export the connectDb function
module.exports = connectDb;
