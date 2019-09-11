import { combineReducers } from 'redux';
// import { maggieReducer } from '../maggie';
// import { postListReducer } from '../blog/postListReducer';
// import { postReducer } from '../blog/postReducer';

const defaultReducer = (state = {}, action) => state;

export const rootReducer = combineReducers({
    default: defaultReducer,
    // maggie: maggieReducer,
    // posts: postListReducer,
    // post: postReducer
});

