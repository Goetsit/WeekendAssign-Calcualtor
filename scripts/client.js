console.log('JS sourced');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ sourced');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers)
    $('#divideBtn').on('click', divideNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#clear').on('click', clearAll);
}//click hanlders

/*BEGIN ADD*/ 
function addNumbers(){
    var first = parseInt($('#firstNumber').val());
    var second = parseInt($('#secondNumber').val());


    $.ajax({
        method:'POST',
        url: '/add',
        data: {
            first,
            second
        }
    }).done(function(response){
        console.log('I guess things worked', first,second);

        getNumbersAdd();
    }).fail(function(message){
        console.log('things broke', first,second);
    })
console.log(first,second);


function getNumbersAdd(){
    $.ajax({
       method:'GET',
       url: '/add'
   }).done(function(response){
       var numbersAdded = response;

       console.log('GET returned these numbers',numbersAdded);
       console.log('addedNumber variable',numbersAdded);

       appendToDOM(numbersAdded);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

/*END ADD*/
/*BEGIN SUBTRACT*/
function subtractNumbers(){
    var first = parseInt($('#firstNumber').val());
    var second = parseInt($('#secondNumber').val());


    $.ajax({
        method:'POST',
        url: '/subtract',
        data: {
            first,
            second
        }
    }).done(function(response){
        console.log('I guess things worked', first,second);

        getNumbersSubtract();
    }).fail(function(message){
        console.log('things broke', first,second);
    })
console.log(first,second);


function getNumbersSubtract(){
    $.ajax({
       method:'GET',
       url: '/subtract'
   }).done(function(response){
       var numbersSubtracted = response;

       console.log('GET returned these numbers',numbersSubtracted);
       console.log(' variable',numbersSubtracted);

       appendToDOM(numbersSubtracted);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}
/*END SUBTRACT*/

/* BEGIN DIVIDE */
function divideNumbers(){
    var first = parseInt($('#firstNumber').val());
    var second = parseInt($('#secondNumber').val());


    $.ajax({
        method:'POST',
        url: '/divide',
        data: {
            first,
            second
        }
    }).done(function(response){
        console.log('I guess things worked', first,second);

        getNumbersDivide();
    }).fail(function(message){
        console.log('things broke', first,second);
    })
console.log(first,second);


function getNumbersDivide(){
    $.ajax({
       method:'GET',
       url: '/divide'
   }).done(function(response){
       var numbersDivided = response;

       console.log('GET returned these numbers',numbersDivided);
       console.log('addedNumber variable',numbersDivided);

       appendToDOM(numbersDivided);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

 /*END DIVIDE */
/* BEGIN MULTIPLY*/

function multiplyNumbers(){
    var first = parseInt($('#firstNumber').val());
    var second = parseInt($('#secondNumber').val());


    $.ajax({
        method:'POST',
        url: '/multiply',
        data: {
            first,
            second
        }
    }).done(function(response){
        console.log('I guess things worked', first,second);

        getNumbersMultiplied();
    }).fail(function(message){
        console.log('things broke', first,second);
    })
console.log(first,second);


function getNumbersMultiplied(){
    $.ajax({
       method:'GET',
       url: '/multiply'
   }).done(function(response){
       var numbersMultiplied = response;

       console.log('GET returned these numbers',numbersMultiplied);
       console.log('addedNumber variable',numbersMultiplied);

       appendToDOM(numbersMultiplied);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

/*END MULTIPLY*/

/* BEGIN appendToDOM */

function appendToDOM(numbers){

        for(var i = 0; i < numbers.length; i += 1) {
            // Append to the dom
            var numberTest = numbers[i];

            $('#span').html(numberTest);
            console.log(numberTest);
            
        }
       
}
/*END APPEND*/ 
/* BEGIN CLEAR ALL */

function clearAll(){
    $('.numberInput').val('');
    $('#span').html(0);
}

/*END CLEARALL*/
