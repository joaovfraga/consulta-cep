const cepService = require('../services/cepService');

exports.getCep = async (req, res) => {
  try {
    const { cep } = req.params;
    const userId = req.query.userId || 'anonymous';

    const cepInfo = await cepService.getCepInfo(cep);
    
    await cepService.saveToHistory(userId, cep);

    return res.status(200).json(cepInfo);
  } catch (error) {
    if (error.message === 'Invalid CEP format') {
      return res.status(400).json({ error: 'Invalid CEP format. CEP must have 8 digits.' });
    }
    if (error.message === 'CEP not found') {
      return res.status(404).json({ error: 'CEP Inválido.' });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const history = await cepService.getUserHistory(userId, page, limit);
    
    return res.status(200).json(history);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching user history' });
  }
};