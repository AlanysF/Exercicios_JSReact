import './App.css';

var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite um valor: "));

function divisao() {
    return a / b
}

function App() {
    return (
        <div className = "App">
            <h2>Divisão</h2>
            <p>A divisão dos dois valores digitados são: {divisao()}</p>
        </div>
    )
}

export default App;
