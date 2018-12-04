var mysql=require('mysql');
var fs=require('fs');
const args = require('yargs').argv;

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});
con.connect(function(err)
{
    if(err) throw err;
    console.log("connected!");
});

/*if(args.cmd==="create")
{
    
    fs.writeFile('abc.txt',args.serial_no+phone_no+email,function(err)
    {
        if(err) throw err;
        console.log('serial_no: ' + args.serial_no);  
        console.log('phone_no: ' + args.phone_no);
        console.log('email: ' + args.email); 

    });
} 
*/
/*for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
}*/

