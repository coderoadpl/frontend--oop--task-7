// ADDING TWO NUMBERS

// regular function

// only one expression in function body
const add = function (a, b) {
    return a + b
}

// more than expression in function body
const validateAndAdd = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both args must be numbers')
    }
    return a + b
}

// arrow functions

const addArrow1 = (a, b) => {
    return a + b
}

const addArrow2 = (a, b) => a + b

const addArrow3 = (a, b) => (
    a + b
)

const validateAndAddArrow = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both args must be numbers')
    }
    return a + b
}

// RETURNING SIMPLE VALUE

// regular function

const returnX = function (x) {
    return x
}

// arrow functions

const returnXArrow1 = (x) => x

const returnXArrow2 = x => x

// HELLO WORLD

// regular function

const hello = function () {
    console.log('Hello world!')
}

// arrow functions

const helloArrow1 = () => {
    console.log('Hello world!')
}

const helloArrow2 = () => console.log('Hello world!')