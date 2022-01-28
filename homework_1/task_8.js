export function countOccurrences(string, symbol){
    
    if(typeof(string) !== "string" || typeof(symbol) !== "string"){
        return 0;
    } 

    let amountOfSymbols = 0;

    for( let i = 0; i < string.length; i++){
        const upperSymbol = symbol.toUpperCase();
        if((string[i]).toUpperCase() === upperSymbol){
            amountOfSymbols++;
        }
    }

    return amountOfSymbols;
}