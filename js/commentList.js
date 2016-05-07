window.CommentList = React.createClass({

  render: function() {
    return (
      <div className="panel-body">
        <div className="guestbook-comments">
          <table id="comments" className="table">
            <tbody>
              {
                this.props.comments.map(function(comment, index) {
                  return < SingleComment key={index} comment={comment}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

});
