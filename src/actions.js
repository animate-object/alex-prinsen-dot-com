import { MAGGIE_LEVEL_DATA } from './assets/MAGGIE_LEVEL_DATA'

export const INIT_GAME = 'INIT_GAME'
export const MOVE_ON_CLICK = 'MOVE_ON_CLICK'

export function initMaggieGame(containerHeight, containerWidth) {
    return {
        type: INIT_GAME,
        containerHeight,
        containerWidth,
        levelData: MAGGIE_LEVEL_DATA,
    }
}

export function moveOnClick() {
    return {
        type: MOVE_ON_CLICK,
        x: Math.random(),
        y: Math.random()
    }
}


export const LOAD_BLOG_POST_LIST_REQUEST = 'LOAD_BLOG_POST_LIST_REQUEST'
export const LOAD_BLOG_POST_LIST_SUCCESS = 'LOAD_BLOG_POST_LIST_SUCCESS'
export const LOAD_BLOG_POST_LIST_FAILURE = 'LOAD_BLOG_POST_LIST_FAILURE'

export function loadBlogPostListRequest() {
    return { type: LOAD_BLOG_POST_LIST_REQUEST }
}

export function loadBlogPostListSuccess(response) {
    return { type: LOAD_BLOG_POST_LIST_SUCCESS, response }
}

export function loadBlogPostListFailure(error) {
    return { type: LOAD_BLOG_POST_LIST_FAILURE, error }
}

export const LOAD_BLOG_POST_REQUEST = 'LOAD_BLOG_POST_REQUEST'
export const LOAD_BLOG_POST_SUCCESS = 'LOAD_BLOG_POST_SUCCESS'
export const LOAD_BLOG_POST_FAILURE = 'LOAD_BLOG_POST_FAILURE'

export function loadBlogPostRequest(title) {
    return { type: LOAD_BLOG_POST_LIST_REQUEST, title }
}

export function loadBlogPostSuccess(response, title) {
    return { type: LOAD_BLOG_POST_LIST_SUCCESS, title, response }
}

export function loadBlogPostFailure(error, title) {
    return { type: LOAD_BLOG_POST_LIST_FAILURE, title, error }
}



export function loadBlogPostList() {
    return dispatch => {
    
        dispatch()
    }
}
