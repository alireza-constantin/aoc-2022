const input = await Deno.readTextFile('./input.txt')
const parsedArr: string[][] = []
export const arr = input.split('\n\n')[0].split('\r\n').forEach((ar) => {
    parsedArr.push([ar.slice(0, ar.length / 2), ar.slice(ar.length / 2, ar.length)])
})
const commonCase: string[] = []

for (let i = 0; i < parsedArr.length; i++) {
    const firstCompartment = parsedArr[i][0].split('')
    const secondCompartment = parsedArr[i][1].split('')
    let found = false;
    for (let j = 0; j < firstCompartment.length; j++) {
        if (secondCompartment.indexOf(firstCompartment[j]) !== -1 && !found) {
            found = true
            commonCase.push(firstCompartment[j])

        }
    }
}

const alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'


let sum = 0;

for (const c of commonCase) {
    sum += alp.split('').findIndex((p) => p === c) + 1
}

console.log(sum)