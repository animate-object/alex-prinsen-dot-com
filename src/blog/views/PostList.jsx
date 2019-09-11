import React from "react";
import { PostListEntry } from "./PostListEntry";
import "./PostList.css";

export const PostList = props => {
  return (
    <div className="post-list-container">
      <ul className="post-list-content">
        {props.postList.length > 0 &&
          props.postList.map(post => {
            return <PostListEntry key={post} title={post} />;
          })}
      </ul>
    </div>
  );
};
