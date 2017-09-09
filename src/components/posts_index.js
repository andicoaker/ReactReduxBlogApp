import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  // react life-cycle method - a function on a react component class that is automatically called by react.
  // example - componentDidMount, allows you to fetch data after component renders on the screen
  componentDidMount() {
    this.props.fetchPosts();
  }

  // create helper function below to map over lists of posts and create one <li> for every post we fetch. this is an object that has a list of posts, not an array, so we have to use the lodash map method and not the typical map method on an array.
  // second argument returns the jsx
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );  
    });
  }

  render () {
    // console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { posts: state.posts };
}

// Starting off, our first argument set to null because we're not passing in map state to props.
// code below is just like using the map dispatch to props function used in previous projects
// Added in mapStateToProps function above and then added mapStateToProps as first argument below once fucntion was created.

export default connect (mapStateToProps, { fetchPosts })(PostsIndex);
