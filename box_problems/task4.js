// the paragraph is given that should be printed on the box. given all details of the box.
//calculate the no of lines required to print the paragraph.
//and what are the characters in each line

/*var pixlWidth=require('string-pixel-width');
const width2=pixlWidth('hello how are you......',{font:'Times New Roman',size:10});
console.log('this text is'+width2+'px long in the size of 10px.');
*/
const fs = require('fs');
var sum=0,val,start=1,end=5;
var charCounter=0;
var line=[];
fs.readFile('para.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array)
    {
    var char=(array[i]);
    }

fs.readFile('char.json', 'utf8', function (err, data)
{
    if (err) throw err;
    data = JSON.parse(data);
    for(var i=0;i<char.length;i++)
    {
        val=data[char[i]];
        //console.log(char[i]);
        sum=sum+val;
        line.push(char[i]);
        //charCounter++;
        //console.log(sum);
        if(sum===end){
           console.log(line);
            sum=0;
       // i=charCounter;

        }
    }
});
});