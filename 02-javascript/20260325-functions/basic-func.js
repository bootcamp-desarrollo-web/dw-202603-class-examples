/**
 * Uso básico de funciones - parametros de entrada, valor de retorno
 */

// Una funcion que recibe nombre de usuario e imprime "Hola" con el nombre.
function sayHello(userName) {
    // Dos maneras de concatenar la palabra "Hola" con la variable
    //console.log("Hola " + userName);
    console.log(`Hola ${userName}`);
}


sayHello('John');

let name1 = 'Alejandro';
sayHello(name1);


function returnHello(userName) {
    return "Hola " + userName;
}
let res = returnHello('Bea');
console.log(res);