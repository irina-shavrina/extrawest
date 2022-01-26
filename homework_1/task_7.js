function swapCase(string){
    let result = "";

    if(typeof(string) !== 'string')
        return "";

    for( let i = 0; i < string.length; i++)
        result += changeCase(string[i])
    
    return result;
}
function changeCase(symbol){
    return isUpperCase(symbol)? symbol.toLowerCase() : symbol.toUpperCase();
}
function isUpperCase(symbol){
    return symbol.toUpperCase() === symbol;
}
console.log(swapCase("aBc"));