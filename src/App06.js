import './App.css';

var num = parseInt(prompt("Digite um valor inteiro: "));


function sucessor() {
    return num + 1
}

function App() {
    return (
        <div className = "App">
            <h2>Sucessor</h2>
            <p>O sucessor de {num} é {sucessor()}.</p>
        </div>
    )
}

export default App;
