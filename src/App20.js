import './App.css';

var fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit: "));

function conversao(){
    var celsius = (fahrenheit - 32) * 5/9
    return celsius.toFixed(3);
}

function App() {
    return (
        <div>
            <h2>Conversão de F° para C°</h2>
            <p>A temperatura em Celsius é: {conversao()} °C.</p>
        </div>
    )
}

export default App;