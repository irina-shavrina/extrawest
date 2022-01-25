const regex = /\d\d:\d\d/g
export function getTime(str){
    let matches = [...str.match(regex)]

    for(let item of matches){
        if(isTimeValid(item[0])){
            return item[0];
        }
    }
    return '';
}
function isTimeValid(timeStr){
    let items = timeStr.split(':');
    let leftPart = items[0];
    let rightPart = items[1];
    return Number(leftPart) < 24 && Number(rightPart) < 60;
}
console.log(getTime('Breakfast at 09:00'))			
console.log(getTime('Breakfast at 09:60, Dinner at 21:00'))	
console.log(getTime('')) 
