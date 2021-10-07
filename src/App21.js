import './App.css';

var raio = parseInt(prompt("Digite o raio da lata: "));
var altura = parseInt(prompt("Digite a altura da lata: "));

function volume(){
    var volume = Math.PI * (raio ** 2) * altura;
    return volume;
};

function App() {
    return (
        <div>
            <h2>Cálculo de volume</h2>
            <p>O volume da lata é: {volume().toFixed(3)} cm.</p>
        </div>
    )
};

export default App;