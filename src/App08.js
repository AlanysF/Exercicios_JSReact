import './App.css';

var base = prompt("Digite o valor da base do triangulo: ")
var altura = prompt("Digite o valor da Altura do triangulo: ")


function triangulo() {
    var resultado = (base * base) / 2
    return resultado
}

function App() {
    return (
        <div className = "App">
            <h2>Área do triângulo</h2>
            <p>A área do triângulo corresponde a:  {triangulo()} cm².</p>
        </div>
    )
}

export default App;
