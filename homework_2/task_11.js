export const makeArmy = (countOfEntities) =>{

    const arrayOfNumbers = [];
    let index = 0;
    // let number = 0;

    while(index < countOfEntities){
        let number = index;
        arrayOfNumbers[index] = () => {
            return number;
        };
        ++index;
    }
    return arrayOfNumbers;
}
