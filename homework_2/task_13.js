const makeCounter = (number) => {
    let result;
    
    return () => {
        for(let i = 0; i < number.length; i++){
            result += number[i];
        }
    };
 }
 