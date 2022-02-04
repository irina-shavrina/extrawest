export const createPrevArgSaver = () => {
    let timesVariable;
    return (number) => {
        let result = timesVariable;
        timesVariable = number;
        return result;
    }
}
