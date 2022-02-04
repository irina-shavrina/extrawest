export const invertObject = (object) =>{
    const keys = Object.keys(object);
    const values = Object.values(object);

    const result = {}
    for(let index = 0, length = keys.length; index < length; ++index){
        
        if(result.hasOwnProperty(values[index])){
            return null;
        }
        
        const keyToInsert = values[index];
        result[keyToInsert] = keys[index];
    }

    return result;

}