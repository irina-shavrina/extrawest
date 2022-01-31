export const reverseWords = string => {
    if(typeof(string) !== "string"){
        return "";
    }
    let resultString = "";
    const stringWords = string.split(' ');
    for(let i = 0; i < stringWords.length; i++){
        resultString += reverse(stringWords[i])+" ";
    }
    return resultString.trim();
}
const reverse = (inputString) => {
    return inputString.split('').reverse().join('');
}