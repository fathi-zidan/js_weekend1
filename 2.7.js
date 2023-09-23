function basicOp(op, num1, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
let sub= basicOp("-",10,5);
console.log(`sum = `,sub);

let add= basicOp("+",3,5);
console.log(`sum = `,add);

let multiplication= basicOp("*",3,5);
console.log(`sum = `,multiplication);

let division= basicOp("/",20,5);
console.log(`sum = `,division);