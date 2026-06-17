import React, { Component } from 'react';

class Relogio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString('pt-BR')
        };
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString('pt-BR')});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="relogio">
                <span role="img" aria-label="relógio">🕐</span> {this.state.hora}
            </div>
        );
    }
}

export default Relogio;