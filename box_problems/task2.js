//width and height are given in %. find width and height.
var page_width=1024,page_height=768;
var get_box_width=function()
{
    return (page_width*10)/100;
}
console.log("width="+get_box_width());
var get_box_height=function()
{
    return (page_height*10)/100;
}
console.log("height="+get_box_height());