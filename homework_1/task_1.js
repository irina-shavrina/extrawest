export function basikOp(sign, x, y){
    let result;
    switch(sign) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
        case "%":
            return x % y;
            break;
        case "^":
            return x ^ y;
            break;
        default:
            return 0;
            break;
    }
}
console.log(basikOp('+', 4, 5));
console.log(basikOp('qwerty', 4, 5));
console.log(basikOp('/', 4, 5));