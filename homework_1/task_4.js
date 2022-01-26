const allowedOperators = ['+', '*', '/', '-'];

const maxSizeOfExpression = 3;

const leftPartOfExpression = 0;
const symbolPositionInExpression = 1;
const rightPartOfExpression = 2;

export function getOperands(string){
    const elements = string.split(' ');
    if(elements.length !== maxSizeOfExpression){
        console.log("Size of expression is bigger than " + maxSizeOfExpression)
        return 0;
    }
    const leftPart = Number(elements[leftPartOfExpression]);
    const symbol = elements[symbolPositionInExpression];
    const rightPart = Number(elements[rightPartOfExpression]);

    if (!isOperator(symbol)){
        console.log(`Symbol is not correct - ${symbol}`)
        return 0;
    }

    if(isNaN(leftPart) || isNaN(rightPart)){
        console.log(`One path of exp is not valid`)
        return 0;
    }
    let result = `a:${leftPart}, b:${rightPart}`

    return result;
}
function isOperator(symbol){
    for(var operator of allowedOperators){
        if(symbol == operator){
            return true;
        }
    }
    return false;
}

