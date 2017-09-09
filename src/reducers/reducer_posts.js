import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// set initial state to default to empty obj
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload.data);
      // using lodash _.mapKeys to take an array and turn it into an object itself
      // code below pulls off the id property from every incoming post
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}
