import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  // field argument contains event handlers needed to wire-up the jsx being returned
  // ...field.input says this is an object and i want all the objects properties to be communicated as props to the input tag. saves us from having to do onChange, onFocuse, onBlur, etc.
  // field.meta.touched - turnary expression. if user has touched the field, then show the error message otherwise return the string
  // refactored code to destructure field.meta.touched & field.meta.error using ES6 syntax, so you no longer see it below. instead you just see touched & error
  renderField(field) {

    const { meta: { touched, error } } = field;
    const className= `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // name property specificies the piece of state this component will produce
  // component property in the form field component adds a function that will return some jsx to show the field component on the screen

  // submit function that is passed into the onSubmit event in the form below
  // this === component
  // calls an action creator responsible for posting to API
  // this.props.history.push - navigates the user to the home page after the post has been created
  onSubmit(values) {
    // console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// this function is validating the info the user inputs into the form

function validate(values) {
  // always start off by creating empty obj
  const errors = {};

  // validate the inputs from 'values'. if not valid, assign message to display to user. can combine multiple validations if needed.
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // if errors is empty, the form is fine to submit. if errors has any properties, redux-form assumes form is invalid
  return errors;
}

// reduxForm function helper to wrap the PostsNew component. this allows component to talk to the associated reducer.
// assign a unique string to the form property
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect (null, {createPost})(PostsNew)
);
