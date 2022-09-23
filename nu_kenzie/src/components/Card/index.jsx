import React from 'react'
import { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import './style.css'

// import { Container } from './styles';

function Card({ data }) {
  return (
    <>
      <li className="lista entrada">
        <div className="div__descricao__lista">
          <h4>{data.description}</h4>
          <span>{data.type}</span>
        </div>
        <div className="div__trash">
          <p>R$ {data.value.toFixed(2)}</p>
          <button>
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  )
}

export default Card
