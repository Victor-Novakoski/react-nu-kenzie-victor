import React from 'react'
import './style.css'

// import { Container } from './styles';

function Filter({setFilter}) {
  return (
    <div className="div__buttons">
      <h2>Resumo financeiro</h2>
      <div>
        <button onClick={() => setFilter('')}>Todos</button>
        <button onClick={() => setFilter('entrada')}>Entradas</button>
        <button onClick={() => setFilter('saída')}>Despesas</button>
      </div>
    </div>
  )
}

export default Filter
