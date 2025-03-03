import React from 'react';

function HistoryList({ history, currentPage, totalPages, onPageChange }) {
  if (!history || history.length === 0) {
    return <p>Nenhum histórico de consulta encontrado.</p>;
  }

  return (
    <div className="history-list">
      <table>
        <thead>
          <tr>
            <th>CEP</th>
            <th>Data da Consulta</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.cep}</td>
              <td>{new Date(item.consultedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages || 1}
        </span>
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}

export default HistoryList;