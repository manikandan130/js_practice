//primitive datatypes

//number
let n = 3.30;
let pi = 3.14;
console.log(n + " "+pi);


//string
let s = `Hello World`;
console.log(s);


//bool
let bool = true;
console.log(bool);



//undefined
let unDefined ;
console.log(unDefined);


//null
let nulle = null;
console.log(nulle);

// non primitive data types

// object 

let obj =   {
    name : `mani`,
    age : 99
}

console.log(obj);

let jsonStr = JSON.stringify(obj);
console.log(JSON.stringify(obj));

console.log(` testing json ` + jsonStr);




//array
let arrays1 = [ `BMW`, `BENZ`, `FIAT`];

console.log(arrays1);


//FUNCTION

let a = function fun()
{
    console.log(`Geeks for geeks`);
    
}

console.log("a calling " +a);


