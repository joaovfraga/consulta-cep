const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CepCache = sequelize.define('CepCache', {
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localidade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ibge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ddd: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  siafi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = CepCache;