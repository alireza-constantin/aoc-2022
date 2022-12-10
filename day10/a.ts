const text = (await Deno.readTextFile('./input.txt')).split('\r\n').flatMap((ar) => ar.split(' '))


const sums: number[] = []
let sum = 0;
text.forEach((a, i) => {
    const cycle = i + 1;
    if (!isNaN(parseInt(a))) {
        const number = parseInt(a)
        sum += number;
    }
    if (cycle % 40 == 20) {
        if (isNaN(parseInt(a))) {
            sums.push((sum + 1) * cycle)
        } else {
            sums.push((sum - parseInt(a) + 1) * cycle)
        }
    }

})
console.log(sums)
const answer = sums.reduce((prev, a) => prev + a, 0);
console.log(answer)

