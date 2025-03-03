const express = require('express');
const cors = require('cors');
require('dotenv').config();
const initDatabase = require('./config/init');

const app = express();
const PORT = process.env.PORT || 3001;

initDatabase();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'API is running' });
});

const cepRoutes = require('./routes/cepRoutes');
const historyRoutes = require('./routes/historyRoutes');

app.use('/cep', cepRoutes);
app.use('/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;