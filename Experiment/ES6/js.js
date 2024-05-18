//Array See As A String
let sprad=[1,2,3]
console.log(...sprad);

// Object Copy An Another Object
let obj={
    x:10,
    y:20,
    z:30
}
let obj2={
    ...obj
}
console.log(obj2);

// use Variable Name As A Object Property Name
let x=10;
let y=20;
let z=30;
let objenhn={
    x,
    y,
    z
}
console.log(objenhn.y);