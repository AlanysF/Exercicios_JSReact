import './App.css';

var n1 = parseInt(prompt("Digite a 1° nota: "));
var n2 = parseInt(prompt("Digite a 2° nota: "));
var n3 = parseInt(prompt("Digite a 3° nota: "));

function media(){
    var media = ((n1*2)+(n2*3)+(n3*5))/10;
    return media;
}

function App() {
    return (
        <div>
            <h2>Média Ponderada</h2>
            <p>A sua média é: {media()}.</p>
        </div>
    )
}

export default App;