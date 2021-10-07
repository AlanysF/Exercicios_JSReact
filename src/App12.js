import './App.css';

var anos = parseInt(prompt("Digite sua idade em anos: "));
var meses = parseInt(prompt("Quantos meses?"));
var dias = parseInt(prompt("E dias? "));

function idade(){
    var idade = (anos * 365) + (meses * 30) + dias;
    return idade
}

function App() {
    return (
        <div className = "App">
            <h2>Idade em dias</h2>
            <p>Você está vivo à {idade()} dias.</p>
        </div>
    )
}

export default App;