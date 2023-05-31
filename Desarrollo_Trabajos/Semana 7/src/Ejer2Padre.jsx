import Ejer2Hijo from './Ejer2hijo';

const Ejer2Padre = () => {
  // Array de números del 1 al 100
const numberArray = Array.from({ length: 100 }, (_, index) => index + 1);

  // Atributo para especificar qué datos renderizar en el hijo (impares o todos)
const attribute = 'impares';

return (
    <div>
    <br></br>
    <h1>Este es el Ejercicio 2</h1>
    <br></br>
    <h2>Componente Padre</h2>
    <Ejer2Hijo data={numberArray} attribute={attribute} />
    </div>
);
};

export default Ejer2Padre;