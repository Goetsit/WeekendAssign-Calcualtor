console.log('JS sourced');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ sourced');
    $('#addBtn').on('click', addNumbers);
}//click hanlders


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

        getNumbers();
    }).fail(function(message){
        console.log('things broke', first,second);
    })
console.log(first,second);


function getNumbers(){
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

function appendToDOM(numbers){

    /*
    console.log('beginning of append',numbers);
    
    $('#testspan').html(numbers.number);
    */

    //$('#numbersTable').empty();
        for(var i = 0; i < numbers.length; i += 1) {
            // Append to the dom
            var numberTest = numbers[i];

            $('#testspan').html(numberTest);
            console.log(numberTest);
            /*
            var $tr = $('<tr></tr>');
            $tr.append('<td>' + numberTest + '</td>');
            $('#numbersTable').append($tr);

            */
        }

        
}
