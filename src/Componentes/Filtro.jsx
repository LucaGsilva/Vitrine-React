
import './Filtro.css';
import React from 'react';


export default () =>
    <div className='Filtro'>

        <div className='a'>

            <h3 className='ListaTipo'>Genero</h3>
            <ul className='Lista'>
                <li className='Itens'>Masculino</li>
                <li className='Itens'>Feminino</li>
                <li className='Itens'>Sem Gênero</li>
            </ul>

            <h3 className='ListaTipo'>Condições</h3>
            
            <ul className='Lista'>
                <li className='Itens'>Novo</li>
                <li className='Itens'>Usado</li>
                <li className='Itens'>Recondicionado</li>
            </ul>

            <h3 className='ListaTipo'>Localização</h3>
            <ul className='Lista'>
                <li className='Itens'>São Paulo</li>
                <li className='Itens'>Bahia</li>
                <li className='Itens'>Rio de Janeiro</li>
                <li className='Itens'>Minas Gerais</li>
                <li className='Itens'>Paraná</li>
                <li className='Itens'>Ceará</li>
            </ul>

        </div>
    </div>