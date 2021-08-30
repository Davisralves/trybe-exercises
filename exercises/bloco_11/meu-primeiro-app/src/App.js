import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['escovar os dentes', 'comer', 'tomar banho', 'trabalhar'];

const printarCompromissos = () => compromissos.map((compromisso) => Task(compromisso));

function App() {
  return (
   printarCompromissos()
  ); 
}

export default App;
