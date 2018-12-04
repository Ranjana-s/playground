
'use strict';
var command=require('yargs').argv;
var fs=require('fs');
if(command.cmd=="save")
{
    fs.writeFile('file.txt',command.product,function(err)
    {
        if(err) throw err;
        console.log('saved');
    });
}


