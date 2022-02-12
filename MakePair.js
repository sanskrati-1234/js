var obj={
    name:"Sanskrati",
    email:"sanskrartiagrawal306@gmail.com",
    address:{
        pincode:"483113",

    }
};
var pairs=(obj)=>Object.entries(obj);
console.log(pairs.length);
var arr=[];
for(var key in obj){
    arr.push([key,obj[key]]);

}
console.log(arr);