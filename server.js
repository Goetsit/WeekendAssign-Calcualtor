var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculate',function(req,res){
   var firstNumber = parseInt(req.body.firstNumber);
   var secondNumber = parseInt(req.body.secondNumber);

   console.log('numbers from server', firstNumber, secondNumber);
})

app.listen(port, function(){
    console.log('listening on port', port);
})
