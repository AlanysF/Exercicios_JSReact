import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));
var d = parseInt(prompt("Digite o valor de D: "));

function s1(){
    return a+b;
};

function s2(){
    return a+c;
};

function s3(){
    return a+d;
};

function s4(){
    return b+c;
};

function s5(){
    return b+d;
};

function s6(){
    return c+d;
};

function m1(){
    return a*b;
};

function m2(){
    return a*c;
};

function m3(){
    return a*d;
};

function m4(){
    return b*c;
};

function m5(){
    return b*d;
};

function m6(){
    return c*d;
};

function App() {
    return (
        <div>
            <h1>Operações com 4 valores</h1>
            <p>A = {a} | B = {b} | C = {c} | D = {d}</p>
            <h2><p>Adição</p></h2>
            <p>{a}+ {b} = {s1()}</p>
            <p>{a} + {c} = {s2()}</p>
            <p>{a} + d = {s3()}</p>
            <p>{b} + c = {s4()}</p>
            <p>{b} + d = {s5()}</p>
            <p>{c} + d = {s6()}</p>
            <h2><p>Multiplicação</p></h2>
            <p>{a} X {b} = {m1()}</p>
            <p>{a} X {c} = {m2()}</p>
            <p>{a} X {d} = {m3()}</p>
            <p>{b} X {c} = {m4()}</p>
            <p>{b} X {d} = {m5()}</p>
            <p>{c} X {d} = {m6()}</p>
        </div>
    );
};

export default App;
