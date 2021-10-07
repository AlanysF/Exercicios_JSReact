import './App.css';

const nome="Alanys";
const sobrenome="Ferreira";

function soma(a,b){
  return a+b
}

function subtracao(a,b){
  return a-b
}

function multiplicacao(a,b){
  return a*b
}

function divisao(a,b){
  return a/b
}

function App() {
  return (
    <div className="App">
      <p>O nome armazenado é: {nome} {sobrenome}</p>
      <p>A soma é: {2+2}</p>
      <p>A soma dos valores é: {soma(3,5)}</p>
      <p>A subtração dos valores é: {subtracao(3,5)}</p>
      <p>A multiplicação dos valores é: {multiplicacao(3,5)}</p>
      <p>A divisão dos valores é: {divisao(3,5)}</p>
    </div>
  );
}

export default App;
