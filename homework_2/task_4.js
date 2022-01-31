export const moveZeros = array => {
    array.forEach(function(item, index) {
        if (item === 0) {
            array.push(item);
            array.splice(index, 1);
        }
    });
        return array;
}