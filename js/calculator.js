$(document).ready(onDocumentReady)

function onDocumentReady(){

  function add(){
    //var number1 = document.getElementById('number1').value;
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var result = parseInt(number1) + parseInt(number2);

    $('#result').val(result);
    $('#result').addClass('shake');
  }

  //var button = document.getElementById('addButton');
  //button.addEventListener('click', add);

  $('#addButton').on('click', add);
}
