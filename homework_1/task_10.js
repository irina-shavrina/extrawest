const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function alphabetPosition(string){
    if(typeof(string) !== "string"){
        return "";
    } 

    let result = [];
    const stringToProcess = string.replace(/[^a-zA-Z]/g, '');

    for(let symbol of stringToProcess){
        result.push(findSymbolPositionInAlphabet(symbol));
    }
    return result.join(' ');
}
function findSymbolPositionInAlphabet(symbol){
    const symbolToProcess = symbol.toUpperCase();
    const fondedIndex = alphabet.indexOf(symbolToProcess);

    return fondedIndex + 1;
}