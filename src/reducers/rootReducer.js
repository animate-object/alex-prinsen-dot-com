import { combineReducers } from 'redux';
import { maggieReducer } from './maggieReducer';

const defaultReducer = (state = {}, action) => state;

export const rootReducer = combineReducers({
    default: defaultReducer,
    maggie: maggieReducer
});

