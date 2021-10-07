import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));

function quadrado(){
    var diferenca = a-b;
    var quadrado = diferenca ** 2;
    return quadrado;
};

function App() {
    return (
        <div>
            <h2>Quadrado da Diferença</h2>
            <p>O quadrado da diferença de {a} e {b} é de {quadrado()}.</p>
        </div>
    );
};

export default App;