function Test(h,w){
    this.width=h
    this.height=w
    this.sum=function(){
        return this.draw()
    }
}
//Set Proto With No Reset Constractor
Test.prototype.draw=function(){
    return this.height*this.width
}

//Copy One Constractor To another Constractor
function Tst1(h,w,w1,h1){
    Test.call(this,w1,h1)
    this.height=h
    this.width=w
}
//Copy Prototype Of Another With Reset Constractor

Tst1.prototype=Object.create(Test.prototype)
Tst1.prototype.constructor=Tst1

var c=new Tst1(10,20,30,40)
//Copy One Constractor To another Constractor
function Test2(h,w){
    Test.call(this,h,w)
    this.config=function(){
        return this.width+this.height
    }
}

var p=new Test2(2,3)