/**
 * Vamos a crear un objeto con diferentes propiedades
 */

const person = {
    firstName: "Ana",  /* Esta propiedad es un string */
    lastName: "Martínez",

    /* Esta propiedad es una función */
    fullName() {
        // La palabra reservada this sirve para acceder a campos del objeto
        console.log(`Generando nombre completo para ${this.firstName}...`);

        // Dentro de la función podemos crear una nueva variable
        let res = this.firstName + " " + this.lastName;
        return res;
    },

    age: 30, /* Esta propiedad es un number */
    isMarried: false,

    // Se puede meter un objeto como valor de una propiedad
    address: {
        city: "Madrid",
        street: "Mallorca",
        PostalCode: "28000",
    }
}

// Imprimir el objeto completo
console.log(person);

// Imprimir una propiedad del objeto
console.log(person.firstName + " " + person.lastName);

// Imprimir la propiedad `city` del objeto de la propiedad `address`
console.log(person.firstName + " vive en " + person.address.city);

// Las funciones nos permiten encapsular lógica compleja dentro del objeto,
// para luego simplificar el código
console.log("-----------------------------------");
console.log(person.fullName());