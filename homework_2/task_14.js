export const frankenSplice = (firstArray, secondArray, index) => {
    return secondArray.slice(0, index).concat(firstArray, secondArray.slice(index, secondArray.length));
}