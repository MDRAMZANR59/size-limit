var a=Number(prompt('Frist Number'))
var c=prompt('Opetator')
var b=Number(prompt('Second Number'))

switch (c) {
    case '+': console.log(a+b);        
        break;
    case '-': console.log(a-b);        
        break;
    case '*': console.log(a*b);        
        break;
    case '/': console.log(a/b);        
        break;

    default: console.log('Wrong Input')
        break;
}

let num1 = Number(prompt("Number 1"))
let num2 = Number(prompt("Number 1"))
let num3 = Number(prompt("Number 1"))

let largestNum;

if (num1 > num2 && num1 > num3) {
  largestNum = num1;
} 
else if (num2 > num1 && num2 > num3) {
  largestNum = num2;
} 
else {
  largestNum = num3;
}

console.log(largestNum);