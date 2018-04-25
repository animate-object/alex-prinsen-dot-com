export const LOAD_POST_LIST_REQUEST = 'LOAD_POST_LIST_REQUEST';
export const LOAD_POST_LIST_SUCCESS = 'LOAD_POST_LIST_SUCCESS';
export const LOAD_POST_LIST_FAILURE = 'LOAD_POST_LIST_FAILURE';


export const LOAD_POST_REQUEST = 'LOAD_POST_LIST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_LIST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_LIST_FAILURE';

export function loadPostListRequest() {
    return {type: LOAD_POST_LIST_REQUEST};
}

export function loadPostListSuccess(data) {
    return {type: LOAD_POST_LIST_SUCCESS, data};
}

export function loadPostListFailure(error) {
    return {type: LOAD_POST_LIST_REQUEST, error};
}

export function loadPostRequest(id) {
    return {type: LOAD_POST_REQUEST, id};
}

export function loadPostSuccess(id, data) {
    return {type: LOAD_POST_SUCCESS, id, data};
}

export function loadPostFailure(id, error) {
    return {type: LOAD_POST_REQUEST, id, error};
}
