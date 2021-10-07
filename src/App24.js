import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));

function troca(){
    var a2 = a;
    a = b ;
    b = a2;
    return a;
};

function App() {
    return (
        <div>
            <h2>Inversão de valores</h2>
            <p>O valor de A é {troca(a)} e o de B é {troca(b)}.</p>
        </div>
    );
};

export default App;