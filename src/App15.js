import './App.css';

var custofinal = parseInt(prompt("Digite o valor do custo de fábrica: "));

function custo() {
    var custototal = custofinal + (custofinal * 28 / 100) + (custofinal * 45 / 100);
    return custototal
}

function App() {
    return (
        <div>
            <h2>Custo de um carro</h2>
            <p>"O custo total será de R$ {custo()} para o consumidor.</p>
        </div>
    )
}

export default App;