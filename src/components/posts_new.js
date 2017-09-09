import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  // field argument contains event handlers needed to wire-up the jsx being returned
  // ...field.input says this is an object and i want all the objects properties to be communicated as props to the input tag. saves us from having to do onChange, onFocuse, onBlur, etc.
  renderTitleField(field) {
    return (
      <div>
        <input
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
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

// reduxForm function helper to wrap the PostsNew component. this allows component to talk to the associated reducer.
// assign a unique string to the form property
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
