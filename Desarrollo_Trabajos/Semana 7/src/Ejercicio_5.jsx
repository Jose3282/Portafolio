import React, { useState } from 'react';

const Ejercicio5 = () => {
const [count, setCount] = useState('');
const [listItems, setListItems] = useState([]);

const handleRenderList = () => {
    const items = [];

    for (let i = 1; i <= count; i++) {
    items.push(<li key={i}>Linea {i}</li>);
    }

    setListItems(items);
};

return (
    <div>
    <br></br>
    <h1>Este es el Ejercicio 5</h1>
    <br></br>
    <h3>Generador de Lista</h3>
    <div>
        <label>Número de ítems: </label>
        <input
        type="number"
        min="0"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        />
    </div>
    <div>
        <button onClick={handleRenderList}>Generar Lista</button>
    </div>
    {listItems.length > 0 && (
        <ol>
        {listItems.map(item => item)}
        </ol>
    )}
    </div>
);
};

export default Ejercicio5;