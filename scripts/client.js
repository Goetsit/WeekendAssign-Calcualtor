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
    

console.log($numbersToCalc);
}