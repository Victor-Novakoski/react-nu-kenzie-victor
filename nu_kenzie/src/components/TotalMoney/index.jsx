import React from 'react'
import './styles.css'

// import { Container } from './styles';

function TotalMoney({ transacoes }) {
  const valorTotal = transacoes.reduce((atual, item) => {
    return atual + item.value
  }, 0)
  return (
    <div className='div__totalMoney'>
      <div className='total'>
        <h3>Valor total:</h3>
        <span>$ {valorTotal}</span>
      </div>
      <span>O valor se refere ao saldo.</span>
    </div>
  )
}

export default TotalMoney
