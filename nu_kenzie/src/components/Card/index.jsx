import React from 'react'
import { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import './style.css'

// import { Container } from './styles';

function Card({ data, listTransactions, setListTransactions, index }) {
  const handleRemove = () => {
    let newList = [...listTransactions].filter((transactions, i) => i != index)
    setListTransactions(newList)
  }
  return (
    <>
      <li className={`lista ${data.type.replace('í', 'i')}`}>
        <div className="div__descricao__lista">
          <h4>{data.description}</h4>
          <span>{data.type}</span>
        </div>
        <div className="div__trash">
          <p>R$ {data.value.toFixed(2)}</p>
          <button onClick={() => handleRemove()}>
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  )
}

export default Card
