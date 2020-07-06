import React from 'react';
import './Busca.css';


export default () =>

    <div className='BuscaNav'>

        <div className='Search'>
            <ul className='Categoria'>Categorias</ul>
            <h4 className='Links'>Produtos Importados</h4>
            <h4 className='Links'>Ofertas</h4>
            <h4 className='Links'>Historico</h4>
        </div>

        <div className='Pesquisa'>
            <input type="text" className='Busca' />
            <h3 className='nameBusca'> Buscar </h3>

        </div>


    </div>