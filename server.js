const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan');
const connectDb = require('./config/db');


// Load environment variables from a .env file into process.env
dotenv.config();

//DB Connection
connectDb();

const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));


//routes
app.use('/api/v1/test' , require('./routes/testRoutes'))
app.use('/api/v1/auth' , require('./routes/authRoutes'))
app.use('/api/v1/user' , require('./routes/userRoutes'))



// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
