export const moveZeros = array => {
    let zeros = 0;
    const result = [];
    array.forEach(item => {
        if(item === 0){
            zeros++;
        }
        else {
            result.push(item);
        }
    })
    for(let i = 0; i < zeros; ++i){
        result.push(0)
    }
    // result.concat(Array(zeros).fill(0))
    return result;
}