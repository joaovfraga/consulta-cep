import React from 'react';

function CepInfo({ info }) {
  return (
    <div className="cep-info">
      <h3>Informações do CEP {info.cep}</h3>
      <table>
        <tbody>
          <tr>
            <td><strong>CEP:</strong></td>
            <td>{info.cep}</td>
          </tr>
          <tr>
            <td><strong>Logradouro:</strong></td>
            <td>{info.logradouro || '-'}</td>
          </tr>
          <tr>
            <td><strong>Complemento:</strong></td>
            <td>{info.complemento || '-'}</td>
          </tr>
          <tr>
            <td><strong>Bairro:</strong></td>
            <td>{info.bairro || '-'}</td>
          </tr>
          <tr>
            <td><strong>Cidade:</strong></td>
            <td>{info.localidade || '-'}</td>
          </tr>
          <tr>
            <td><strong>Estado:</strong></td>
            <td>{info.uf || '-'}</td>
          </tr>
          <tr>
            <td><strong>DDD:</strong></td>
            <td>{info.ddd || '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CepInfo;