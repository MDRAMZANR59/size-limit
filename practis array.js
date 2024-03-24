var x=parseFloat(prompt('Enter Number'))

if(x%2===1){
    console.log(x+' is Odd Number');
}else if(x%2===0){
    console.log(x+' is Even Number');
}else{
    console.log('Wrong Input');
}

var x=Math.round(prompt('Enter Number'))
var y=Math.round(prompt('Enter 2nd Number'))

if(x%x===0 && (x%y>0)){
        console.log(x+' is Prime Number');
    
}else if(x%y===0){
    console.log(x+' is Composit  Number');
}else{
    console.log('Wrong Input');
}
var x=0
while(x<20){
    console.log(x);
    x++
}

var x=-0.001
y=11
z=100
a=90

console.log(Math.round(Math.random()*500));


