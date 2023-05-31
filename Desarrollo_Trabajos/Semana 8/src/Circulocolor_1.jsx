import React, { useState, useEffect } from 'react';

const CirculoColor = () => {
const [radius, setRadius] = useState(8);
const [color, setColor] = useState([0, 0, 0]);

useEffect(() => {
    const interval = setInterval(() => {
      setRadius(prevRadius => prevRadius * 2);
    setColor(prevColor => {
        const [r, g, b] = prevColor;
        const newColor = [r, g + radius, b + radius];
        return newColor;
    });
    }, 2000);

    return () => clearInterval(interval);
}, [radius]);

const getColorText = () => {
    const [r, g, b] = color;
    const sum = r + g + b;

    let textColor = '';

    if (sum <= 170) {
    textColor = 'red';
    } else if (sum <= 340) {
    textColor = 'green';
    } else {
    textColor = 'blue';
    }

    return textColor;
};

const getRGB = () => {
    const [r, g, b] = color;
    return `(${r.toString().padStart(2, '0')}, ${g.toString().padStart(2, '0')}, ${b.toString().padStart(2, '0')})`;
};

return (
    <div>
    <h1>Ejercicio 2</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
        style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: `1px solid rgb(${color.join(',')})`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: getColorText()
        }}
        >
        </div>
        <div style={{ marginLeft: '20px' }}>
        <div>
            Color: <span style={{ color: getColorText() }}>RGB {getRGB()}</span>
        </div>
        <div>
            Radius: {radius}px
        </div>
        </div>
    </div>
    </div>
);
};

export default CirculoColor;