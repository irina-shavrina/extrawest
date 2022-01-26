const regexForNonLetters = /[^\w]/g
export function isPalindrome (string){

    if (string === "")
        return true;

    const stringToProcess = string.replaceAll(regexForNonLetters, '').toUpperCase();
    const reversedStringToProcess = reverse(string).replaceAll(regexForNonLetters, '').toUpperCase();
    console.log(stringToProcess);
    console.log(reversedStringToProcess);
    console.log();
    
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
console.log(isPalindrome('Eva, can I see bees in a cave?'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('Was it a cat I saw?'));