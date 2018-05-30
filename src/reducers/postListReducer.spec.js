import {
    postListReducer
} from '../reducers/postListReducer';
import {
    LOAD_POST_LIST_REQUEST,
    LOAD_POST_LIST_SUCCESS,
    LOAD_POST_LIST_FAILURE
} from '../actions/blogActions';

describe("postReducer", () => {
    it("Should return the initial state", () => {
        expect(postListReducer(undefined, {})).toEqual(
            {
                isFetching: false,
                listOfPosts: [],
                failedToLoadPosts: false
            }
        )
    });
    it("Should update isFetching for LOAD_POST_LIST_REQUEST", () => {
        expect(postListReducer(undefined, {type: LOAD_POST_LIST_REQUEST})).toEqual(
            {
                isFetching: true,
                listOfPosts: [],
                failedToLoadPosts: false
            }
        )
    });
    it("Should get listOfPosts and update related state for LOAD_POST_LIST_SUCCESS", () => {
        const prevState = {isFetching: true, listOfPosts: [], failedToLoadPosts: true}
        const action = {type: LOAD_POST_LIST_SUCCESS, data: ['cool fish', 'good colors']}
        expect(postListReducer(prevState, action)).toEqual(
            {
                isFetching: false,
                listOfPosts: ['cool fish', 'good colors'],
                failedToLoadPosts: false
            }
        )
    });
    it("Should retain old list but mark failed to load for LOAD_POST_LIST_FAILURE", () => {
        const prevState = {
            isFetching: true,
            listOfPosts: ['bigfeet is the plural of bigfoot'],
            failedToLoadPosts: false
        }
        const action = {type: LOAD_POST_LIST_FAILURE}
        expect(postListReducer(prevState, action)).toEqual(
            {
                isFetching: false,
                listOfPosts: ['bigfeet is the plural of bigfoot'],
                failedToLoadPosts: true
            }
        )
    });
});
