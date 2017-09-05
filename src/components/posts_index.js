import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  // react life-cycle method - a function on a react component class that is automatically called by react.
  // example - componentDidMount, allows you to fetch data after component renders on the screen
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        Posts Index
        </div>
    );
  }

}

// first argument set to null because we're not passing in map state to props.
// code below is just like using the map dispatch to props function used in previous projects
export default connect (null, { fetchPosts })(PostsIndex);
