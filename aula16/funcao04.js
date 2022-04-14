function fatorial(n) {
    for (let cont = n - 1; cont >= 1; cont --) {
        n = n * cont
    }

    return n
}

console.log(fatorial(5))

// 5! = 5 * 4 * 3 * 2 * 1 = 120