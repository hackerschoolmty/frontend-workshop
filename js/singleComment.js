window.SingleComment = React.createClass({

  render: function() {
      return (
        <tr key={this.props.key}>
          <td className='col-sm-1'><img className='guestbook-photo' src={this.props.comment.photo} alt='image' /></td>
          <td className='col-sm-1'><strong>{this.props.comment.name}</strong></td>
          <td >{this.props.comment.comment}</td>
        </tr>
      )
  }

});
