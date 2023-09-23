function Next_Square_Root(num) {
    if (Math.sqrt(num) % 1 === 0) {
        let x = Math.pow(Math.sqrt(num) + 1, 2);
        return x;

    } else {
        return -1;
    }

}

console.log(Next_Square_Root(154));
