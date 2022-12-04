const input = await Deno.readTextFile('./input.txt')

export const arr = input.split('\n\n')[0].split('\r\n').map((ar) => {
  return ar.split(',').map((ar) => ar.split('-'))
})

export const expandedArr: number[][][] = []

// generate range of number from two number
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const isSubset = (array1: number[], array2: number[]) =>
  array2.every((element) => array1.includes(element))

for (const ar of arr) {
  const range1 = range(+ar[0][0], +ar[0][1], 1)
  const range2 = range(+ar[1][0], +ar[1][1], 1)
  expandedArr.push([range1, range2])
}


let sum = 0
for (const ar of expandedArr) {
  const isSub = ar[0].length > ar[1].length ? isSubset(ar[0], ar[1]) : isSubset(ar[1], ar[0])
  isSub && sum++
}


console.log(sum)