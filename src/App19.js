import './App.css';

var celsius = parseInt(prompt("Digite a temperatura em Celsius: "));

function conversao(){
    var fahrenheit = (9 * celsius + 160) / 5;
    return fahrenheit;
}

function App() {
    return (
        <div>
            <h2>Conversão de C° para F°</h2>
            <p>A temperatura em Fahrenheit é: {conversao()} °F.</p>
        </div>
    )
}

export default App;