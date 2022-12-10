const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

const arr: number[] = [];

for (let i = 0; i < lines.length; i++) {

    const [ins, amount] = lines[i].split(" ");
    if (ins === "addx") {
        arr.push(0)
        arr.push(parseInt(amount))
    }
    if (ins === 'noop') arr.push(0)
}

const canvas: string[][] = Array.from({ length: 6 }, () =>
    new Array(40).fill(" ")
);

let num = 1;

arr.forEach((ins, index) => {
    const x = index % 40;
    const y = Math.floor(index / 40)


    if (x === num || x === num - 1 || x === num + 1) {
        canvas[y][x] = "X"
    } else {
        canvas[y][x] = " "
    }
    num += ins;
});


canvas.forEach((row) => {
    console.log(row.join(""));
})