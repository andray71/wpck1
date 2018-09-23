export default (obj, ns) => {
    for (let key in obj){
        if(obj[key] === null){
            obj[key] = ns? `${ns}.${key}`:key;
        }
    }
    return obj
}
