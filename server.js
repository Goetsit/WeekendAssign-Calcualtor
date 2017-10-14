var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

var numberArray = [];

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

app.listen(port, function(){
    console.log('listening on port', port);
})
