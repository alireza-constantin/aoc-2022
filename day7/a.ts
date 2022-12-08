const text = (await Deno.readTextFile('./input.txt')).split('\r\n')

const stack = [['/', 0]]

const MAX_AMOUNT = 100000;
let total = 0;

for (const line of text.filter(n => n)) {
    if (line == '$ cd /' || line == '$ ls') continue;


    if (line.startsWith('$ cd')) {
        const dir = line[5]
        if (dir === '.') {
            const [_, amount] = stack.pop()
            if (amount <= MAX_AMOUNT) {
                total += amount;
            }
            stack.at(-1)[1] += amount;
        } else {
            stack.push([dir, 0])
        }
        continue
    }

    const [amount, _] = line.split(' ')
    // console.log('amount', amount)
    if (!isNaN(parseInt(amount))) {
        stack.at(-1)[1] += parseInt(amount);
    } else if (amount === 'dir') {
        // ignore
    }
}


console.log(total)