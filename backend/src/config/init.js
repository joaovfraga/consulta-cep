const sequelize = require('./database');
const CepCache = require('../models/CepCache');
const UserHistory = require('../models/UserHistory');

const initDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

module.exports = initDatabase;