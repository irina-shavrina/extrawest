export function basikOp(sign, x, y){
    let result;
    switch(sign) {
        case "+":
            result =  x + y;
            break;
        case "-":
            result =  x - y;
            break;
        case "*":
            result =  x * y;
            break;
        case "/":
            result =  x / y;
            break;
        case "%":
            result =  x % y;
            break;
        case "^":
            result =  x ^ y;
            break;
        default:
            result =  0;
            break;
    }
    return result;
}
console.log(basikOp('+', 4, 5));
console.log(basikOp('qwerty', 4, 5));
console.log(basikOp('/', 4, 5));