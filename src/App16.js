import './App.css';

var salariofixo = parseInt(prompt("Digite o seu salário fixo por mês: "));
var comissao = parseInt(prompt("Digite o valor da comissão fixa: "));
var valorvendas = parseInt(prompt("Digite o valor total das suas vendas mensais: "));
var carrovendido = parseInt(prompt("Digite o número de carros vendidos por mês: "));

function salario() {
    var salariofinal = salariofixo + (carrovendido*comissao) + (valorvendas* (5/100));
    return salariofinal;
}

function App() {
    return (
        <div>
            <h2>Salário final do vendedor</h2>
            <p>Seu salário final será de R$ {salario()}</p>
        </div>
    )
}

export default App;