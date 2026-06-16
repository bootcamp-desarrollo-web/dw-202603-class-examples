const persons = [
  { name: 'Antuan', age: 33 },
  { name: 'Brian', age: 12 },
  { name: 'Carmela', age: 19 },
  { name: 'Daniela', age: 17 }
]

// Se puede usar: for, while, .map, etc...
// Por ejemplo:

// ===== Bucle 'for' con iterador =====
// for (let iter = 0; iter < persons.length; iter++) {
//     console.log(persons[iter].name)
// }

// ===== Bucle 'while' =====
// let iter = 0
// while (iter < persons.length) {
//     console.log(persons[iter].name)
//     iter++
// }

// ===== función 'map' de arrays =====
// persons.map(person => {
//     console.log(person.name)
// })

for (person of persons) {
    let title = person.age >= 18 ? 'mayor' : 'menor'
    console.log(`${person.name} es ${title} de edad (${person.age})`)
}