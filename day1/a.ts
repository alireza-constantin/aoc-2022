
const input = await Deno.readTextFile('./input.txt')

const arr = input.split('\r\n\r\n')
const cals = arr.map(ar => (
    ar.split('\r\n').reduce((prev, next) => +prev + +next, 0)
))
export const sorted = cals.toSorted((a, b) => b - a)

const answer = sorted[0];
console.log(answer)
