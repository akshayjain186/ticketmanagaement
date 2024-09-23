const express = require('express');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

console.log('kaise ho')
// Middleware
app.use(express.json());

// Routes
app.use('/api', ticketRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
