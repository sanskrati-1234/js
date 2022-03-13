const obj={
    name:"Sanskrati",
    details:{
        address:"Patan",
        phone:{
            number1:"9522751076",
            number2:"9090909090"
        }
    }
}
let obj1;
function deepCopy(obj){
    let newObj={};
    for(let item in obj){
        if(typeof item != obj)
            newObj[item]=obj.item;
        if(typeof item ==="object"){
            newObj[item]=deepCopy(item)
        }
        console.log(item);
    }
}
deepCopy(obj)