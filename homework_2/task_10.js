export const invertObject = (object) =>{
    const keys = Object.keys(object);
    const values = Object.values(object);

    const result = {}
    for(let index = 0, length = keys.length; index < length; ++index){
        const keyToInsert = values[index];

        if(keyToInsert in result){
            return null
        }
        result[keyToInsert] = keys[index]
    }

    return result;

}