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

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([9, 8, 7, 6, 5, 4, 4, 3, 2, 1]));