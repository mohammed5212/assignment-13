const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', postRoutes);

module.exports = app;