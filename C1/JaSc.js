// && And
// || Or
// ! Not
// % Mod
// ? Turnary

// var x='fdfd'

if(x%2===0){
    console.log('This Even Number');
}else if(x%2===1){
    console.log('This Odd Number');
}else{
    console.log('Wrong Input');
}

var y=(x%2===0) ? 'This Even Number' : (x%2===1)? 'This Odd Number':'Wrong Input'



function fdgfd(n){
    var num=1
    for(x=1;x<=n;x++){
        z=num*x
        results=num+'*'+x+' ='+(z)
        num=z
        console.log(results);
    }
}

fdgfd(3)


var nm='Akash'
while (nm) {
    var r = Math.floor(Math.random()*10+1)
    if (r === 9) {
       console.log(' You Win')
        break
    } else {
        console.log('You Got '+r)
        continue
        }
}

1
12
123
1234
12345
123456
1234567
12345678
123456789

for(x=1;x<=10;x++){
res=' '
    for(y=1;y<=x;y++){
    res+=y+' '
    
    }
    console.log(res);
}
for(x=1;x<=5;x++){
    var rs=' '
    for(y=1;y<=x;y++){
        rs+=' + '
    }
    console.log(rs);
}
var n=5
for(x=1;x<=n;x++){
    store=' '
    for(y=1;y<=n;y++){
        store+=' * '
    }
    console.log(store);
}
var n=5
var results=' '
for(x=1;x<=10;x++){
    var results=n+'*'+x+' ='+(n*x)
    for(y=1;y<=10;y++){
        results=+n+' * '+y+' = '+(n*y)
    }
    console.log(results);
}

