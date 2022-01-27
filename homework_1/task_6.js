const regexForNonLetters = /[^\w]/g
export function isPalindrome (string){

    if(typeof(string) !== "string"){
        return false;
    } 

    if (string === "")
        return true;

    const stringToProcess = string.replaceAll(regexForNonLetters, '').toUpperCase();
    const reversedStringToProcess = reverse(string).replaceAll(regexForNonLetters, '').toUpperCase();
    
    for(let i = 0; i < stringToProcess.length && i < reversedStringToProcess.length; i++){
        if(stringToProcess[i] !== reversedStringToProcess[i]){
            return false;
        }
    }
    return true;    
}
function reverse(inputString){
    return inputString.split('').reverse().join('');
}
