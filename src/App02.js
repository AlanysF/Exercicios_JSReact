import './App.css';

var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite um valor: "));

function subtracao() {
    return a - b
}

function App() {
    return (
        <div className = "App">
            <h2>Subtração</h2>
            <p>A subtração dos dois valores digitados são: {subtracao()}</p>
        </div>
    )
}

export default App;
