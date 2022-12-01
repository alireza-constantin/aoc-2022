import { sorted } from "./a.ts";

let answer = 0;
sorted.forEach((a, i) => {
    if (i < 3) answer += a
})
console.log(answer)