import { combineReducers } from 'redux';
import { maggieReducer } from './maggieReducer';
import { postListReducer, postReducer } from './blogReducers';

const defaultReducer = (state = {}, action) => state;

export const rootReducer = combineReducers({
    default: defaultReducer,
    maggie: maggieReducer,
    posts: postListReducer,
    post: postReducer
});

