const operations = ['addProperties', 'removeProperties', 'clear'];
export const transformStateWithClones = (state, transforms) => {
    const result = [];
    let objectToWork = JSON.parse(JSON.stringify(state));

    for (const item of transforms){
        objectToWork = detectTransform(objectToWork, item);
        result.push(objectToWork);
    }
    return result;
}
const detectTransform = (state, transform) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    switch(transform.operation){
        case operations[0]:
            addProperties(stateCopy, transform.properties);
            break;
        case operations[1]:
            removeProperties(stateCopy, transform.properties);
            break;
        case operations[2]:
            clear(stateCopy);
            break;
    }
    return stateCopy;

}
const addProperties = (state, properties) => {
    for(let item in properties){
        state[item] = properties[item];
    }
    return state;
}
const removeProperties = (state, properties) => {
    for(let item of properties){
        delete state[item];
    }
    return state;
}
const clear = (state) => {
    for(let item in state){
        delete state[item];
    }
    return state;
}
// console.log(transformStateWithClones(
//     {foo: 'bar', bar: 'foo'},
//     [
//   {operation: 'addProperties', properties: {name: 'Jim', hello: 'world'}}, 
//   {operation: 'removeProperties', properties: ['bar', 'hello']},
//   {operation: 'addProperties', properties: {another: 'one'}}
//     ]
//   ) 
//   )
