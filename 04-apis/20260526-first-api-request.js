// ==========================
// Opción 1 - TOP LEVEL
// ==========================
const response = await fetch('https://6a146e4f6c7db8aac054842f.mockapi.io/api/users')
console.log(response)

console.log('-----------------------------------------')

const result = await response.json()
console.log(result)


// =======================================
// Opción 2 - CON UNA FUNCIÓN (asíncrona)
// =======================================

// async function getResults() {
//     const response = await fetch('https://6a146e4f6c7db8aac054842f.mockapi.io/api/users')
//     const result = await response.json()
//     return result
// }

// const res = await getResults()
// console.log(res)
