let myArr1 = [33, 'Marcos', 57, 'Ignacio']

let myArr2 = ['Alberto', 'Beatriz', ['Carlos', 'Denis']]


let myObj1 = {
    name: 'John',
    age: 53
}

let myObj2 = {
    id: 13,
    sayHello() {
        alert('Hello')
    }
}

function func() {
    return {
        goUp() { alert('going up...') },
        goDown() { alert('going down...') },
    }
}


/**
 * Tareas:
 * -------
 * 1. Imprime 'Ignacio' usando myArr1
 * 2. Imprime 'Carlos' usando myArr2
 * 3. Imprime 'John' usando myObj1
 * 4. Evoca un popup con 'Hello' usando myObj2
 * 5. Evoca un popup con 'going up...' usando func
 */

/**
 * Soluciones:
 * -----------
 * 1. myArr1[3]
 * 2. myArr2[2][0]
 * 3. myObj1.name
 * 4. myObj2.sayHello()ç
 * 5. something().goUp()
 */


