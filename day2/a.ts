const input = await Deno.readTextFile('./input.txt')
export const arr = input.split('\r\n\r\n')[0].split('\r\n')
    .map(ar => (ar.split(' ')))
let points = 0;


arr.forEach(ar => {
    if (ar[1] === 'Y') {
        points += 2
    } else if (ar[1] === 'Z') {
        points += 3
    } else if (ar[1] === 'X') {
        points += 1
    }


    if (ar[0] === 'A') {
        if (ar[1] === 'Y') {
            points += 6
        } else if (ar[1] === 'X') {
            points += 3;
        } else if (ar[1] === 'Z') {
            return
        }
    } else if (ar[0] === 'B') {
        if (ar[1] === 'Y') {
            points += 3
        } else if (ar[1] === 'X') {
            return
        } else if (ar[1] === 'Z') {
            points += 6
        }
    } else if (ar[0] === 'C') {
        if (ar[1] === 'Y') {
            return;
        } else if (ar[1] === 'X') {
            points += 6
        } else if (ar[1] === 'Z') {
            points += 3
        }
    }
})


console.log(arr)
console.log(points)