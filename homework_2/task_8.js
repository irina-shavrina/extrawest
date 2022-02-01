const operations = ['addProperties', 'removeProperties', 'clear']
export const transformState = (state, transforms) => {
    for (let item of transforms){
        detectTransform(state, item);
    }
    return state;
}
const detectTransform = (state, transform) => {
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
