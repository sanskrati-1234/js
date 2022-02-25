let arr=[1,1,1,2,3,4,8,8,8,6,null];

let obj={};
for(let val in arr){
    if(!obj.hasOwnProperty(arr[val])){
        obj[arr[val]]=1;
    

    }else{
        obj[arr[val]]=obj[arr[val]]+1;
    }
}
for(let key1 in obj){
    if(obj[key1]==3){
        console.log(key1);
    }

}
