export const squareList = (numberArray) => {
    return numberArray
            .filter(number => number > 0 && Number.isInteger(number))
            .map(number => Math.pow(number, 2));
}