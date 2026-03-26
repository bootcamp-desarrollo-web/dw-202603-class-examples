// Esta es la forma de crear un array básico
let fruits = ["Manzana", "Naranja", "Pera"];
console.log(fruits);

// Modificar el elemento que está en índice 1 (ojo, ¡es el SEGUNDO!)
fruits[1] = "Pomelo";
console.log(fruits);

// Imprimir el elemento que está en índice 2
console.log(fruits[2]);

console.log(fruits.length);

fruits[3] = "Fresa";
console.log(fruits);

// Insertar un elemento ignorando de que no existe un 4º elemento (¿¿que ocurre??)
fruits[5] = "Mango";
console.log(fruits);
console.log(fruits[4]);
console.log(fruits.length);

// Imprimir el último elemento del array (independientemente del array)
console.log(fruits[fruits.length - 1]);

let lastIdx = fruits.length - 1
console.log(fruits[lastIdx]);

// Funciones - ¿qué hace la función `pop` ?
// Prueba usar la función `push` para ver qué hace.
console.log("===================================");
let lastElement = fruits.pop();
console.log("Last element: ", lastElement)
console.log("Array actual: ", fruits);