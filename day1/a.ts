
const input = await Deno.readTextFile('./input.txt')

export const sorted = input.split('\r\n\r\n')
    .map(ar => (ar.split('\r\n')
        .reduce((prev, next) => +prev + +next, 0)))
    .toSorted((a, b) => b - a);

const answer = sorted[0];
console.log(answer)
