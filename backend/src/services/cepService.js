const axios = require('axios');
const CepCache = require('../models/CepCache');

class CepService {
  async getCepInfo(cep) {

    cep = cep.replace(/\D/g, '');
    
    if (cep.length !== 8) {
      throw new Error('Invalid CEP format');
    }
  
    try {
      const cachedData = await CepCache.findByPk(cep);
      
      if (cachedData) {
        console.log('CEP found in cache');
        return cachedData;
      }
  
      console.log('Fetching CEP from external API');
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      
      if (response.data.erro) {
        throw new Error('CEP not found');
      }
  
      await CepCache.upsert(response.data);
      
      return response.data;
    } catch (error) {
      if (error.message === 'Invalid CEP format' || error.message === 'CEP not found') {
        throw error;
      }
      throw new Error('Error fetching CEP information');
    }
  }

  async saveToHistory(userId, cep) {
    try {
      const UserHistory = require('../models/UserHistory');
      await UserHistory.create({
        userId,
        cep,
      });
    } catch (error) {
      console.error('Error saving to history:', error);
    }
  }

  async getUserHistory(userId, page = 1, limit = 10) {
    try {
      const UserHistory = require('../models/UserHistory');
      const offset = (page - 1) * limit;
      
      const { count, rows } = await UserHistory.findAndCountAll({
        where: { userId },
        order: [['consultedAt', 'DESC']],
        limit,
        offset,
      });

      return {
        total: count,
        pages: Math.ceil(count / limit),
        currentPage: page,
        history: rows,
      };
    } catch (error) {
      throw new Error('Error fetching user history');
    }
  }
}

module.exports = new CepService();