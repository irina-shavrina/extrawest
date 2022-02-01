const regexToFindParamInTemplate = /{(\w*)}/g;

export const createUrl = (template, params) => {
    return template.replace(regexToFindParamInTemplate, 
                            word => findParamInParams(word, params));
}
const findParamInParams = (param, params) => {
    const value = param.slice(1, param.length - 1);

    return params.hasOwnProperty(value)? params[value] : "undefined";
}