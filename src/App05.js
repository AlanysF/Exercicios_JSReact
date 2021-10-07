import './App.css';

var num = parseInt(prompt("Digite um valor inteiro: "));


function antecessor() {
    return num - 1
}

function App() {
    return (
        <div className = "App">
            <h2>Antecessor</h2>
            <p>O antecessor de {num} é {antecessor()}.</p>
        </div>
    )
}

export default App;
