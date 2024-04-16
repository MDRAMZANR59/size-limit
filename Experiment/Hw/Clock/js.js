function ageCalculator(){
var error='Wrong Input'
    /*Birth date*/
var bYear=document.querySelector('.by').value
var bMonth=document.querySelector('.bm').value
if(!(bMonth> 0 || bMonth<=12)){
    bMonth=error
}
var bDay=document.querySelector('.bd').value
/*Now Date*/
var nYear=document.querySelector('.ny').value
var nMonth=document.querySelector('.nm').value
var nDay=document.querySelector('.nd').value

var ry=nYear-bYear
if(bMonth===error){
    rm=error;
    document.getElementById('results').innerHTML=rm
}else{
    rm=nMonth-bMonth
}
var rd=nDay-bDay
var msg='Your Age Is'
return document.getElementById('results').innerHTML=msg+' '+ry+' Year '+rm+' Month '+rd+' Day'
}