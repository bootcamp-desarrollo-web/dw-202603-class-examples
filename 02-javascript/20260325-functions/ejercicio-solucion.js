/**
 * Esta función recibe un número y suma de 1 hasta este número
 */
function sumarHasta(maxNumber) {
    // Primero validamos que el número es positivo
    if (maxNumber < 1) {
        console.log(`El número debe ser positivo - recibido el número ${maxNumber}`);
        return -1;
    }

    // Vamos a crear una variable para ir sumando todos los números
    // desde 1 hasta maxNumber
    let sum = 0;

    // Iteramos sobre todos los números desde 1 hasta maxNumber
    for (iter = 1; iter <= maxNumber; iter++) {
        
        // Dentro de la iteración sumamos al valor sumado hasta ahora (`sum`) 
        // el valor actual de la iteración
        sum = sum + iter;
        console.log(`=> sumamos al resultado anterior ${iter}, resultado actual: ${sum}`);
    }

    // al final devolvemos el resultado
    return sum;
}

console.log('======================================');
let number = 5;
let res = sumarHasta(number);
console.log("Valor de entrada: ", number);
console.log("Resultado: ", res);

console.log('======================================');
number = -33;
res = sumarHasta(number);
console.log("Valor de entrada: ", number);
console.log("Resultado: ", res);
