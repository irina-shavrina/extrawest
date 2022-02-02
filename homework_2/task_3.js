export const isPrime = (number) => {
    const squareRootOfNumber = Math.sqrt(number);
    for(let i = 2; i <= squareRootOfNumber; i++){
        if(number % i === 0) 
            return false;
    } 
    return number > 1;
}