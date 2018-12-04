//width and heights are given, alignment values are given. find x1,y1
var page1_width=1024,page1_height=768;
var width1=260,height1=75;
//left alignment
var x1=function()
{
    return x=0;
}
console.log("x1="+x1());
var y1=function()
{
    return 0+height1;
}
console.log("y1="+y1());

//center allignment
var x1=function()
{
    return (page1_width-width1)/4;
}
console.log("x1="+x1());
var y1=function()
{
    return (page1_height-height1)/4;
}
console.log("y1="+y1());

//right alignment
var x1=function()
{
    return (page1_width-width1);
}
console.log("x1="+x1());
var y1=function()
{
    return (page1_height-height1);
}
console.log("y1="+y1());