import axios from "axios";

export const LOAD_POST_LIST_REQUEST = "LOAD_POST_LIST_REQUEST";
export const LOAD_POST_LIST_SUCCESS = "LOAD_POST_LIST_SUCCESS";
export const LOAD_POST_LIST_FAILURE = "LOAD_POST_LIST_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

const API_HOST = "https://3ugvz6jhxa.execute-api.us-east-1.amazonaws.com/dev";

function getPostList() {
  return axios.get(`${API_HOST}/posts/`);
}

function getPost(title) {
  return axios.get(`${API_HOST}/posts/${title}`);
}

export function loadPostListRequest() {
  return { type: LOAD_POST_LIST_REQUEST };
}

export function loadPostListSuccess(data) {
  return { type: LOAD_POST_LIST_SUCCESS, data };
}

export function loadPostListFailure(error) {
  return { type: LOAD_POST_LIST_REQUEST, error };
}

export function loadPostRequest(title) {
  return { type: LOAD_POST_REQUEST, title };
}

export function loadPostSuccess(title, data) {
  return { type: LOAD_POST_SUCCESS, title, data };
}

export function loadPostFailure(title, error) {
  return { type: LOAD_POST_REQUEST, title, error };
}

export function loadPostList() {
  return function(dispatch, getState) {
    const blogState = getState().blog;
    if (blogState.listOfPosts != null && blogState.listOfPosts.length > 0) {
      dispatch(loadPostListSuccess(blogState.listOfPosts));
    } else {
      dispatch(loadPostListRequest());
      getPostList()
        .then(res => dispatch(loadPostListSuccess(res.data)))
        .catch(err => dispatch(loadPostListFailure(err)));
    }
  };
}

export function loadPost(title) {
  return function(dispatch, getState) {
    const blogState = getState().blog;
    const loadedPost = blogState.postCache[title];
    if (loadedPost) {
      dispatch(loadPostSuccess(title, loadedPost));
    } else {
      dispatch(loadPostRequest(title));
      getPost(title)
        .then(res => dispatch(loadPostSuccess(title, res.data)))
        .catch(err => dispatch(loadPostFailure(title, err)));
    }
  };
}
