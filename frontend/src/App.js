import React, { useState, useEffect } from 'react';
import './App.css';
import CepForm from './components/CepForm';
import CepInfo from './components/CepInfo';
import HistoryList from './components/HistoryList';
import api from './services/api';

function App() {
  const [cepInfo, setCepInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [userId] = useState('user-' + Math.floor(Math.random() * 1000));
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (cep) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.get(`/cep/${cep}?userId=${userId}`);
      setCepInfo(response.data);
      fetchHistory();
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error);
      } else {
        setError('Failed to fetch CEP information');
      }
      setCepInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async (page = 1) => {
    try {
      const response = await api.get(`/history/${userId}?page=${page}&limit=5`);
      setHistory(response.data.history);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.pages);
    } catch (err) {
      console.error('Error fetching history:', err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchHistory(newPage);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Consulta de CEP</h1>
      </header>
      <main>
        <div className="container">
          <div className="search-section">
            <CepForm onSearch={handleSearch} loading={loading} />
            
            {error && <div className="error-message">{error}</div>}
            
            {cepInfo && <CepInfo info={cepInfo} />}
          </div>

          <div className="history-section">
            <h2>Histórico de Consultas</h2>
            <p>ID do Usuário: {userId}</p>
            <HistoryList 
              history={history} 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;