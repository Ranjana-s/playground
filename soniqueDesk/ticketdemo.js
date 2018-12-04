
//without using yarg
//take input data from ticket
var command,
    product_serial_no,
    phone_no,
    email,
    location;
//arguments
command=process.argv[2];
product_serial_no=process.argv[3];
if(command==='newticket')
{
    console.log('preparing to svae....');
}
else if(command==='updateticket')
{
    console.log('preparing to update');
}
else
{
    console.log('unknown command');
}
/*const ticket=require('./ticket.js')
var getres=new ticket();
getres.saveticket;
getres.saveticketdb;
*/

const ticket = require('./ticket.js')
console.log(ticket.ticket_serial_no);
console.log(ticket.phone_no);
console.log(ticket.email);
console.log(ticket.location);