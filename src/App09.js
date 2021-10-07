import './App.css';

var raio = prompt("Digite o valor do raio do círculo: ")


function circulo() {
    var area = (raio*raio) * Math.PI
    return area
}

function App() {
    return (
        <div className = "App">
            <h2>Área do círculo</h2>
            <p>O valor da área do círculo corresponde a: {circulo} cm²</p>
        </div>
    )
}

export default App;
