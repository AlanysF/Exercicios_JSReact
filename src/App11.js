import './App.css';

var base = prompt("Digite o valor da base do retângulo:");
var altura = prompt("Digite o valor da altura do retângulo:");

function area() {
    var area = base*altura
    return area
}

function App() {
    return (
        <div className = "App">
            <h2>Área do retângulo</h2>
            <p>O valor da área do retângulo corresponde a: {area()} cm².</p>
        </div>
    )
}

export default App;