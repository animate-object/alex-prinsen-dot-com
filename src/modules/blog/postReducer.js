import {
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE
} from './blogActions'


const POSTS_INITIAL_STATE = {
    currentlyLoadedPost: undefined,
    currentlyLoadedPostTitle: undefined,
    postCache: {},
    isFetching: false,
    failedToLoadLastPost: false
}

export function postReducer(state = POSTS_INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST_REQUEST:
            return { ...state, isFetching: true }
        case LOAD_POST_SUCCESS:
            return {
                postCache: {
                    ...state.postCache,
                    [action.title]: action.data
                },
                isFetching: false,
                failedToLoadLastPost: false,
                currentlyLoadedPost: action.data,
                currentlyLoadedPostTitle: action.title
            }
        case LOAD_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                failedToLoadLastPost: true
            }
        default:
            return state
    }
}

