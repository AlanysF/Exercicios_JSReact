import './App.css';

var total = parseInt(prompt("Digite o número total de eleitores da cidade: "));
var valido = parseInt(prompt("Digite o número de votos válidos: "));
var branco = parseInt(prompt("Digite o número de votos brancos: "));
var nulo = parseInt(prompt("Digite o número de votos nulos: "));

function percv(){
    var percvalido = (valido/total)*100;
    return percvalido;
}

function percb(){
    var percbranco = (branco/total)*100;
    return percbranco;
}

function percn(){
    var percnulo = (nulo/total)*100;
    return percnulo;
}

function App() {
    return (
        <div>
            <h2>Percentual de votos</h2>
            <p>O Percentual de votos válidos é de {percv()} %</p>
            <p>O Percentual de votos brancos é de {percb()} %</p>
            <p>O Percentual de votos nulos é de {percn()} %</p>
        </div>
    )
}

export default App;