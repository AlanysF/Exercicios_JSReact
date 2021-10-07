import './App.css';

var lado = prompt("Digite o valor de um dos lados do Quadrado: ")


function quadrado() {
    var lado1 = lado*lado
    return lado1
}

function App() {
    return (
        <div className = "App">
            <h2>Área do Quadrado</h2>
            <p>A área do quadrado é: {quadrado()} cm².</p>
        </div>
    )
}

export default App;
