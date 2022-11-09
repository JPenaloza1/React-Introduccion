const personajes = [
    "Goku",
    "Vegueta",
    "Trunkis"
];

const [ , , p3 ] = personajes;
console.log( p3 );

const retornarArreglo =  () => {
    return ["ABC", 123];
}

const [ letras, numeros ] = retornarArreglo();
console.log( letras, numeros );

const usestate = ( valor ) => {
    return [valor, () => {console.log("Hola mundo")}];
}

const [ nombre, setNombre ] = usestate( 'Goku' );

console.log( nombre );
setNombre();