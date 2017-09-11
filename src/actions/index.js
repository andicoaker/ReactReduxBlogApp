import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

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

// fetching single post using axios.get
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

// deleting single post using axios.delete
// only need to return the id of the post we are deleteing
// add callback function to return the user to the main list of posts
export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then( () => callback() );

  return {
    type: DELETE_POST,
    payload: id
  };
}
