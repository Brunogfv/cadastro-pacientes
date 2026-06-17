import React from 'react';

function Cabecalho(props) {
    return (
        <header className="cabecalho">
            <h1>{props.nome}</h1>
            <p>Cadastro de Pacientes - Campanha de Prevenção à Saúde</p>
        </header>
    );
}

export default Cabecalho;