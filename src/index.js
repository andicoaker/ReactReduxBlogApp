import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interacts with history library.
// Route provides configuration that says is url looks like this, show this component.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// we no longer need App now that we're using react-router, so we can delete the line below and the app.js file as well
// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// If user goes to a route path, show the component listed
// adding :id to the path gives react-router a wild card that it will try to match to (no longer use this once routes are created, so this was removed)
// switch component looks at all routes inside and only renders the first route that matches the url, so put most specific route first.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
