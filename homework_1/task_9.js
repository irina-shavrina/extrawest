const vowels = ['a', 'e', 'i', 'o', 'u'];
export function vowelCount(string){
    if(typeof(string) !== "string"){
        return 0;
    } 

    let countOfVowels = 0;
    for(let i = 0, j = 0; i < string.length; i++){
        if(isLetterVowel(string[i])){
            countOfVowels++;
        }
    }

    return countOfVowels;
}
function isLetterVowel(checkedLetter){
    for(let i = 0; i < vowels.length; i++){
        if(checkedLetter === vowels[i]){
            return true;
        }
    }
}
