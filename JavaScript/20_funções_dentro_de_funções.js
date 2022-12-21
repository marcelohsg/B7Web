/*function square(x) {
    return x * x
}
*/

function addSquares(a,b) {
    const square = (x) => { // Arrow function
        return x * x
    }
    return square(a) + square(b)
}

console.log(addSquares(2,2))


