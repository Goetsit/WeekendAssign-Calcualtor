var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

var numberArray = [];

/*BEGIN ADD*/ 
app.post('/add',function(req,res){
   
   var firstNumber = parseInt(req.body.first);
   var secondNumber = parseInt(req.body.second);
    numberArray.push(firstNumber+secondNumber);
console.log('testerMctestTest',numberArray);
   
   res.send(201);
})

app.get('/add',function(req,res){
    console.log('from GET',numberArray)
    res.send(numberArray);
})
/*END ADD*/
/*BEGIN SUBTRACT*/
app.post('/subtract',function(req,res){
    
    var firstNumber = parseInt(req.body.first);
    var secondNumber = parseInt(req.body.second);
     numberArray.push(firstNumber-secondNumber);
 console.log('testerMctestTest',numberArray);
    
    res.send(201);
 })
 
 app.get('/subtract',function(req,res){
     console.log('from GET',numberArray)
     res.send(numberArray);
 })
 
/*END SUBTRACT*/
/*BEGIN DIVIDE*/ 
app.post('/divide',function(req,res){
    
    var firstNumber = parseInt(req.body.first);
    var secondNumber = parseInt(req.body.second);
     numberArray.push(firstNumber/secondNumber);
 console.log('testerMctestTest',numberArray);
    
    res.send(201);
 })
 
 app.get('/divide',function(req,res){
     console.log('from GET',numberArray)
     res.send(numberArray);
 })
/* END DIVIDE*/

/*BEGIN MULTIPLY*/
app.post('/multiply',function(req,res){
    
    var firstNumber = parseInt(req.body.first);
    var secondNumber = parseInt(req.body.second);
     numberArray.push(firstNumber*secondNumber);
 console.log('testerMctestTest',numberArray);
    
    res.send(201);
 })
 
 app.get('/multiply',function(req,res){
     console.log('from GET',numberArray)
     res.send(numberArray);
 })
/*END MULTIPLY*/

app.listen(port, function(){
    console.log('listening on port', port);
})
