import { expandedArr } from "./a.ts";

const isOverlap = (array1: number[], array2: number[]) => {
    return array2.some((el) => array1.includes(el))
}

let sum2 = 0;
for (const ar of expandedArr) {
    isOverlap(ar[0], ar[1]) && sum2++
}

console.log(sum2)