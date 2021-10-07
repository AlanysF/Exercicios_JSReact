import './App.css';

var tempo = parseInt(prompt("Digite o tempo gasto até o destino: "));
var velocidade = parseInt(prompt("Digite a velocidade média: "));

function dist(){
    var distancia = tempo * velocidade;
    return distancia;
};

function litros(){
    var distancia = tempo * velocidade;
    var litrosUsados = distancia / 12;
    return litrosUsados.toFixed(2);
};

function App() {
    return (
        <div>
            <h2>Quantidade de litros</h2>
            <p>Baseado na velocidade e tempo gasto, a distância é {dist()}m.</p>
            <p>E a quantidade de litros usadas será de {litros()}L.</p>
            
        </div>
    );
};

export default App;