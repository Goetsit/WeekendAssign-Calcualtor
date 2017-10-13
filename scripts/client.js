console.log('JS sourced');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ sourced');
    $('#addBtn').on('click', addNumbers);
}//click hanlders


function addNumbers(){
    var $numbersToCalc = {firstNumber: $('#firstNumber').val(),
                secondNumber: $('#secondNumber').val()
            };
    $.ajax({
        method:'POST',
        url: '/calculate',
        data: $numbersToCalc
    }).done(function(response){
        console.log('I guess things worked', $numbersToCalc);
    }).fail(function(message){
        console.log('things broke', $numbersToCalc);
    })
console.log($numbersToCalc);
}
