import './App.css';

var cotacao = parseFloat(prompt("Digite o valor de cotação do dólar hoje: "));
var real = parseFloat(prompt("Digite quantos reais você deseja converter: "));

function conversao(){
    var dolar = real*cotacao;
    return dolar;
};

function App() {
    return (
        <div>
            <h2>Conversão do Real para o Dólar</h2>
            <p>Seus R${real} reais são ${conversao()} dólares.</p>
        </div>
    );
};

export default App;