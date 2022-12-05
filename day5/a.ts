// const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
export const crates = [["S", "M", "R", "N", "W", "J", "V", "T"], ["B", "W", "D", "J", "Q", "P", "C", "V"], ["B", "J", "F", "H", "D", "R", "P"], ["F", "R", "P", "B", "M", "N", "D"], ["H", "V", "R", "P", "T", "B"], ["C", "B", "P", "T"], ["B", "J", "R", "P", "L"], ["N", "C", "S", "L", "T", "Z", "B", "W"], ["L", "S", "G"]]

const input = await Deno.readTextFile('./input.txt')
export const moves = input.split('\r\n').map((mv) => {
    const textMoves = mv.split(' ')
    return [parseInt(textMoves[1]), parseInt(textMoves[3]), parseInt(textMoves[5])]
})

for (const move of moves) {
    const from = crates[move[1] - 1]
    const crateToMove = from.splice(from.length - move[0], move[0])
    crates[move[2] - 1].push(...crateToMove.reverse())
}

const answer = []
for (const c of crates) {
    answer.push(c.pop())
}



console.log(answer.join(''))