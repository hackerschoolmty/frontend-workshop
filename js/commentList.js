window.CommentList = React.createClass({


  render: function() {
    var renderSingleComment = function(comment, key) {
      return (
        <tr key={key}>
          <td className='col-sm-1'><img className='guestbook-photo' src={comment.photo} alt='image' /></td>
          <td className='col-sm-1'><strong>{comment.name}</strong></td>
          <td >{comment.comment}</td>
        </tr>
      )
    };
    
    return (
      <div className="panel-body">
        <div className="guestbook-comments">
          <table id="comments" className="table">
            <tbody>
              {
                this.props.comments.map(function(comment, index) {
                  return renderSingleComment(comment, index);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

});
