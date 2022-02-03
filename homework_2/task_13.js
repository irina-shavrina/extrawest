export const createAdder = (number = 0) => {
    let result = number;
    return (...numbers) => {
        for(const item of numbers)
            result += item;
        return result;
    }
}
let adder = createAdder();