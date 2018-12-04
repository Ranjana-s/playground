//exporting mysql module
var mysql=require('mysql');

//creating connection
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});
con.connect(function(err){
    if(err) throw err;

    console.log("connected!");

    
    //craeting database
    con.query("CREATE DATABASE mydb1", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
    

      //creating table
      var sql = "CREATE TABLE saveticket1 (serial_no INT AUTO_INCREMENT PRIMARY KEY, phone_no VARCHAR(10))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });

      //Altering table
      var sql="ALTER TABLE saveticket1 ADD COLUMN email varchar(20)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
      });

      //inserting values in table
      var sql = "INSERT INTO saveticket1 (phone_no, email) VALUES ('7996706476', 'ranjusadarlu@gmail.com')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
});
