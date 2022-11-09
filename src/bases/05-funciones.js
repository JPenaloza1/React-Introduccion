// Funciones de JS
const saludar = function( nombre ) {
    return `Hola ${nombre}`
}

const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`
}

const saludar3 = ( nombre ) => `Hola ${nombre}`

const saludar4 = () => `Hola mundo`

console.log( saludar("Jonathan") );
console.log( saludar2("Octavio") );
console.log( saludar3("Carolina") );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC123',
    userName: "El_Papi_1502"
});

const user = getUser();
console.log( user );


const getUsuarioActivo = ( nombre ) => ({
    
        uid: "ABC456",
        userName: nombre
    }
);

const usuarioActivo = getUsuarioActivo( "Maria" );
console.log(usuarioActivo);