const text = (await Deno.readTextFile('./input.txt')).split('\r\n')

const stack: [[string, number]] = [['/', 0]]

const MAX_AMOUNT = 100000;
let total = 0;

const TOTAL_SPACE = 70000000;
const SPACE_FOR_UPDATE = 30000000;



const arr: [[string, number]] = [['/', 0]]

for (const line of text.filter(n => n)) {
    if (line == '$ cd /' || line == '$ ls') continue;


    if (line.startsWith('$ cd')) {
        const dir = line[5]
        if (dir === '.') {
            const [name, amount] = stack.pop()!
            if (amount <= MAX_AMOUNT) {
                total += +amount
            }
            stack.at(-1)![1] += +amount
            arr.push([name, amount])
        } else {
            stack.push([dir, 0])
        }
        continue
    }

    const [amount, _] = line.split(' ')
    if (!isNaN(parseInt(amount))) {
        stack.at(-1)![1] += parseInt(amount);
    }

}

while (stack.length > 0) {
    const [name, amount] = stack.pop()!;
    arr.push([name, amount]);

    if (stack.length > 0) {
        stack.at(-1)![1] += amount;
    }
}

const freeSpace = TOTAL_SPACE - +arr.at(-1)![1]
const spaceToDel = SPACE_FOR_UPDATE - freeSpace

const dirToDelete = arr.filter(([_, amount]) => amount >= spaceToDel).map(([_, amount]) => amount)

const answer = Math.min(...dirToDelete)
console.log(answer)