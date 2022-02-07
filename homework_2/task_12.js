export const createPrevArgSaver = () => {
    let timesVariable;
    return (number) => {
        const result = timesVariable;
        timesVariable = number;
        return result;
    }
}
