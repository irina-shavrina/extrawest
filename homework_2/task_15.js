export const squareList = (numberArray) => {
    return numberArray
            .filter(number => number >= 1 && Number.isInteger(number))
            .map(x => x*x);
}