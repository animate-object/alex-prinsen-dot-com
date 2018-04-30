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
            return {...state, isFetching: false, failedToLoadPosts: true}
        default:
            return state
    }
}

const POSTS_INITIAL_STATE = {
    currentlyLoadedPost: undefined,
    currentlyLoadedPostTitle: undefined,
    postCache: {},
    isFetching: false,
    failedToFetchLastPost: false
}

export function postReducer(state = POSTS_INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case LOAD_POST_REQUEST:
            return {...state, isFetching: true}
        case LOAD_POST_SUCCESS:
            console.log(action);
            return {
                postCache: {
                    ...state.postCache,
                    [action.title]: action.data
                },
                isFetching: false,
                failedToFetchlastPost: false,
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

