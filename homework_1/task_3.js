const startOfFirstPath = 0;
const endOfFirstPath = 3;

const startOfSecondPath = 3;
const endOfSecondPath = 6;

const startOfThirdPath = 6;
const endOfThirdPath = 10;
export function createPhoneNumber(numbers){
    if(numbers.length > 10 || !checkArrayContainsOnlyNumbers(numbers))
        return;

    let phoneNumber = "";
    
    let firstPart = numbers.slice(startOfFirstPath, endOfFirstPath).join('');
    let secondPart = numbers.slice(startOfSecondPath, endOfSecondPath).join('');
    let thirdPart = numbers.slice(startOfThirdPath, endOfThirdPath).join('');

    phoneNumber = `(${firstPart}) ${secondPart}-${thirdPart}`

    return phoneNumber;
}
function checkArrayContainsOnlyNumbers(array){
    return array.every(item => Number.isInteger(item));
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([9, 8, 7, 6, 5, 4, 4, 3, 2, 1]));