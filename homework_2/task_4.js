export const moveZeros = array => {
    let zeros = 0;
    const arrayWithMovedZeros = [];
    array.forEach(item => {
        if(item === 0){
            zeros++;
        }
        else {
            arrayWithMovedZeros.push(item);
        }
    })
    
    return arrayWithMovedZeros.concat(Array(zeros).fill(0))
}