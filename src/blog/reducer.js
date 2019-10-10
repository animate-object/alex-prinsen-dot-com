import {
  LOAD_POST_LIST_REQUEST,
  LOAD_POST_LIST_SUCCESS,
  LOAD_POST_LIST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE
} from "./actions";

export const BLOG_INITIAL_STATE = {
  currentlyLoadedPost: undefined,
  currentlyLoadedPostTitle: undefined,
  postCache: {},
  isFetching: false,
  failedToLoadLastPost: false,
  isFetching: false,
  listOfPosts: [],
  failedToLoadPosts: false
};

export function reducer(state = BLOG_INITIAL_STATE, action) {
  console.log(action, state);
  switch (action.type) {
    case LOAD_POST_LIST_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_POST_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listOfPosts: action.data,
        failedToLoadPosts: false
      };
    case LOAD_POST_LIST_FAILURE:
      return { ...state, isFetching: false, failedToLoadPosts: true };
    case LOAD_POST_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        postCache: {
          ...state.postCache,
          [action.title]: action.data
        },
        isFetching: false,
        failedToLoadLastPost: false,
        currentlyLoadedPost: action.data,
        currentlyLoadedPostTitle: action.title
      };
    case LOAD_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        failedToLoadLastPost: true
      };
    default:
      return state;
  }
}
