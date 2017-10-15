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

/*BEGIN BTNDATA*/
/*SETS EACH BUTTON TO HAVE APPROPRIATE NUMBER AND OPERATOR AT PAGE READY*/
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
/*TAKES THE HTML VALUES FOR THE FIRST AND SECOND NUMBERS*/
/*FIRST USES POST METHOD TO SEND SEPERATE NUMBERS*/
/*USES GET TO RETRIEVE FINAL CALUCALTED NUMBER*/
function addNumbers(){
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());

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

function getNumbersAdd(){
    $.ajax({
       method:'GET',
       url: '/add'
   }).done(function(response){
       var numbersAdded = response;
       appendToDOM(numbersAdded);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

/*END ADD*/
/*BEGIN SUBTRACT*/
/*TAKES THE HTML VALUES FOR THE FIRST AND SECOND NUMBERS*/
/*FIRST USES POST METHOD TO SEND SEPERATE NUMBERS*/
/*USES GET TO RETRIEVE FINAL CALUCALTED NUMBER*/
function subtractNumbers(){
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());


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

function getNumbersSubtract(){
    $.ajax({
       method:'GET',
       url: '/subtract'
   }).done(function(response){
       var numbersSubtracted = response;
       appendToDOM(numbersSubtracted);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}
/*END SUBTRACT*/

/* BEGIN DIVIDE */
/*TAKES THE HTML VALUES FOR THE FIRST AND SECOND NUMBERS*/
/*FIRST USES POST METHOD TO SEND SEPERATE NUMBERS*/
/*USES GET TO RETRIEVE FINAL CALUCALTED NUMBER*/
function divideNumbers(){
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());

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

function getNumbersDivide(){
    $.ajax({
       method:'GET',
       url: '/divide'
   }).done(function(response){
       var numbersDivided = response;
       appendToDOM(numbersDivided);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

 /*END DIVIDE */
/* BEGIN MULTIPLY*/
/*TAKES THE HTML VALUES FOR THE FIRST AND SECOND NUMBERS*/
/*FIRST USES POST METHOD TO SEND SEPERATE NUMBERS*/
/*USES GET TO RETRIEVE FINAL CALUCALTED NUMBER*/
function multiplyNumbers(){
    var first = parseInt($('#firstNumber').html());
    var second = parseInt($('#secondNumber').html());

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

function getNumbersMultiplied(){
    $.ajax({
       method:'GET',
       url: '/multiply'
   }).done(function(response){
       var numbersMultiplied = response;
       appendToDOM(numbersMultiplied);

    }).fail(function(message){
        console.log('did not work?');
    })

    }
}

/*END MULTIPLY*/

/* BEGIN appendToDOM */
/*APPENDS HISTORY AND CALCULATED FINAL NUMBER*/

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
/* BEGIN CLEAR FUNCTIONS */
/*CLEAR ALL CLEARS INPUTS AND HISTORY/EQUALS SECTION*/
function clearAll(){
    $('#firstNumber').html('');
    $('#secondNumber').html('');
    $('#span').html(0);
    $('#historyDiv').html('');
}

/*CLEAR ON NUMBERPAD CLEARS ONLY THE INPUT FIELDS, NOT HISTORY*/
function clearNumberField(){
    $('.numberInputs').html('');
}

/*END CLEARALL*/
/*BEGIN CALC BUTTONS*/
/*NUMBERPAD BUTTONS*/
function btnsOne(){
    var $numberBtnClicked = $(this).data().number;
    $('#firstNumber').append($numberBtnClicked);
}


function btnsTwo(){
    var $numberBtnClicked = $(this).data().number;
    $('#secondNumber').append($numberBtnClicked);
    
}

/*END CALC BUTTONS*/

