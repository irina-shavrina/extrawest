    export const isPrime = number => {
        let count = 0;
        if(number <= 1){
            return false;
        }
        for(let i = 1; i <= number; i++){
            if(!(number%i)){
                count++;
            }
        }
        return !(count<=2);
    }