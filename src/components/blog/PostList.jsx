import React from 'react';
import { PostListEntry } from './PostListEntry';
import { connect } from 'react-redux';
import './PostList.css';

export const PostList = (props) => {
    return (
        <div className="post-list-container">
            <ul className="post-list-content">
                {
                    props.postList.length > 1 &&
                    props.postList.map(post => {
                        return <PostListEntry key={post} title={post}/>
                    })
                }
            </ul>
        </div>
    )
}

