import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_LIST_FAILURE,
  LOAD_POST_LIST_REQUEST,
  LOAD_POST_LIST_SUCCESS
} from "./actions";

import { reducer, BLOG_INITIAL_STATE } from "./reducer";

const LIST_OF_FISH = {
  data: "Carp, Perch, Albacore",
  title: "Fishticle"
};

const GOOD_COLORS = {
  data: "Azul, Burnt Auburn, Tumbleweed",
  title: "Good Colors"
};

export const state = options => ({ ...BLOG_INITIAL_STATE, options });

describe(reducer, () => {
  it("Should load initial state", () => {
    expect(reducer(undefined, {})).toEqual(BLOG_INITIAL_STATE);
  });
  it("should handle LOAD_POST_REQUEST", () => {
    const expectedState = { ...BLOG_INITIAL_STATE, isFetching: true };
    expect(reducer(undefined, { type: LOAD_POST_REQUEST })).toEqual(
      state({ isFetching: true })
    );
  });
  it("should handle LOAD_POST", () => {
    const testLoadPostAction = { type: LOAD_POST_SUCCESS, ...GOOD_COLORS };
    expect(reducer(undefined, testLoadPostAction)).toEqual(
      state({
        postCache: {
          "Good Colors": "Azul, Burnt Auburn, Tumbleweed"
        },
        isFetching: false,
        failedToLoadLastPost: false,
        currentlyLoadedPost: "Azul, Burnt Auburn, Tumbleweed",
        currentlyLoadedPostTitle: "Good Colors"
      })
    );
  });
  it("should handle LOAD_POST with previous cache", () => {
    const testLoadPostAction = { type: LOAD_POST_SUCCESS, ...LIST_OF_FISH };
    const prevState = {
      postCache: {
        "Good Colors": "Azul, Burnt Auburn, Tumbleweed"
      },
      isFetching: true,
      failedToLoadLastPost: false,
      currentlyLoadedPost: "Azul, Burnt Auburn, Tumbleweed",
      currentlyLoadedPostTitle: "Good Colors"
    };
    expect(reducer(prevState, testLoadPostAction)).toEqual(
      state({
        postCache: {
          "Good Colors": "Azul, Burnt Auburn, Tumbleweed",
          Fishticle: "Carp, Perch, Albacore"
        },
        isFetching: false,
        failedToLoadLastPost: false,
        currentlyLoadedPost: "Carp, Perch, Albacore",
        currentlyLoadedPostTitle: "Fishticle"
      })
    );
  });
  it("should handle LOAD_POST_FAILURE", () => {
    expect(reducer(undefined, { type: LOAD_POST_FAILURE })).toEqual(
      state({
        postCache: {},
        currentlyLoadedPost: undefined,
        currentlyLoadedPostTitle: undefined,
        isFetching: false,
        failedToLoadLastPost: true
      })
    );
  });

  it("Should update isFetching for LOAD_POST_LIST_REQUEST", () => {
    expect(
      postListReducer(undefined, { type: LOAD_POST_LIST_REQUEST })
    ).toEqual(
      state({
        isFetching: true,
        listOfPosts: [],
        failedToLoadPosts: false
      })
    );
  });

  it("Should get listOfPosts and update related state for LOAD_POST_LIST_SUCCESS", () => {
    const prevState = {
      isFetching: true,
      listOfPosts: [],
      failedToLoadPosts: true
    };
    const action = {
      type: LOAD_POST_LIST_SUCCESS,
      data: ["cool fish", "good colors"]
    };
    expect(postListReducer(prevState, action)).toEqual(
      state({
        isFetching: false,
        listOfPosts: ["cool fish", "good colors"],
        failedToLoadPosts: false
      })
    );
  });

  it("Should retain old list but mark failed to load for LOAD_POST_LIST_FAILURE", () => {
    const prevState = {
      isFetching: true,
      listOfPosts: ["bigfeet is the plural of bigfoot"],
      failedToLoadPosts: false
    };
    const action = { type: LOAD_POST_LIST_FAILURE };
    expect(postListReducer(prevState, action)).toEqual(
      state({
        isFetching: false,
        listOfPosts: ["bigfeet is the plural of bigfoot"],
        failedToLoadPosts: true
      })
    );
  });
});
