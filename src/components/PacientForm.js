import React, { Component } from 'react';

class PacientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            idade: "",
            cidade: "",
            sexo: "",
            atendimento: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { nome, idade, cidade, sexo, atendimento } = this.state;

        alert(
            `Paciente: ${nome}\n` +
            `Idade: ${idade} anos\n` +
            `Cidade: ${cidade}\n` +
            `Sexo: ${sexo}\n` +
            `Tipo de Atendimento: ${atendimento}`
        );
    }

    render() {
        return (
            <form className="paciente-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome do Paciente</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                        placeholder="Digite o nome: "
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="idade">Idade</label>
                    <input
                        type="number"
                        id="idade"
                        name="idade"
                        value={this.state.idade}
                        onChange={this.handleChange}
                        placeholder="Digite a idade: "
                        min="0"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        value={this.state.cidade}
                        onChange={this.handleChange}
                        placeholder="Digite a Cidade: "
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sexo">Sexo</label>
                    <select
                        id="sexo"
                        name="sexo"
                        value={this.state.sexo}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="atendimento">Tipo de atendimento</label>
                    <select
                        id="atendimento"
                        name="atendimento"
                        value={this.state.atendimento}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="Consulta">Consulta</option>
                        <option value="Exame">Exame</option>
                        <option value="Retorno">Retorno</option>
                        <option value="Emergência">Emergência</option>
                    </select>
                </div>

                <button type="submit" className="btn-cadastrar">Cadastrar</button>
            </form>
        );
    }
}

export default PacientForm;