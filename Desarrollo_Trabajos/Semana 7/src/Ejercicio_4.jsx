import React, { useState } from 'react';

const Ejercicio4 = () => {
const [red, setRed] = useState('');
const [green, setGreen] = useState('');
const [blue, setBlue] = useState('');
const [backgroundColor, setBackgroundColor] = useState('');

const handleColorChange = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(rgbColor);
};

return (
    <div style={{ backgroundColor }}>
    <br></br>
    <h1>Este es el Ejercicio 4</h1>
    <br></br>
    <h3>Color RGB</h3>
    <div>
        <label>Rojo (R): </label>
        <input
        type="number"
        min="0"
        max="255"
        value={red}
        onChange={(e) => setRed(e.target.value)}
        />
    </div>
    <div>
        <label>Verde (G): </label>
        <input
        type="number"
        min="0"
        max="255"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
        />
    </div>
    <div>
        <label>Azul (B): </label>
        <input
        type="number"
        min="0"
        max="255"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
        />
    </div>
    <div>
        <button onClick={handleColorChange}>Cambiar el fondo de Color</button>
    </div>
    </div>
);
};

export default Ejercicio4;