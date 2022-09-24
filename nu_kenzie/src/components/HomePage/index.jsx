import  Illustration  from '../../assets/illustration.svg'
import React from 'react'
import './style.css'

// import { Container } from './styles';

function HomePage({ setLogin }) {
  return (
    <div>
      <section className="container">
        <div className="div_info">
          <h2>
            <strong>Nu</strong> Kenzie
          </h2>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={() => setLogin(true)}>Iniciar</button>
        </div>
        <div className="div__img">
          <img src={Illustration} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HomePage
