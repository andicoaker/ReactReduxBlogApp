import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

// set initial state to default to empty obj
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // ES5 code below
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // Same code using ES6 below
      // square braces don't create an array, its key interpolation.
      // instead whatever variable action.payload.data.id is make a new key on this object using this key and set it's value to action.payload.data.
      // overtime as user fetches more show routes, we'll fetch each additional post and add them to the overall state object
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      console.log(action.payload.data);
      // using lodash _.mapKeys to take an array and turn it into an object itself
      // code below pulls off the id property from every incoming post
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
