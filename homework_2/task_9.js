const operations = ['addProperties', 'removeProperties', 'clear']
export const transformStateWithClones = (state, transforms) => {
    const result = []
    for (let item of transforms){
        result.push(detectTransform({...state}, item));
    }
    result.push(state)
    return result;
}
const detectTransform = (state, transform) => {
    console.log(state);
    switch(transform.operation){
        case operations[0]:
            addProperties(state, transform.properties);
            break;
        case operations[1]:
            removeProperties(state, transform.properties);
            break;
        case operations[2]:
            clear(state);
            break;
    }
    return state;
}
const addProperties = (state, properties) => {
    for(let item in properties){
        state[item] = properties[item];
    }
}
const removeProperties = (state, properties) => {
    for(let item of properties){
        delete state[item];
    }
}
const clear = (state) => {
    for(let item in state){
        delete state[item];
    }
}
