export const createPrevArgSaver = () => {
    let timesVariable = undefined;
    return (number) => {
        let result = timesVariable;
        timesVariable = number;
        return result;
    }
}
