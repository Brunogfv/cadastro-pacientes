import React from 'react';
import Cabecalho from './components/Cabecalho';
import PacientForm from './components/PacientForm';
import Relogio from './components/Relogio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecalho nome="Clínica Ctrl Z" />
      <Relogio />
      <main>
        <PacientForm />
      </main>
    </div>
  );
}

export default App;
