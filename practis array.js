// var x=parseFloat(prompt('Enter Number'))

// if(x%2===1){
//     console.log(x+' is Even Number');
// }else if(x%2===0){
//     console.log(x+' is Odd Number');
// }else{
//     console.log('Wrong Input');
// }

var x=Math.round(prompt('Enter Number'))
var y=Math.abs(prompt('Enter Second Number'))

if(x%y===0){
        console.log(x+' is Composit Number');
    
}else if(x%y>0){
    console.log(x+' is Prime Number');
}else{
    console.log('Wrong Input');
}
// var x=10
// while(x)