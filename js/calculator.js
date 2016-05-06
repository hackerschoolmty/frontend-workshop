$.fn.calculator = function(){

  var html = "<table class='table'>"
            +"  <tr>"
            +"    <td>"
            +"      Number 1:"
            +"    </td>"
            +"    <td>"
            +"      <input id='number1' class='form-control' type='text'>"
            +"    </td>"
            +"  </tr>"
            +"  <tr>"
            +"    <td>"
            +"      Number 2:"
            +"    </td>"
            +"    <td>"
            +"      <input id='number2' class='form-control' type='text'>"
            +"    </td>"
            +"  </tr>"
            +"  <tr>"
            +"    <td>"
            +"      <button id='addButton' class='btn btn-success' type='button'>Add</button>"
            +"    </td>"
            +"    <td>"
            +"      <input id='result' class='form-control' type='text' readonly='readonly'>"
            +"    </td>"
            +"  </tr>"
            +"</table>";

    this.html(html);

    function add(){
      var number1 = $('#number1').val();
      var number2 = $('#number2').val();
      var result = parseInt(number1) + parseInt(number2);

      $('#result').val(result);
      $('#result').addClass('shake');
    }

    $('#addButton').on('click', add);
}
