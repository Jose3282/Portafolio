import React, { useState } from 'react';

function ComponentGeneral() {
const [data, setData] = useState([1, 2, 3, 4, 5]);
const [inputValue, setInputValue] = useState('');

const handleItemClick = (index) => {
    const newData = [...data];
    newData[index] = <input type="text" defaultValue={newData[index]} autoFocus onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} />;
    setData(newData);
};

const handleInputBlur = (event) => {
    const index = event.target.dataset.index;
    const newData = [...data];
    newData[index] = <p onClick={() => handleItemClick(index)}>{event.target.value}</p>;
    setData(newData);
};

const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
    const index = event.target.dataset.index;
    const newData = [...data];
    newData.splice(Number(index) + 1, 0, <input type="text" autoFocus onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} />);
    setData(newData);
    }
};

const handleAddNumber = () => {
    if (inputValue !== '') {
    const newData = [...data, parseInt(inputValue)];
    setData(newData);
    setInputValue('');
    }
};

const scrollableContainerStyle = {
    maxHeight: '200px', // Ajusta esta altura según tus necesidades
    overflowY: 'auto',
};

const scrollableContentStyle = {
    paddingRight: '15px', // Asegura que no se superpongan los contenidos
};

return (
    <div>
    <h2>Componente General</h2>
    <div style={scrollableContainerStyle}>
        <div style={scrollableContentStyle}>
        {data.map((item, index) => (
            <div key={index}>
            {typeof item === 'number' ? (
                <p onClick={() => handleItemClick(index)}>{item}</p>
            ) : (
                item
            )}
            </div>
        ))}
        </div>
    </div>
    <div>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddNumber}>Agregar número</button>
    </div>
    </div>
);
}

function ListaEditable() {
return (
    <div>
    <h2>Lista Editable</h2>
    <ComponentGeneral />
    </div>
);
}

export default function Ejercicio_1() {
return (
    <div>
    <h1>Ejercicio 1</h1>
    <ListaEditable />
    </div>
);
}