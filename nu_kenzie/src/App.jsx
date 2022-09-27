import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Filter from './components/Filter'
import Form from './components/Form'
import HomePage from './components/HomePage'
import TotalMoney from './components/TotalMoney'

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: 'Salário recebido', type: 'entrada', value: 2500 },
    { description: 'Conta de luz', type: 'saída', value: -150 },
  ])
  const [filter, setFilter] = useState('')
  const [login, setLogin] = useState(false)
  return (
    <>
      {login ? (
        <>
          <div className="App">
            <header>
              <h2>
                <strong>Nu</strong> Kenzie
              </h2>
              <button onClick={() => setLogin(false)}>Inicio</button>
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
                    .filter(
                      transaction => transaction.type == filter || filter == ''
                    )
                    .map((elem, index) => (
                      <Card
                        data={elem}
                        key={index}
                        index={index}
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                      />
                    ))}
                </ul>
              </section>
            </main>
          </div>
        </>
      ) : (
        <HomePage setLogin={setLogin} />
      )}
    </>
  )
}

export default App
