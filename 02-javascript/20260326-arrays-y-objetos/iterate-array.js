let fruits = ["Manzana", "Naranja", "Pera", "Mango", "Fresa"];

// Con este bucle iteramos todos los elementos del array
// ¿Porque funciona la condición `iter < fruits.length`?
for (let iter = 0; iter < fruits.length ; iter++) {
    console.log(iter, fruits[iter]);
}

// La lógica de esta condición es idéntica, mira a ver que entiendes por qué.
for (let iter = 0; iter <= (fruits.length - 1) ; iter++) {
    console.log(iter, fruits[iter]);
}
