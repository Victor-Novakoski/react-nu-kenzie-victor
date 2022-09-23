import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Filter from './components/Filter'
import Form from './components/Form'
import TotalMoney from './components/TotalMoney'

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: 'Salário recebido', type: 'entrada', value: 2500 },
    { description: 'Conta de luz', type: 'saída', value: -150 },
  ])
  const [filter, setFilter] = useState('')

  return (
    <div className="App">
      <header>
        <h2>
          <strong>Nu</strong> Kenzie
        </h2>
        <button>Inicio</button>
      </header>
      <main>
        <section className="section__form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney transacoes={listTransactions} />
        </section>
        <section className="section__lista">
          <Filter setFilter={setFilter} />
          <ul className="ul_list">
            {listTransactions
              .filter(transaction => transaction.type == filter || filter == '')
              .map((elem, index) => (
                <Card data={elem} key={index} />
              ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
