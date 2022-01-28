const regexForNonLetters = /[^\w]/g
export function isPalindrome (string){

    if(typeof(string) !== "string"){
        return false;
    } 

    if (string === "")
        return true;

    const stringToProcess = string.replaceAll(regexForNonLetters, '').toUpperCase();
    const reversedStringToProcess = reverse(stringToProcess);
    
    if(stringToProcess !== reversedStringToProcess){
        return false;
    }

    return true;    
}
function reverse(inputString){
    return inputString.split('').reverse().join('');
}
