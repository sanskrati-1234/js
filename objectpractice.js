var obj={
    fname:"Sanskrati",
    lastname:"Agrawal",
    address:{
        pin:"xyz",
        city:"jabalpur",

    }
}
console.log(obj.fname);
console.log(obj["fname"]);
console.log(obj.hasOwnProperty("fname"));
console.log(obj.address.hasOwnProperty("pin"));
obj.fname="Gungun";
console.log(obj);
obj["fname"]="Sanchita";
console.log(obj);
delete obj.lastname
delete obj.address.pin
console.log(obj);
console.log(typeof (Object.keys(obj)[0]));