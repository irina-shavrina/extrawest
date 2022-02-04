export const makeArmy = (countOfEntities) =>{

    const arrayOfNumbers = [];
    let index = 0;

    while(index < countOfEntities){
        const number = index;
        arrayOfNumbers.push(() => {
            return number;
        });
        ++index;
    }
    return arrayOfNumbers;
}
