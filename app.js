const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./utils/db');
const documentRoutes = require('./routes/documentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Routes
app.use('/api/documents', documentRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
