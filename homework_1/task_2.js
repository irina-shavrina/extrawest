export function stringMerge(firstWord, secondWord, letterToDivide){ 

    const divideIndexOfFirstWord = firstWord.indexOf(letterToDivide);
    const divideIndexOfSecondWord = secondWord.indexOf(letterToDivide);

    let result = firstWord.slice(0, divideIndexOfFirstWord) 
                + secondWord.slice((divideIndexOfSecondWord), secondWord.length);
    
    return result;
}
console.log(stringMerge("hello", "world", "l"));
console.log(stringMerge("coding", "anywhere", "n"));
console.log(stringMerge("wonderful", "people", "e"));
