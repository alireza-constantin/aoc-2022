const input = await Deno.readTextFile('./input.txt')

export const arr = input.split('\r\n\r\n')[0].split('\r\n')

const parsedArr = []

for (let i = 0; i < arr.length; i = i + 3) {
    parsedArr.push([arr[i], arr[i + 1], arr[i + 2]])

}


const commonCase: string[] = []

for (let i = 0; i < parsedArr.length; i++) {
    const firstCompartment = parsedArr[i][0].split('')
    const secondCompartment = parsedArr[i][1].split('')
    const thirdCompartment = parsedArr[i][2].split('')
    const maxLength = Math.max(firstCompartment.length, secondCompartment.length, thirdCompartment.length)
    let found = false;
    let firstCommon;
    for (let j = 0; j < maxLength; j++) {
        if (secondCompartment.indexOf(firstCompartment[j]) !== -1 && !found) {
            firstCommon = firstCompartment[j]
            if (thirdCompartment.indexOf(firstCommon) !== -1) {
                commonCase.push(firstCommon)
                found = true;
            }
        }
    }
}



const alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let sum = 0;

for (const c of commonCase) {
    sum += alp.split('').findIndex((p) => p === c) + 1
}

console.log(sum)

