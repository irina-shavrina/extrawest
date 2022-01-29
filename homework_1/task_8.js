export function countOccurrences(string, symbol){
    
    if(typeof(string) !== "string" || typeof(symbol) !== "string"){
        return 0;
    } 

    let amountOfSymbols = 0;
    const upperSymbol = symbol.toUpperCase();

    for( let i = 0; i < string.length; i++){
        if((string[i]).toUpperCase() === upperSymbol){
            amountOfSymbols++;
        }
    }

    return amountOfSymbols;
}