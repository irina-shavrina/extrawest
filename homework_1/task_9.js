const regexForVowels = /[aeiou]/g 
export function vowelCount(string){
    if(typeof(string) !== "string"){
        return 0;
    } 

    let countOfVowels = 0;
    countOfVowels = string.match(regexForVowels);
    
    return countOfVowels?countOfVowels.length:0;
}
