import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  // field argument contains event handlers needed to wire-up the jsx being returned
  // ...field.input says this is an object and i want all the objects properties to be communicated as props to the input tag. saves us from having to do onChange, onFocuse, onBlur, etc.
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  // name property specificies the piece of state this component will produce
  // component property in the form field component adds a function that will return some jsx to show the field component on the screen

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

// validating the info the user inputs into the form

function validate(values) {
  // start off by creating empty obj
  const errors = {};

  // validate the inputs from 'values'. if not valid, assign message to display to user. can combine multiple validations if needed.
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if (!values.catagories) {
    errors.title = "Enter some catagories!";
  }
  if (!values.content) {
    errors.title = "Enter some content!";
  }

  // if errors is empty, the form is fine to submit. if errors has any properties, redux-form assumes form is invalid
  return errors;
}

// reduxForm function helper to wrap the PostsNew component. this allows component to talk to the associated reducer.
// assign a unique string to the form property
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
