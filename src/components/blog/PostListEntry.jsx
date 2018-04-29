import React from 'react';

export const PostListEntry = props => {
    // Will contain the post title, and a link to the post's page.
    return (
        <li>
            {props.title}
        </li>
    )
}
