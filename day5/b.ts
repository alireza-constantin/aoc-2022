import { crates, moves } from "./a.ts";

for (const move of moves) {
    const from = crates[move[1] - 1]
    const crateToMove = from.splice(from.length - move[0], move[0])
    crates[move[2] - 1].push(...crateToMove)
}

const answer = []
for (const c of crates) {
    answer.push(c.pop())
}



console.log(answer.join(''))