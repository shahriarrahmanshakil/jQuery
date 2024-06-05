function insertNumber(number){
    let existingNumber =  $('#result').val();
    $('#result').val(existingNumber + number); 
}

function clearResult(){
    $('#result').val('');
}

function calculate(){
    let calculateResult = eval($('#result').val());
    $('#result').val(calculateResult);
}

function deleteNumber(){
    let currentvalue = $('#result').val();
    if(currentvalue){
        $('#result').val($('#result').val().slice(0,-1));
    }

}