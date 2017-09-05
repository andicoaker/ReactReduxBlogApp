import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interacts with history library.
// Route provides configuration that says is url looks like this, show this component.
import { BrowserRouter, Route } from 'react-router-dom';

// we no longer need App now that we're using react-router, so we can delete this and the app.js file as well
// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// If user goes to a route path, show the component listed
// adding :id to the path gives react-router a wild card that it will try to match to
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
