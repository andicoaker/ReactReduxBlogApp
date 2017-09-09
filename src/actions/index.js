import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PENZ07'

// make axios request, assign to the variable request, then assign request to the payload property of the action we're requiring.

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// first argument is the url, second is the object/data we want to send to the api
// callback is allowing us to ret
export function createPost (values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then( () => callback() );

  return {
    type: CREATE_POST,
    payload: request
  };
}
