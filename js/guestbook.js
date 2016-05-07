var Guestbook = React.createClass({

  getInitialState: function(){
    return {comments:[
      {
        photo: 'http://www.que.es/archivos/201004/will-smith-tema-120xXx80.jpg',
        name: 'Will',
        comment: 'nice'
      }
    ]};
  },

  componentDidMount: function() {
    //this.loadComments();
  },

  /*
  loadComments: function(){

    $.getJSON('http://localhost:3000/getComments', function(comments){
      this.setState({comments:comments});
    }.bind(this));
  },
  */

  render: function() {

    var comments = this.state.comments.map(function(comment) {
      return (
        <tr key={comment.name}>
          <td className='col-sm-1'><img className='guestbook-photo' src={comment.photo} alt='image' /></td>
          <td className='col-sm-1'><strong>{comment.name}</strong></td>
          <td >{comment.comment}</td>
        </tr>
      );
    });

    return (
      <div className="col-sm-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            Please sign my awesome guestbook
            <button id="refresh" className="btn btn-info guestbook-input" type="button" name="button">Refresh</button>
          </div>
          <div className="panel-body">
            <div className="guestbook-comments">
              <table id="comments" className="table">
                <tbody>
                  {comments}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-footer">
            <input className="form-control guestbook-input" type="text" placeholder="image" />
            <input className="form-control guestbook-input" type="text" placeholder="name" />
            <input className="form-control guestbook-input" type="text" placeholder="comment" />
            <button className="btn btn-success guestbook-input" type="button" name="button">Send</button>
          </div>
        </div>
      </div>
    );
  }

});

ReactDOM.render(
  <Guestbook />,
  document.getElementById('guestbook')
);



/*function loadGuestbook(){
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
