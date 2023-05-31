import React, { useState } from 'react';

const Ejercicio3 = () => {
const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const [result, setResult] = useState(null);

const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    const sum = num1 + num2;
    const rest = num1 - num2;
    const multi = num1 * num2;
    const div = num1 / num2;

    setResult({
    Suma: sum,
    Resta: rest,
    Multiplicación: multi,
    División: div,
    });
};

return (
    <div>
    <br></br>
    <h1>Este es el Ejercicio 3</h1>
    <br></br>
    <h3>Calculadora</h3>
    <div>
        <label>Número 1: </label>
        <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        />
    </div>
    <div>
        <label>Número 2: </label>
        <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        />
    </div>
    <div>
        <button onClick={handleCalculate}>Calcular</button>
    </div>
    {result && (
        <div>
        <h4>Resultados:</h4>
        <p>Suma: {result.Suma}</p>
        <p>Resta: {result.Resta}</p>
        <p>Multiplicación: {result.Multiplicación}</p>
        <p>División: {result.División}</p>
        </div>
    )}
    </div>
);
};

export default Ejercicio3;