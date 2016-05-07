window.Guestbook = React.createClass({

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
    this.loadComments();
  },


  loadComments: function(){
    $.getJSON('http://52.37.118.66:8080/getComments', function(comments){
      this.setState({comments:comments});
    }.bind(this));
  },

  postComment: function(data) {
    $.post('http://52.37.118.66:8080/addComment', data, function(){
      this.loadComments();
    }.bind(this));
  },




  render: function() {

    return (
      <div className="col-sm-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            Please sign my awesome guestbook
            <button id="refresh" className="btn btn-info guestbook-input" type="button" name="button" onClick={this.loadComments.bind(this)}>Refresh</button>
          </div>
          < CommentList comments={this.state.comments} />
          < CommentInput postComment={this.postComment} totalComments={this.state.comments.length} />
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
