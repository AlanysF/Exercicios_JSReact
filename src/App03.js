import './App.css';

var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite um valor: "));

function multiplicacao() {
    return a * b
}

function App() {
    return (
        <div className = "App">
            <h2>Multiplicação</h2>
            <p>A multiplicação dos dois valores digitados são: {multiplicacao()}</p>
        </div>
    )
}

export default App;
