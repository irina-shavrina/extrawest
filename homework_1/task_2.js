export function stringMerge(firstWord, secondWord, letterToDivide){
    let result;

    result = returnLettersUntil(firstWord, letterToDivide) + 
            letterToDivide + 
            returnLettersBefore(secondWord, letterToDivide);

    return result;
}
function returnLettersUntil(word, letterToFind){
    let result = "";
    for(let item of word){
        if(item === letterToFind){
            break;
        }
        result+=item;
    }
    return result;
}
function returnLettersBefore(word, letterToFind){
    let result = "";
    let indexFrom = word.indexOf(letterToFind)
    for(let index = indexFrom + 1; index < word.length; ++index){
        result+=word[index];
    }
    return result;
}
console.log(stringMerge("hello", "world", "l"));
console.log(stringMerge("coding", "anywhere", "n"));
console.log(stringMerge("wonderful", "people", "e"));