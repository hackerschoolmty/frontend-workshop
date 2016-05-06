function loadGuestbook(){
  loadComments();

  //$('#send').on('click', sendComment);
  //$('#refresh').on('click', loadComments);
}

function loadComments(){

  $('#comments').empty();

  $.getJSON('http://localhost:3000/getComments', function(comments){
    for (var i = comments.length -1; i >=0; i--) {
      var newComment = buildComment(comments[i].photo, comments[i].name, comments[i].comment);
      $('#comments').append(newComment);
    }
  });
}

function buildComment(photo, name, comment){
    var html = "<tr>"
      +" <td class='col-sm-1'><img class='guestbook-photo' src='"+photo+"' alt='image' /></td>"
      +" <td class='col-sm-1'><strong>"+name+"</strong></td>"
      +" <td >"+comment+"</td>"
      +" </tr>";

    return html;
}

/*
function sendComment(){
  var photo = $('#photo').val();
  var name = $('#name').val();
  var comment = $('#comment').val();

  var data = {
    photo: photo,
    name: name,
    comment: comment
  };

  $.post('http://localhost:3000/addComment', data, function(){
    loadComments();
    $('#comment').val('');
  });
}
*/
