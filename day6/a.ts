const text = await Deno.readTextFile('./input.txt');

for (let i = 0; i < text.length; i++) {
    const packet = text.slice(i, i + 4);
    const ans = [...new Set(packet)];
    if (ans.length === 4) {
        console.log(i + 4);
        break;
    }
}
