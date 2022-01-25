// export function stringMerge(firstWord, secondWord, result){
//     let newWord = "";
//     for(let i=0; i < firstWord.length; i++){
//         if(firstWord[i] == result){
//             break
//         }
//         newWord += firstWord[i];
//     }
//     newWord += result;
//     let indexFrom = secondWord.indexOf(result)
//     for(let j=indexFrom; j < secondWord.length; j++){
//         newWord += secondWord[j];
//     }
//     return newWord;
// }
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