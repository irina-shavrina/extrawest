export const squareList = (numberArray) => {
    return numberArray.reduce((arrayOfNumbers, number) =>{ 
        if(Math.sign(number) > 0 && Number.isInteger(number)){
            return [...arrayOfNumbers, Math.pow(number, 2)];
        } 
        return [...arrayOfNumbers];
    }, [])
}