var fs=require('fs')
module.exports=function(phone_no)
{
saveticket();
updateticketstatus();
}
var validate=function(input)
{
    var phone=/^\d{10}$/;
    if(input.value.match(phone))
    {
        return true;
    }
    else
    {
        alert("message");
        return false;
    }
}
var saveticket=function()
{
    fs.writeFile('abc.txt','phone')
        saveticketdb();
}
var saveticketdb=function()
{
    fs.writeFile('abc.txt','phone_no',function(err)
    {
        if(err) throw err;
        console.log('saved....!')
    });
   updateticketstatus();
}
var updateticketstatus=function()
{
    fs.appendFile('abc.txt','this is my phone no',function(err)
    {
        if(err) throw err;
        console.log('status updated.....!');
    });
}
  /*  updateticketstatusdb();
}
var updateticketstatusdb=function()
{

}
/*module.exports.ticket_serial_no="1"
module.exports.phone_no="9845767117"
module.exports.email="ranjusadarlu@gmail.com"
module.exports.location="hubli"*/