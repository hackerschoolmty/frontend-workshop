window.CommentInput = React.createClass({

  getInitialState: function(){
    return {
      inValidImage: false,
      inValidName: false
    };
  },

  sendComment: function() {
    var imageUrl = this.refs.imageUrl.value;
    var name = this.refs.name.value;
    var comment = this.refs.comment.value;
    // var validationStatus = {
    //   inValidImage: false,
    //   inValidName: false
    // };
    // if (!name || name.length < 1) {
    //   validationStatus.inValidName = true;
    // }
    // if (!imageUrl || imageUrl.length < 1) {
    //   validationStatus.inValidImage = true;
    // }
    //
    // if (validationStatus.inValidImage  === true || validationStatus.inValidName === true) {
    //   this.setState(validationStatus);
    //   return;
    // }
    if (!name || name.length < 1) {
      this.state.inValidName = true;
    }
    if (!imageUrl || imageUrl.length < 1) {
      this.state.inValidImage = true;
    }

    if (this.state.inValidImage  === true || this.state.inValidName === true) {
      return;
    }

    var data = {
      photo: imageUrl,
      name: name,
      comment: comment
    };
    this.props.postComment(data);
    this.clearForm();
  },

  clearForm: function() {
    this.refs.imageUrl.value = '';
    this.refs.name.value = '';
    this.refs.comment.value = '';
  },

  render: function() {
    return (
      <div className="panel-footer">
        <div className={this.state.inValidImage === true ? "form-group has-error has-feedback" : "form-group"}>
          <input type="text" ref="imageUrl" placeholder="image" className="form-control guestbook-input" id="imageUrl" />
          {this.state.inValidImage === true ? <span id="imageUrlStatus" >Requerido</span>: null}
        </div>
        <div className={this.state.inValidName === true ? "form-group has-error has-feedback" : "form-group"}>
          <input type="text" ref="name" placeholder="name" className="form-control guestbook-input" id="name"/>
          {this.state.inValidName === true ? <span id="nameStatus" >Requerido</span>: null}
        </div>
        <input className="form-control guestbook-input" type="text" ref="comment" placeholder="comment" />
        <button className="btn btn-success guestbook-input" type="button" name="button" onClick={this.sendComment.bind(this)}>Send</button>
      </div>
    )
  }

});
