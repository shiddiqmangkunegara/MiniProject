var mysql=require('mysql');
var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'123456',
   database:'miniproject'
});
// connection.connect(function(err) {  
//     if (err) throw err;  
//     console.log("Connected!");  
//     connection.query("CREATE TABLE costumers (id int PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))", function (err, result) {  
//         if (err) throw err;  
//         console.log("Table created");  
//     });  
// });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 
