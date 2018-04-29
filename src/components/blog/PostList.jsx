import React from 'react';
import { PostListEntry } from './PostListEntry';
import { connect } from 'react-redux';

export const PostList = (props) => {
    return (
        <ul>
            {
                props.postList.length > 1 &&
                props.postList.map(post => {
                    return <PostListEntry key={post} title={post}/>
                })
            }
        </ul>
    )
}

