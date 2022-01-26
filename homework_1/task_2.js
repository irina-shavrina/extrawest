export function stringMerge(firstWord, secondWord, letterToDivide){ 
    if(typeof(letterToDivide) !== 'string' || typeof(firstWord) !== 'string' || typeof(secondWord) !== 'string')
        return "";

    const divideIndexOfFirstWord = firstWord.indexOf(letterToDivide);
    const divideIndexOfSecondWord = secondWord.indexOf(letterToDivide);

    if(divideIndexOfFirstWord === -1 || divideIndexOfSecondWord === -1)
        return "";


    let result = firstWord.slice(0, divideIndexOfFirstWord) 
                + secondWord.slice((divideIndexOfSecondWord), secondWord.length);
    
    return result;
}
