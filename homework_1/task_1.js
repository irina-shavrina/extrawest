export function basikOp(sign, x, y){
    if(!Number.isInteger(x) || !Number.isInteger(y))
        return 0;
    switch(sign) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "^":
            return x ^ y;
        default:
            return 0;
    }
}
