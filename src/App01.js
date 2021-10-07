import './App.css';

var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite um valor: "));

function soma() {
    return a + b
}

function App() {
    return (
        <div className = "App">
            <h2>Soma</h2>
            <p>A soma dos dois valores digitados são: {soma()}</p>
        </div>
    )
}

export default App;

