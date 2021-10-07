import './App.css';

var salarioatual = parseFloat(prompt("Digite o valor do seu salário atual: "));
var ajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

function salario(){
    var porcentagem = (ajuste/100);
    var aumento = porcentagem * salarioatual;
    var novosalario = salarioatual + aumento;
    return novosalario;
}

function App() {
    return (
        <div>
            <h2>Percentual de Reajuste</h2>
            <p>O seu salário será de R$ {salario()}</p>
        </div>
    )
}

export default App;