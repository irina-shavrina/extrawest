export const createAdder = (number = 0) => {
    let result = number;
    return (...numbers) => {
        result += numbers.reduce((sum, item) => sum + item, 0);
        return result;
    }
}
