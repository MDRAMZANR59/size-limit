// && And
// || Or
// ! Not
// % Mod
// ? Turnary

// var x='fdfd'

// if(x%2===0){
//     console.log('This Even Number');
// }else if(x%2===1){
//     console.log('This Odd Number');
// }else{
//     console.log('Wrong Input');
// }

// var y=(x%2===0) ? 'This Even Number' : (x%2===1)? 'This Odd Number':'Wrong Input'



// function fac(n){
//     var num=1
//     for(x=1;x<=n;x++){
//         z=num*x
//         results=num+'*'+x+' = '+(z)
//         num=z
//         console.log(results);
//     }
// }

// fac(5)


// var nm='Akash'
// while (nm) {
//     var r = Math.floor(Math.random()*10+1)
//     if (r === 9) {
//        console.log(' You Win')
//         break
//     } else {
//         console.log('You Got '+r)
//         continue
//         }
// }



// for(x=1;x<=10;x++){
// res=' '
//     for(y=1;y<=x;y++){
//     res+=y+' '
    
//     }
//     console.log(res);
// }
// for(x=1;x<=5;x++){
//     var rs=' '
//     for(y=1;y<=x;y++){
//         rs+=' + '
//     }
//     console.log(rs);
// }
// var n=5
// for(x=1;x<=n;x++){
//     store=' '
//     for(y=1;y<=n;y++){
//         store+=' * '
//     }
//     console.log(store);
// }
// var n=5
// var results=' '
// for(x=1;x<=10;x++){
//     var results=n+'*'+x+' ='+(n*x)
//     for(y=1;y<=10;y++){
//         results=+n+' * '+y+' = '+(n*y)
//     }
//     console.log(results);
// }
// var n=20
// for(x=1;x<=n;x++){
//     results=' '
//     for(y=1;y<=n;y++){
//         results=results+'* '+' '
//     }
//     console.log(results);
// // }

function fac(n){
    num=1
    for(x=1;x<=n;x++){
        net=(num*x)
        results=num+' * '+x+' = '+net
        num=net
        console.log(results)
    }
}
fac(5)

// var n=Number(prompt('us'))
// for(x=1;x<=1;x++){
//     num=1
//     var res=' '
//    for(y=1;y<=n;y++){
//     var res=num+' * '+y+' = '+(num*y)
//     num=(num*y)
//     console.log(res);
//    } 
// }

// problem
// var n=10
// sum=0
// for(x=1;x<=n;x++){
//     //Sum
//     results=sum+' + '+x+' = '+(sum+x)
//     sum=(sum+x)
//     console.log(results);
// }

// var car={
//     price:100000,
//     vat:5,
//     suplayer:'India',
//     nP(s){
//        return s+(this.price-this.price/100*this.vat)
        
//     }
// }

// for(var i in car){
//     var x=i+' '+car[i]
//     console.log(x);
// }

// var array=[1,2,3,4,5,6,7,8,9,10]
// var sum=0
// for(x of array){
//     res=' '
//     results=res+sum+' + '+x+' = '+(sum+x)
//     sum=(sum+x)
//     console.log(results);
// }