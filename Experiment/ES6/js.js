// const price=100000;
// const vat=200000;
// const car={
//     price,
//     vat,
// }
// const x=Object.entries(car);
// const y=Object.fromEntries(x);
// console.log(y);
let ar=[1,2,3,4]
// function test(p){
//     let i=0;
//     return{
//         next(){
//             return{
//                 done:i>=p.length,
//                 vl:p[i++]
//             }
//         }
//     }
// }
// var res=test(ar)
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
let test=ar[Symbol.iterator]();
console.log(test.next());
console.log(test.next());
console.log(test.next());