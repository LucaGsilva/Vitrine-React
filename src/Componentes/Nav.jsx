import '../Componentes/Nav.css';
import logo from '../Imagens/logo.png';
import carrinho from '../Imagens/carrinho.png';
import React from 'react';



export default () =>
    <div className='Nav'>

        <img src={logo} alt="Logo" id="Logo" />

        <h2 className='Titulo'>Loja Virtual</h2>

        <img src={carrinho} alt="Carrinho" className="Carrinho" />

        <h2 className="Login">Entrar</h2>

    </div>

