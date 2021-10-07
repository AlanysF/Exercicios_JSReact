import './App.css';

var cotacao = parseFloat(prompt("Digite o valor de cotação do dólar hoje: "));
var dolar = parseFloat(prompt("Digite quantos dólares você deseja converter: "));

function conversao(){
    var real = cotacao * dolar;
    return real;
};

function App() {
    return (
        <div>
            <h2>Conversão de Dólar para Real</h2>
            <p>Seus ${dolar} dólares são R${conversao()} reais.</p>
        </div>
    );
};

export default App;