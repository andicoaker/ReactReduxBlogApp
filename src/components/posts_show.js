import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  // accessing the id off of the route from the src/index.js file
  // match is top level property, parmas is obj that lists all the wildcard tokens that exist inside the url

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

// this.props === ownProps
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">Back to Index</Link>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// first arguement is our application state, 2nd arguement is the props obj that is going to the  component above.
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}


export default connect(mapStateToProps, { fetchPost })(PostsShow);
