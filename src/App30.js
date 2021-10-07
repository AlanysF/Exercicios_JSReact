import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));

function quadrado(){
    var soma = (a ** 2) + (b ** 2) + (c ** 2);
    return soma
};

function App(){
    return (
        <div>
            <h2>Soma dos Quadrados</h2>
            <p>O valor da soma dos quadrados é {quadrado()}</p>
        </div>
    );
};

export default App;