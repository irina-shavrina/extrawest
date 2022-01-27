const regexForValidTime = /([0-1][0-9]|2[0-3])(:)([0-5][0-9])/
export function getTime(str){
    const match = str.match(regexForValidTime);

    return match?match[0]:"";
}
