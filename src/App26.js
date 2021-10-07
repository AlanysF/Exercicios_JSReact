import './App.css';

var comprimento = parseInt(prompt("Digite o comprimento da caixa retangular: "));
var altura = parseInt(prompt("Digite a altura da caixa retangular: "));
var largura = parseInt(prompt("Digite a largura da caixa retangular: "));

function volume(){
    var volume = comprimento * largura * altura;
    return volume;
};

function App() {
    return (
        <div>
            <h2>Cálculo de volume de uma caixa retangular</h2>
            <p>O volume da caixa retangular é: {volume()}.</p>
        </div>
    );
};

export default App;