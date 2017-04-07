var USER_DATA = {
  name: 'Tingxuan Zhang',
  username: 'tingxuanz',
  image: 'https://avatars1.githubusercontent.com/u/17842286?v=3&u=bbeced759c9bd93cc5efa4bb60f2d6068598f79e&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return <img src='this.props.imageUrl' style = {{height: 100, width: 100}}>
  }
});


var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"https://github.com/" + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl = {this.props.user.image} />
        <ProfileName name = {this.props.user.name} />
        <ProfileLink username = {this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
