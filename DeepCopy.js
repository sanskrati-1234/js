/*What is Deep copy & Shallow Copy in objects & create a method of get a deep copy of an object*/

var obj={
    key:1,
    key1:{
        key2:false
    }
}
var c=JSON.parse(JSON.stringify(obj));
c.key1.key2=true;
console.log(c);
console.log(obj);