import { arr } from "./a.ts";

let points = 0;

arr.forEach(ar => {
    if (ar[1] === 'Y') {
        points += 3
    } else if (ar[1] === 'Z') {
        points += 6
    } else if (ar[1] === 'X') {
        points += 0
    }

    if (ar[0] === 'A') {
        if (ar[1] === 'Y') {
            points += 1
        } else if (ar[1] === 'X') {
            points += 3;
        } else if (ar[1] === 'Z') {
            points += 2
        }
    } else if (ar[0] === 'B') {
        if (ar[1] === 'Y') {
            points += 2
        } else if (ar[1] === 'X') {
            points += 1
        } else if (ar[1] === 'Z') {
            points += 3
        }
    } else if (ar[0] === 'C') {
        if (ar[1] === 'Y') {
            points += 3
        } else if (ar[1] === 'X') {
            points += 2
        } else if (ar[1] === 'Z') {
            points += 1
        }
    }
})


console.log(arr)
console.log(points)