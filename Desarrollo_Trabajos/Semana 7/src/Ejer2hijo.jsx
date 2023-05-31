const Ejer2Hijo = ({ data, attribute }) => {
    let filteredData;

    if (attribute === 'impares') {
      // Filtrar los datos impares del array
    filteredData = data.filter((number) => number % 2 !== 0);
    } else {
      // Usar todos los datos del array
    filteredData = data;
    }

    return (
    <div>
        <h3>Componente Hijo</h3>
        <h3>Numeros Impares del 1 al 100</h3>
        <div style={{ whiteSpace: 'nowrap' }}>
        {filteredData.map((number) => (
            <div key={number} style={{ display: 'inline-block', marginRight: '10px' }}>
            {number}
            </div>
        ))}
        </div>
    </div>
    );
};

export default Ejer2Hijo;