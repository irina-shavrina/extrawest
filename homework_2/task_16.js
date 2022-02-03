const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const fearNotLetter  = (string) => {
    const alphabetSlice = alphabet.slice(alphabet.indexOf(string[0]), 
                        alphabet.indexOf(string[string.length - 1]));

    for(let i = 0; i < alphabetSlice.length; i++){
        if(!string.includes(alphabetSlice[i])){
            return alphabetSlice[i];
        }
    }
    return undefined;
}
