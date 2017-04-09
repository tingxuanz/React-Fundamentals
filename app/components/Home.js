var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p>Motto</p>
        <Link to='/playerOne'>
          <button className='btn btn-lg btn-success' type='button'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
