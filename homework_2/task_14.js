export const frankenSplice = (firstArray, secondArray, index) => {
    const arrayForWork = secondArray.slice();
    arrayForWork.splice(index, 0, ...firstArray);
    return arrayForWork;
}