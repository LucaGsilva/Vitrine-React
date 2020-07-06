import './index.css';
import React from 'react';
import Nav from './Componentes/Nav';
import Busca from './Componentes/Busca';
import Filtro from './Componentes/Filtro';
import Vitrine from './Componentes/Vitrine';


export default () => {

    return (
        <React.Fragment>
            <Nav />
            <Busca />
            <Filtro />
            <Vitrine />
        </React.Fragment>

    )
}



