function isKeyExist(obj,key){
    if(obj===undefined || obj===null || key===undefined || key===null){
        return "ethier object or key not valid";
    }
    if(obj.hasOwnProperty(key)){
        return "key is there";
    }
    return "key doesn't exist";

}
