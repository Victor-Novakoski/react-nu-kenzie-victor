import React, { useState } from 'react'
import './styles.css'
function Form({ listTransactions, setListTransactions }) {
  const hadleSubmit = event => {
    event.preventDefault()
    setListTransactions([
      ...listTransactions,
      {
        description: event.target.description.value,
        value: decorateValue({type: event.target.type.value, value: event.target.value.value}) ,
        type: event.target.type.value,
      },
    ])
  }

  const decorateValue = ({type, value}) => {
    return Math.abs((parseInt(value))) * ( type == 'entrada' ? 1 : -1)
  }

  return (
    <form className="form" onSubmit={event => hadleSubmit(event)} action="">
      <div className="div__descricao">
        <label htmlFor="">Descrição</label>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          name="description"
        />
      </div>

      <div className="div__container">
        <div className="div__valor">
          <label htmlFor="">Valor</label>
          <div>
            <input type="number" placeholder="R$" name="value" required />
            <p>R$</p>
          </div>
        </div>

        <div className="div__tipo">
          <label htmlFor="">Tipo de valor</label>
          <select name="type" id="" defaultValue='entrada'>
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
