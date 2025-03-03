import React, { useState } from 'react';

function CepForm({ onSearch, loading }) {
  const [cep, setCep] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cep.trim()) {
      const cleanCep = cep.replace('-', '');
      onSearch(cleanCep);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    value = value.slice(0, 8);
    
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
    
    setCep(value);
  };

  return (
    <form onSubmit={handleSubmit} className="cep-form">
      <div className="form-group">
        <label htmlFor="cep">Digite o CEP:</label>
        <input
          type="text"
          id="cep"
          placeholder="12345-678"
          value={cep}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <button type="submit" disabled={loading || cep.replace('-', '').length !== 8}>
        {loading ? 'Carregando...' : 'Buscar'}
      </button>
    </form>
  );
}

export default CepForm;