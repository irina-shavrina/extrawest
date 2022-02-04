export const createAdder = (number = 0) => {
    let result = number;
    return (...numbers) => {
        result = numbers.reduce((item) => result + item);
        return result;
    }
    // return numbers.reduce((result, item) => result + item);
}