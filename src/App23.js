import './App.css';

var valor = parseInt(prompt("Digite o valor: "));
var taxa = parseInt(prompt("Digite a taxa: "));
var tempo = parseInt(prompt("Digite a tempo: "));

function prestacao(){
    var prestacao = valor + (valor * taxa/100) * tempo;
    return prestacao;
};

function App() {
    return (
        <div>
            <h2>Prestação em atraso</h2>
            <p>O volume de uma prestação em atraso é: {prestacao()}.</p>
        </div>
    );
};

export default App;