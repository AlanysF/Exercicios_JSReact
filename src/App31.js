import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));

function quadsoma(){
    var soma = (a+b+c)**2;
    return soma;
};

function App(){
    return (
        <div>
            <h2>Quadrado da Soma</h2>
            <p>O valor do quadrado da soma é {quadsoma()}</p>
        </div>
    );
};

export default App;