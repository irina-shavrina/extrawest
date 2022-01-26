const regex = /\d\d:\d\d/g
const regexForValidTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
export function getTime(str){
    let matches = [...str.matchAll(regex)]

    for(let item of matches){
        let itemContent = item[0];
        if(itemContent.match(regexForValidTime)){
            return itemContent;
        }
    }
    return '';
}

