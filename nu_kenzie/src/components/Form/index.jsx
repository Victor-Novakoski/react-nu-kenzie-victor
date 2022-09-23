import React, { useState } from 'react'
import './styles.css'
function Form({ listTransactions, setListTransactions }) {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    value: '',
    type: '',
  })
  const hadleSubmit = event => {
    event.preventDefault()
    setListTransactions([...listTransactions, newTransaction])
  }
  return (
    <form className="form" onSubmit={event => hadleSubmit(event)} action="">
      <div className="div__descricao">
        <label htmlFor="">Descrição</label>
        <input
          onChange={e =>
            setNewTransaction({
              ...newTransaction,
              description: e.target.value,
            })
          }
          value={newTransaction.description}
          type="text"
          placeholder="Digite aqui sua descrição"
        />
      </div>

      <div className="div__container">
        <div className="div__valor">
          <label htmlFor="">Valor</label>
          <div>
            <input
              onChange={e =>
                setNewTransaction({
                  ...newTransaction,
                  value: parseInt(e.target.value),
                })
              }
              value={newTransaction.value}
              type="number"
              placeholder="R$"
            />
            <p>R$</p>
          </div>
        </div>

        <div className="div__tipo">
          <label htmlFor="">Tipo de valor</label>
          <select
            onChange={e =>
              setNewTransaction({
                ...newTransaction,
                type: e.target.value,
              })
            }
            value={newTransaction.type}
            name=""
            id=""
          >
            <option value="" disabled selected hidden>
              opções
            </option>
            <option value="entrada">entrada</option>
            <option value="saída">saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  )
}

export default Form
