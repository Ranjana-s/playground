//x1,y1,height and width are given find x3,y3
var width=260,height=75;
var x3=function(x1)
{
    return x1+width-1;
}
console.log("x3="+x3(35));

var y3=function(y1)
{
    return y1+height-1;
}
console.log("y3="+y3(20));