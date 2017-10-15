console.log('JS sourced');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ sourced');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers)
    $('#divideBtn').on('click', divideNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#clearBtn').on('click', clearAll);
    $('.numberBtnFirst').on('click', btnsOne);
    $('.numberBtnSecond').on('click', btnsTwo);
    $('.clearNumberField').on('click', clearNumberField);
    btnData();
}//click hanlders

function btnData(){
    $('#addBtn').data({operator: '+'});
    $('#subtractBtn').data({operator: '-'});
    $('#multiplyBtn').data({operator: '*'});
    $('#divideBtn').data({operator: '/'});

    $('#btnOneFirst').data({number: 1});
    $('#btnTwoFirst').data({number: 2});
    $('#btnThreeFirst').data({number: 3});
    $('#btnFourFirst').data({number: 4});
    $('#btnFiveFirst').data({number: 5});
    $('#btnSixFirst').data({number: 6});
    $('#btnSevenFirst').data({number: 7});
    $('#btnEightFirst').data({number: 8});
    $('#btnNineFirst').data({number: 9});
    $('#btnZeroFirst').data({number: 0});

    $('#btnOneSecond').data({number: 1});
    $('#btnTwoSecond').data({number: 2});
    $('#btnThreeSecond').data({number: 3});
    $('#btnFourSecond').data({number: 4});
    $('#btnFiveSecond').data({number: 5});
    $('#btnSixSecond').data({number: 6});
    $('#btnSevenSecond').data({number: 7});
    $('#btnEightSecond').data({number: 8});
    $('#btnNineSecond').data({number: 9});
    $('#btnZeroSecond').data({number: 0});
    
}


/*BEGIN ADD*/ 
function addNumbers(){
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());
    var operator = $(this).data('operator');
    console.log(operator);

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
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());
    var operator = $(this).data('operator');
    console.log(operator);

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
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());
    var operator = $(this).data('operator');
    console.log(operator);

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
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());
    var operator = $(this).data('operator');
    console.log(operator);

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

    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());
    //var operator = ('button').data().operator;
    var operator = $('button').data('operator');

    console.log('test operator', operator);


        for(var i = 0; i < numbers.length; i += 1) {
            // Append to the dom
            var numberTest = numbers[i];

            $('#span').html(numberTest);
            console.log(numberTest);
            
        }

        var currentFinal = $('#span').html();
        $('#historyDiv').append(first + operator + second + '=' + currentFinal + '<br>');
       
}
/*END APPEND*/ 
/* BEGIN CLEAR ALL */

function clearAll(){
    $('#firstNumber').html('');
    $('#secondNumber').html('');
    $('#span').html(0);
    $('#historyDiv').html('');
}

function clearNumberField(){
    $('.numberInputs').html('');
}

/*END CLEARALL*/
/*BEGIN CALC BUTTONS*/

function btnsOne(){
    console.log('btnTest fnct', $(this).html());
    var $numberBtnClicked = $(this).data().number;

    console.log($numberBtnClicked);

    $('#firstNumber').append($numberBtnClicked);
}


function btnsTwo(){
    console.log('btnTest fnct', $(this).html());
    var $numberBtnClicked = $(this).data().number;

    console.log($numberBtnClicked);

    $('#secondNumber').append($numberBtnClicked);
    
}

/*END CALC BUTTONS*/

