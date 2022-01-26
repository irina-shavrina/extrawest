const startOfFirstPath = 0;
const endOfFirstPath = 3;

const startOfSecondPath = 3;
const endOfSecondPath = 6;

export function createPhoneNumber(numbers) {
    if(numbers.length > 10 || !checkArrayContainsOnlyNumbers(numbers)){
        return "";
    }
    return (numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'));

}
function checkArrayContainsOnlyNumbers(array){
    return array.every(item => Number.isInteger(item));
}
