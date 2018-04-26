import { 
    LOAD_POST_LIST_REQUEST,
    LOAD_POST_LIST_SUCCESS,
    LOAD_POST_LIST_FAILURE,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE
} from '../actions/blogActions'

const POST_LIST_INITIAL_STATE = {
    isFetching: false,
    listOfPosts: [],
    failedToLoadPosts: false
}

export function postListReducer(state = POST_LIST_INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST_LIST_REQUEST:
            return {...state, isFetching: true}
        case LOAD_POST_LIST_SUCCESS:
            return {isFetching: false, listOfPosts: action.data, failedToLoadPosts: false}
        case LOAD_POST_LIST_FAILURE:
            return {isFetching: false, failedToLoadPosts: true}
        default:
            return state
    }
}

const POSTS_INITIAL_STATE = {
    currentlyLoadedPost: undefined,
    postsCache: {},
    isFetching: false,
    failedToFetchLastPost: false
}

export function postReducer(state = POSTS_INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST_REQUEST:
            return {...state, isFetching: true}
        case LOAD_POST_SUCCESS:
            return {
                ...state,
                postsCache: {
                    ...postsCache,
                    [actions.title]: actions.data
                },
                isFetching: false,
                failedToFetchlastPost: false,
                currentlyLoadedPost: actions.data
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

