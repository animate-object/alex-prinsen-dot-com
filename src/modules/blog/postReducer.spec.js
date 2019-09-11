import { 
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
} from '../actions/blogActions';

import { postReducer } from './postReducer';


const POSTS_INITIAL_STATE = {
    currentlyLoadedPost: undefined,
    currentlyLoadedPostTitle: undefined,
    postCache: {},
    isFetching: false,
    failedToLoadLastPost: false
}

const LIST_OF_FISH = {
    data: 'Carp, Perch, Albacore',
    title: 'Fishticle'
}

const GOOD_COLORS = {
    data: 'Azul, Burnt Auburn, Tumbleweed',
    title: 'Good Colors'
}

describe('postReducer', () => {
    it('Should load initial state', () => {
        expect(postReducer(undefined, {})).toEqual(POSTS_INITIAL_STATE);    
    });
    it('should handle LOAD_POST_REQUEST', () => {
        const expectedState = {...POSTS_INITIAL_STATE, isFetching: true}
        expect(postReducer(undefined, {type: LOAD_POST_REQUEST})).toEqual(
            expectedState
        )
    });
    it('should handle LOAD_POST', () => {
        const testLoadPostAction = { type: LOAD_POST_SUCCESS, ...GOOD_COLORS}
        expect(postReducer(undefined, testLoadPostAction)).toEqual(
            {
                postCache: {
                    'Good Colors': 'Azul, Burnt Auburn, Tumbleweed'
                },
                isFetching: false,
                failedToLoadLastPost: false,
                currentlyLoadedPost: 'Azul, Burnt Auburn, Tumbleweed',
                currentlyLoadedPostTitle: 'Good Colors'
            }
        )
    });
    it('should handle LOAD_POST with previous cache', () => {
        const testLoadPostAction = { type: LOAD_POST_SUCCESS, ...LIST_OF_FISH}
        const prevState = {
            postCache: {
                'Good Colors': 'Azul, Burnt Auburn, Tumbleweed'
            },
            isFetching: true,
            failedToLoadLastPost: false,
            currentlyLoadedPost: 'Azul, Burnt Auburn, Tumbleweed',
            currentlyLoadedPostTitle: 'Good Colors'
        }
        expect(postReducer(prevState, testLoadPostAction)).toEqual(
            {
                postCache: {
                    'Good Colors': 'Azul, Burnt Auburn, Tumbleweed',
                    'Fishticle': 'Carp, Perch, Albacore'
                },
                isFetching: false,
                failedToLoadLastPost: false,
                currentlyLoadedPost: 'Carp, Perch, Albacore',
                currentlyLoadedPostTitle: 'Fishticle'
            }
        )
    });
    it('should handle LOAD_POST_FAILURE', () => {
        expect(postReducer(undefined, {type: LOAD_POST_FAILURE})).toEqual(
            {
                postCache: {},
                currentlyLoadedPost: undefined,
                currentlyLoadedPostTitle: undefined,
                isFetching: false,
                failedToLoadLastPost: true
            }
        )
    });
});

